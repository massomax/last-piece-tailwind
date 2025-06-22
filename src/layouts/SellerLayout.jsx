import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getSeller } from "../api/sellerApi";
import { NavMenu } from "../components/NavMenu";
import { Header } from "../components/pages/Header";

export function SellerLayout() {
  const navigate = useNavigate();

  // Опционально проверить авторизацию селлера
  useEffect(() => {
    (async () => {
      const seller = await getSeller();
      if (!seller) {
        // если ещё не регистрировали — на форму
        navigate("/seller/register", { replace: true });
      } else if (seller.status === "pending") {
        // если ждём одобрения — на страницу статуса
        // (и только если мы не уже там)
        if (window.location.pathname !== "/seller/status") {
          navigate("/seller/status", { replace: true });
        }
      }
      // approved — пусть остаётся где есть Outlet
    })();
  }, [navigate]);

  const handleLogOut = () => {
    // при logout — чистим localStorage и уходим на главную
    localStorage.removeItem("mock:seller");
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-text transition-colors duration-300">
      {/* Внутренний header селлера */}
      <Header
        title={"Панель продовца"}
        handleButton={handleLogOut}
        titleButton={"Выход"}
      />
      <main className="flex-1 overflow-auto w-full sm:max-w-[540px] sm:mx-auto px-0 sm:px-0 pb-16">
        <Outlet />
      </main>
      <NavMenu />
    </div>
  );
}

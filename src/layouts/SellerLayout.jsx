import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getSeller } from "../api/sellerApi";

export function SellerLayout() {
  const navigate = useNavigate();

  // Опционально проверить авторизацию селлера
  useEffect(() => {
    if (!getSeller()?.status === "approved") navigate("/seller/register");
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-text transition-colors duration-300">
      {/* Внутренний header селлера */}
      <div className="flex items-center justify-between border-b bg-background-secondary p-4 sticky top-0 z-10">
        <h1 className="text-xl font-semibold">Панель продавца</h1>
        <button
          className="flex items-center gap-1 text-text-secondary hover:text-text"
          onClick={() => {
            // при logout — чистим localStorage и уходим на главную
            localStorage.removeItem("mock:seller");
            navigate("/", { replace: true });
          }}>
          Выход
        </button>
      </div>

      <main className="flex-1 overflow-auto w-full sm:max-w-[540px] sm:mx-auto px-0 sm:px-0 pb-16">
        <Outlet />
      </main>
    </div>
  );
}

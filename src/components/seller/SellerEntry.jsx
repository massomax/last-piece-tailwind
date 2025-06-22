import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getSeller } from "../../api/sellerApi";

export function SellerEntry() {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const seller = await getSeller();
      if (!seller) {
        // не зарегистрирован
        navigate("register", { replace: true });
      } else if (seller.status === "pending") {
        // ждёт одобрения
        navigate("status", { replace: true });
      } else if (seller.status === "approved") {
        // одобрен — в дашборд
        navigate("dashboard", { replace: true });
      } else {
        // на всякий случай обратно на регистрацию
        navigate("register", { replace: true });
      }
    })();
  }, [navigate]);

  // Пока ждём getSeller() — можно показать спиннер
  return;
}

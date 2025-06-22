// components/Seller/SellerStatus.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSeller, updateSellerStatus } from "../../api/sellerApi";

export function SellerStatus() {
  const navigate = useNavigate();
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(true);

  // При монтировании подгружаем статус
  useEffect(() => {
    (async () => {
      const s = await getSeller();
      setSeller(s);
      setLoading(false);
      // если уже approved, сразу в дашборд
      if (s?.status === "approved") {
        navigate("/seller/dashboard", { replace: true });
      }
    })();
  }, [navigate]);

  if (loading) {
    return <p className="p-4 text-center">Загрузка статуса…</p>;
  }
  if (!seller) {
    // если данных нет, редирект на регистрацию
    navigate("/seller/register", { replace: true });
    return null;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 text-center">
      {seller.status === "pending" && (
        <>
          <h2 className="text-xl font-semibold mb-4">Заявка отправлена</h2>
          <p className="mb-6">
            Ваша заявка на регистрацию принята. Ожидайте одобрения
            администратором.
          </p>
          {/* Кнопка для разработки — симулировать одобрение */}
          <button
            onClick={async () => {
              const updated = await updateSellerStatus("approved");
              setSeller(updated);
              navigate("/seller/dashboard", { replace: true });
            }}
            className="py-2 px-4 bg-green-500 text-white rounded">
            Симулировать одобрение
          </button>
        </>
      )}

      {seller.status === "approved" && (
        <p>Одобрено! Перенаправляем в дашборд…</p>
      )}

      {seller.status === "rejected" && (
        <>
          <h2 className="text-xl font-semibold mb-4">Заявка отклонена</h2>
          <p>
            Свяжитесь с поддержкой для уточнения причин или попробуйте снова.
          </p>
        </>
      )}
    </div>
  );
}

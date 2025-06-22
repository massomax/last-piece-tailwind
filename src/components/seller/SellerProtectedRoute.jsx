import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getSeller } from "../../api/sellerApi";

export function SellerProtectedRoute({ redirectTo }) {
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSeller().then((s) => {
      setSeller(s);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Загрузка…</div>;

  if (!seller || seller.status !== "approved") {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
}

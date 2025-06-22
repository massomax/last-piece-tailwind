// src/routes/SellerRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { SellerEntry } from "../components/seller/SellerEntry";
import { SellerRegisterForm } from "../components/seller/SellerRegisterForm";
import { SellerStatus } from "../components/seller/SellerStatus";
import { SellerProtectedRoute } from "../components/seller/SellerProtectedRoute";
// import SellerProductsList from "../components/seller/SellerProductsList";
// import SellerProductForm from "../components/seller/SellerProductForm";

export function SellerRoutes() {
  return (
    <Routes>
      <Route index element={<SellerEntry />} />
      <Route path="register" element={<SellerRegisterForm />} />
      <Route path="status" element={<SellerStatus />} />

      <Route element={<SellerProtectedRoute redirectTo="status" />}>
        <Route path="dashboard">
          <Route index element={<Navigate to="products" replace />} />
          {/* <Route path="products" element={<SellerProductsList />} />
          <Route path="products/new" element={<SellerProductForm />} />
          <Route path="products/:id" element={<SellerProductForm />} />
          <Route path="*" element={<Navigate to="products" replace />} /> */}
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="" replace />} />
    </Routes>
  );
}

// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { PublicLayout } from "./layouts/PublicLayout";
import { SellerLayout } from "./layouts/SellerLayout";

import { ProductList } from "./components/ProductsList";
import { CategoryList } from "./components/CategoryList";
import { CategoryProducts } from "./components/CategoryProduct";
import { Favorites } from "./components/Favorites";
import { ProductDetails } from "./components/ProductDetails";

import { SellerEntry } from "./components/seller/SellerEntry";
import { SellerRegisterForm } from "./components/seller/SellerRegisterForm";
import { SellerStatus } from "./components/seller/SellerStatus";
import { SellerDashboard } from "./components/seller/SellerDashboard";
import { SellerProtectedRoute } from "./components/seller/SellerProtectedRoute";
import { SellerProductForm } from "./components/seller/SellerProductForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* === PUBLIC === */}
        <Route element={<PublicLayout />}>
          <Route index element={<ProductList />} />
          <Route path="categories" element={<CategoryList />} />
          <Route
            path="categories/:categoryName"
            element={<CategoryProducts />}
          />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>

        {/* === SELLER === */}
        <Route path="seller" element={<SellerLayout />}>
          {/* Entry redirects based on registration/status */}
          <Route index element={<SellerEntry />} />

          {/* Unprotected */}
          <Route path="register" element={<SellerRegisterForm />} />
          <Route path="status" element={<SellerStatus />} />

          {/* ===== Товары продавца ===== */}
          <Route
            element={<SellerProtectedRoute redirectTo="/seller/register" />}>
            {/* Список товаров (если будет)
            <Route path="products" element={<SellerProductsList />} /> */}
            {/* Создание нового товара */}
            <Route path="products/new" element={<SellerProductForm />} />
            {/* Редактирование существующего */}
            <Route path="products/:id" element={<SellerProductForm />} />

            {/* Дашборд */}
            <Route path="dashboard" element={<SellerDashboard />} />
          </Route>

          {/* Catch-all for bad seller routes */}
          <Route path="*" element={<Navigate to="." replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// src/components/seller/SellerDashboard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SellerProductsList } from "./SellerProductsList";

export function SellerDashboard() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <div className="p-6 space-y-6">
      {/* Поиск и кнопка добавления */}
      <div className="grid grid-cols-[1fr_auto] gap-4">
        <input
          type="text"
          placeholder="Поиск по названию..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          onClick={() => navigate("/seller/products/new")}
          className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
        >
          + Добавить товар
        </button>
      </div>

      {/* Список товаров */}
      <SellerProductsList search={search} />
    </div>
  );
}

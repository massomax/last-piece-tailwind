import { useState, useEffect } from "react";
import { products as allProducts } from "./product";
import { ProductList } from "./ProductsList";

const STORAGE_KEY = "myapp:favorites";

export function Favorites() {
  const [favIds, setFavIds] = useState(new Set());

  // При монтировании читаем список избранных из localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      setFavIds(new Set(arr));
    } catch {
      setFavIds(new Set());
    }
  }, []);

  // Фильтруем товары по наличию id в favIds
  const filtered = allProducts.filter((p) => favIds.has(p.id));

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Избранное</h2>
      {filtered.length > 0 ? (
        <ProductList items={filtered} />
      ) : (
        <p className="text-center text-text-secondary">
          У вас пока нет товаров в избранном.
        </p>
      )}
    </div>
  );
}

import { useParams } from "react-router-dom";
import { initialProducts as products } from "../api/sellerApi";
import { ProductList } from "./ProductsList";

export function CategoryProducts() {
  const { categoryName } = useParams();

  // Декодируем строку маршрута обратно в нормальный текст
  const decoded = decodeURIComponent(categoryName);

  // Фильтруем товары по выбранной категории
  const filtered = products.filter((p) => p.category === decoded);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Категория: {decoded}</h2>

      {filtered.length > 0 ? (
        <ProductList items={filtered} />
      ) : (
        <p>Товаров в этой категории нет.</p>
      )}
    </div>
  );
}

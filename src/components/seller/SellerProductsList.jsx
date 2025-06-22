// src/components/seller/SellerProductsList.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts, deleteProduct } from "../../api/sellerApi";

export function SellerProductsList({ search }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then((list) => setProducts(list))
      .catch((err) => setError(err.message || "Ошибка при загрузке товаров"))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Удалить этот товар?")) return;
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      alert(err.message || "Не удалось удалить товар");
    }
  };

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="p-4 text-center">Загрузка товаров…</p>;
  if (error) return <p className="p-4 text-center text-red-500">{error}</p>;

  return (
    <div className="space-y-4">
      {filtered.length > 0 ? (
        filtered.map((p) => (
          <div
            key={p.id}
            className="flex bg-background-secondary dark:bg-background-secondary-dark rounded-lg overflow-hidden">
            <div className="w-24 h-32 flex-shrink-0">
              <img
                src={p.images[0]}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-4 space-y-1">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-text-secondary">Категория: {p.category}</p>
              <p className="text-xl">
                <span className="font-bold text-text">{p.newPrice}</span>
                {p.oldPrice && (
                  <span className="ml-2 text-text-secondary line-through">
                    {p.oldPrice}
                  </span>
                )}
              </p>
            </div>
            <div className="flex flex-col justify-center p-4 space-y-2">
              <button
                onClick={() => navigate(`/seller/products/${p.id}`)}
                className="py-2 px-4 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">
                Редактировать
              </button>
              <button
                onClick={() => handleDelete(p.id)}
                className="py-2 px-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors">
                Удалить
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-text-secondary">Товары не найдены.</p>
      )}
    </div>
  );
}

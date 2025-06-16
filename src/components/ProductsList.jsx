import { products } from "./product";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import { HeartIcon as OutlineHeart } from "@heroicons/react/24/outline";

const STORAGE_KEY = "myapp:favorites";

export function ProductList({ items }) {
  const list = items ?? products;

  const [favorites, setFavorites] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    try {
      const arr = Array.from(favorites);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    } catch (error) {
      console.error(error);
    }
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      <div className="grid grid-cols-2 max-h-full gap-6 mt-5 overflow-hidden mx-3">
        {list.map((product) => {
          const isFav = favorites.has(product.id);
          return (
            <div
              key={product.id}
              className="relative overflow-hidden flex flex-col cursor-pointer"
              onClick={() => setSelectedProduct(product)}>
              {/* Кнопка «сердечко» */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(product.id);
                }}
                className="absolute top-2 right-2 z-10 p-1 rounded-full bg-white/75 hover:bg-white">
                {isFav ? (
                  <SolidHeart className="h-8 w-8 text-red-500" />
                ) : (
                  <OutlineHeart className="h-8 w-8 text-gray-400" />
                )}
              </button>

              <Link
                to={`/product/${product.id}`}
                className="w-full aspect-[3/4]">
                <img
                  src={product.images[ product.id % product.images.length ]}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </Link>
              <div className="p-1 flex-1 flex flex-col text-left">
                <h3 className="text-2xl font-medium text-text mb-2 line-clamp-2">
                  {product.title}
                </h3>
                <div className="text-xl mb-4">
                  <span
                    className={
                      product.topPrice
                        ? "text-red-500 font-bold"
                        : "text-text font-bold"
                    }>
                    {product.newPrice}
                  </span>
                  <span className="text-sm ml-2 text-text-secondary line-through align-top">
                    {product.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

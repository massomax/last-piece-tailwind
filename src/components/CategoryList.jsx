import { Link } from "react-router-dom";
// import { categories } from "./product";
import { useState, useEffect } from "react";
import { getCategories } from "../api/sellerApi";

export function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCategories()
      .then((list) => setCategories(list))
      .catch((err) => setError(err.message || "Не удалось загрузить категории"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="p-4 text-center">Загрузка категорий…</p>;
  }

  if (error) {
    return <p className="p-4 text-center text-red-500">{error}</p>;
  }

  return (
    <div className="flex flex-1 flex-col gap-3 py-5">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/categories/${encodeURIComponent(category)}`}
          className="
            flex items-center
            h-12
            rounded-2xl
            font-medium text-2xl
          ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-text">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          {category}
        </Link>
      ))}
    </div>
  );
}

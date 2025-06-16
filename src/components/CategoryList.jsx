import { Link } from "react-router-dom";
import { categories } from "./product";

export function CategoryList() {
  return (
    <div className="flex flex-1 flex-col gap-3 py-5">
      {categories.map(({ id, category }) => (
        <Link
          key={id}
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

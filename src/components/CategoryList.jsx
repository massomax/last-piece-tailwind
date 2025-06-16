import { Link } from "react-router-dom";
import { categories } from "./product";

export function CategoryList() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {categories.map(({ id, category }) => (
        <Link
          key={id}
          to={`/categories/${encodeURIComponent(category)}`}
          className="
            flex items-center justify-center
            h-12
            bg-background-secondary text-text-secondary
            rounded-2xl
            font-medium
          ">
          {category}
        </Link>
      ))}
    </div>
  );
}

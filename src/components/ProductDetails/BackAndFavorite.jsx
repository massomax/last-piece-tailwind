// components/ProductDetails/BackAndFavorite.jsx
import { useNavigate } from "react-router-dom";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import { HeartIcon as OutlineHeart } from "@heroicons/react/24/outline";

export function BackAndFavorite({ isFav, onToggleFav }) {
  const nav = useNavigate();
  return (
    <div className="absolute top-5 left-0 right-0 flex justify-between px-5 z-10">
      <button
        onClick={() => nav(-1)}
        className="p-1.5 bg-background-secondary/50 rounded-full">
        {/* SVG «назад» */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-10 w-10 text-text">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <button
        onClick={onToggleFav}
        className="p-1.5 bg-background-secondary/50 rounded-full">
        {isFav ? (
          <SolidHeart className="h-10 w-10 text-red-500" />
        ) : (
          <OutlineHeart className="h-10 w-10 text-text" />
        )}
      </button>
    </div>
  );
}

import { Link, useLocation } from "react-router-dom";
import { HomeIcon, Squares2X2Icon, HeartIcon } from "@heroicons/react/24/solid";

export function NavMenu() {
  const { pathname } = useLocation();

  
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-13 bg-background-secondary dark:bg-primary-dark flex justify-around items-center shadow-[0_-2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_-2px_4px_rgba(0,0,0,0.5)] z-10">
      <Link
        to="/"
        className={`flex flex-col items-center ${
          pathname === "/" ? "text-primary" : "text-text"
        }`}>
        <HomeIcon className="h-8 w-8" />
      </Link>

      <Link
        to="/categories"
        className={`flex flex-col items-center ${
          pathname === "/categories" ? "text-primary" : "text-text"
        }`}>
        <Squares2X2Icon className="h-8 w-8" />
      </Link>

      <Link to="/favorites" className="flex flex-col items-center text-text">
        <HeartIcon className="h-8 w-8" />
      </Link>

      <Link to="/seller" className="flex flex-col items-center text-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-7 ">
          <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
          <path
            fillRule="evenodd"
            d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </nav>
  );
}

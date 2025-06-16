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
    </nav>
  );
}

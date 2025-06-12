import { HomeIcon, Squares2X2Icon, HeartIcon } from "@heroicons/react/24/solid";

export function NavMenu() {
  return (
    <nav
      className="
      fixed bottom-0 left-0 right-0 h-16
     bg-primary
      border-t border-gray-300 dark:border-gray-700
      flex justify-around items-center z-10
    ">
      {/* Все товары */}
      <button className="flex flex-col items-center text-text">
        <HomeIcon className="h-6 w-6" />
      </button>

      {/* Категории */}
      <button className="flex flex-col items-center text-text">
        <Squares2X2Icon className="h-6 w-6" />
      </button>

      {/* Избранное */}
      <button className="flex flex-col items-center text-text">
        <HeartIcon className="h-6 w-6" />
      </button>
    </nav>
  );
}

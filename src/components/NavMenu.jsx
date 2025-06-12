import { HomeIcon, Squares2X2Icon, HeartIcon } from "@heroicons/react/24/solid";

export function NavMenu() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 h-16
    bg-background-secondary dark:bg-primary-dark
    flex justify-around items-center
    shadow-[0_-2px_4px_rgba(0,0,0,0.1)]
    dark:shadow-[0_-2px_4px_rgba(0,0,0,0.5)]
    z-10
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

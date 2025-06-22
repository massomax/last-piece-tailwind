import { ThemeToggle } from "../ThemeToggle";

export const Header = ({ title, handleButton, titleButton }) => {
  return (
    <header
      className="p-5
    bg-background-secondary dark:bg-background-secondary-dark
    shadow-[0_2px_4px_rgba(0,0,0,0.1)]
    dark:shadow-[0_2px_4px_rgba(0,0,0,0.5)]
    z-10">
      <div className="flex text-text">
        <h1 className="text-2xl font-semibold flex-2/3 flex justify-center self-center">
          {title}
        </h1>
        <ThemeToggle className="self-center px-4 py-2 bg-background-secondary rounded-xl shadow" />
        {titleButton && (
          <button
            onClick={handleButton}
            className="self-center px-4 py-2
                   bg-background-secondary
                   rounded-xl shadow">
            {titleButton}
          </button>
        )}
      </div>
    </header>
  );
};

import { useState, useEffect } from "react";

export const Header = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="p-6 bg-primary text-white">
      <div className="flex text-text">
        <h1 className="text-2xl font-semibold flex-2/3 flex justify-center self-center">
          Последняя штучка
        </h1>
        <button
          onClick={() => setDark((prev) => !prev)}
          className="self-center px-4 py-2
                   bg-background-secondary
                   rounded-xl shadow">
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
};

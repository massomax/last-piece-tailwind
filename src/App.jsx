import { useEffect, useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  // Ставим или снимаем класс .dark на <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div
      className="min-h-screen flex flex-col
                    bg-background text-text
                    transition-colors duration-300">
      {/* 1) Кнопка-переключатель темы */}
      <button
        onClick={() => setDark((prev) => !prev)}
        className="self-end m-4 px-4 py-2
                   bg-primary text-white
                   rounded-md shadow">
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      {/* 2) Header */}
      <header className="p-4 bg-primary text-white">
        <h1 className="text-xl font-semibold">Наш магазин</h1>
      </header>

      {/* 3) Основной блок с товарами */}
      <main
        className="flex-1 p-4 grid grid-cols-2 gap-4
                       bg-background-secondary text-text-secondary">
        {/* TODO: сюда карточки товаров */}
      </main>

      {/* 4) Footer */}
      <footer className="p-4 bg-background-secondary text-text-secondary text-center">
        © 2025 Наша компания
      </footer>

      {/* 5) Нижнее меню */}
      <nav
        className="fixed bottom-0 left-0 w-full flex justify-around
                      bg-background-secondary border-t border-gray-300">
        <button className="flex-1 py-2">Все товары</button>
        <button className="flex-1 py-2">Категории</button>
        <button className="flex-1 py-2">Избранное</button>
      </nav>
    </div>
  );
}

import { NavMenu } from "./components/NavMenu";
import { Header } from "./components/pages/Header";

export default function App() {
  // Ставим или снимаем класс .dark на <html>

  return (
    <div
      className="min-h-screen flex flex-col
                    bg-background text-text
                    transition-colors duration-300">
      <Header />

      {/* 3) Основной блок с товарами */}
      <main
        className="flex-1 overflow-auto p-4 grid grid-cols-2 gap-4
                       bg-background-secondary text-text-secondary">
        {/* TODO: сюда карточки товаров */}
        <NavMenu />
      </main>

      {/* 4) Footer */}
      <footer className="p-4 bg-background-secondary text-text-secondary text-center">
        © 2025 Наша компания
      </footer>

      {/* 5) Нижнее меню */}
    </div>
  );
}

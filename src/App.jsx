import { NavMenu } from "./components/NavMenu";
import { Header } from "./components/pages/Header";
import { ProductList } from "./components/ProductsList";

export default function App() {
  return (
    <div
      className="
      min-h-screen flex flex-col
      bg-background text-text
      transition-colors duration-300
    ">
      <Header />

      {/* основной контейнер, фон тот же, что и у ProductList */}
      <main className="flex-1 overflow-auto bg-background">
        {/* центрируем контент и ограничиваем ширину */}
        <div className="max-w-md mx-auto">
          <ProductList />
        </div>
      </main>

      <footer className="p-4 bg-background-secondary text-text-secondary text-center">
        © 2025 Наша компания
      </footer>

      <NavMenu />
    </div>
  );
}

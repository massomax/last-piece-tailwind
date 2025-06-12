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
      <main className="flex-1 overflow-auto bg-background w-full sm:max-w-[540px] sm:mx-auto px-6  sm:px-4">
        <ProductList />
      </main>

      <footer className="p-4 bg-background-secondary text-text-secondary text-center">
        © 2025 Наша компания
      </footer>

      <NavMenu />
    </div>
  );
}

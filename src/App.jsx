import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavMenu } from "./components/NavMenu";
import { Header } from "./components/pages/Header";
import { Footer } from "./components/pages/Footer";
import { ProductList } from "./components/ProductsList";
import { CategoryList } from "./components/CategoryList";
import { CategoryProducts } from "./components/CategoryProduct";
import { Favorites } from "./components/Favorites";

export default function App() {
  return (
    <BrowserRouter>
      <div
        className="
      min-h-screen flex flex-col
      bg-background text-text
      transition-colors duration-300
    ">
        <Header />
        <main className="flex-1 overflow-auto bg-background w-full sm:max-w-[540px] sm:mx-auto px-5  sm:px-4">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route
              path="/categories/:categoryName"
              element={<CategoryProducts />}
            />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>

        <Footer />

        <NavMenu />
      </div>
    </BrowserRouter>
  );
}

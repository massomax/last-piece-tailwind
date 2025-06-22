import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavMenu } from "./components/NavMenu";
import { Header } from "./components/pages/Header";
import { Footer } from "./components/pages/Footer";
import { ProductList } from "./components/ProductsList";
import { CategoryList } from "./components/CategoryList";
import { CategoryProducts } from "./components/CategoryProduct";
import { Favorites } from "./components/Favorites";
import { ProductDetails } from "./components/ProductDetails";
import { SellerRoutes } from "./routes/SellerRoutes";
import { SellerLayout } from "./layouts/SellerLayout";
import { PublicLayout } from "./layouts/PublicLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* === PUBLIC === */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route
            path="/categories/:categoryName"
            element={<CategoryProducts />}
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>

        {/* === SELLER === */}
        <Route path="seller/*" element={<SellerLayout />}>
          <Route path="*" element={<SellerRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

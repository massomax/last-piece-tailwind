// components/ProductDetails.jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { initialProducts as allProducts } from "../api/sellerApi";
import { BackAndFavorite } from "./ProductDetails/BackAndFavorite";
import { ImageCarousel } from "./ProductDetails/ImageCarousel";
import { ProductInfo } from "./ProductDetails/ProductInfo";
import { SellerButton } from "./ProductDetails/SellerButton";

const STORAGE_KEY = "myapp:favorites";

export function ProductDetails() {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === Number(id));

  // Избранное
  const [favorites, setFavorites] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch {
      return new Set();
    }
  });
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(favorites)));
  }, [favorites]);
  const isFav = product && favorites.has(product.id);
  const toggleFav = () => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(product.id) ? next.delete(product.id) : next.add(product.id);
      return next;
    });
  };

  if (!product) {
    return (
      <div className="p-4 text-center text-text-secondary">
        Товар не найден.
      </div>
    );
  }

  // Собираем картинки
  const images = Array.isArray(product.images)
    ? product.images
    : Array.isArray(product.image)
    ? product.image
    : product.image
    ? [product.image]
    : [];

  return (
    <div className="relative p-0 flex flex-col h-full">
      <BackAndFavorite isFav={isFav} onToggleFav={toggleFav} />
      <ImageCarousel images={images} />
      <ProductInfo
        title={product.title}
        newPrice={product.newPrice}
        oldPrice={product.oldPrice}
        topPrice={product.topPrice}
        description={product.description}
      />
      <SellerButton url={product.sellerUrl} />
    </div>
  );
}

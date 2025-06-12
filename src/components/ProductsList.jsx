import React from "react";

export function ProductList() {
  const products = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Товар ${i + 1}`,
    image: "https://via.placeholder.com/300x200?text=Фото",
    newPrice: "1 200 ₽",
    oldPrice: "1 500 ₽",
  }));

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        {products.map(({ id, title, image, newPrice, oldPrice }) => (
          <div
            key={id}
            className="
              bg-background-secondary    /* фон карточки чуть светлее */
              rounded-lg
              overflow-hidden
              shadow
            ">
            <img src={image} alt={title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-base font-medium text-text">{title}</h3>
              <div className="mt-1 text-sm">
                <span className="text-primary font-semibold">{newPrice}</span>
                <span className="ml-2 text-text-secondary line-through">
                  {oldPrice}
                </span>
              </div>
              <button
                className="
                  mt-4 w-full py-2
                  bg-primary text-white
                  rounded
                  hover:bg-primary-shade
                  transition
                ">
                Посмотреть
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

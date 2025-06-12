// src/components/ProductList.jsx
import React from "react";

export function ProductList() {
  const products = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Товар ${
      i + 1
    } asdlasd dasd as dasd asdasdasd asd asd asd asd asd asdasd asd asd asd as das das da`,
    image:
      "https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/poster/ru/bignew/992x413/992_otpyskaem290525.webp",
    newPrice: "1 200 ₽",
    oldPrice: "1 500 ₽",
    topPrice: false,
  }));

  return (
    <div className="grid grid-cols-2 max-h-full gap-6 mt-5 overflow-hidden">
      {products.map(({ id, title, image, newPrice, oldPrice, topPrice }) => (
        <div key={id} className=" overflow-hidden flex flex-col">
          <div className="w-full aspect-[3/4]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="p-1 flex-1 flex flex-col text-left">
            <h3 className="text-base font-medium text-text mb-2 line-clamp-2">
              {title}
            </h3>
            <div className="text-md mb-4">
              <span
                className={
                  topPrice ? "text-red-500 font-bold" : "text-text font-bold"
                }>
                {newPrice}
              </span>
              <span className="text-sm ml-2 text-text-secondary line-through align-top ">
                {oldPrice}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

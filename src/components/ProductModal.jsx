import { XMarkIcon } from "@heroicons/react/24/solid";

export function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    // затемнённый фон
    <div
      className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}>
      {/* сама карточка внутри */}
      <div
        className="bg-background text-text rounded-2xl p-6 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()} // чтобы клик внутри не закрывал
      >
        <button
          className="absolute top-1 right-1 p-0 hover:bg-gray-200 rounded-full"
          onClick={onClose}>
          <XMarkIcon className="h-6 w-6 text-text-secondary" />
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-xl mb-4"
        />

        <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
        <p className="text-text-secondary mb-4">
          {product.description || "Описание отсутствует."}
        </p>

        <div className="flex items-baseline gap-3">
          <span
            className={`text-xl font-bold ${
              product.topPrice ? "text-red-500" : "text-text"
            }`}>
            {product.newPrice}
          </span>
          {product.oldPrice && (
            <span className="text-sm line-through text-text-secondary">
              {product.oldPrice}
            </span>
          )}
        </div>
        <a
          href={product.sellerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            block w-full text-center mt-2
            py-3 px-4
            bg-primary text-white font-medium
            rounded-lg
            hover:bg-primary-dark
            transition-colors
          ">
          К продавцу
        </a>
      </div>
    </div>
  );
}

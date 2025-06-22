export function ProductInfo({
  title,
  newPrice,
  oldPrice,
  topPrice,
  description,
}) {
  return (
    <div className="overflow-auto flex-1 mx-2">
      <h1 className="text-2xl font-semibold mb-2 p-2">{title}</h1>
      <div className="flex items-baseline gap-3 mb-6 p-2">
        <span
          className={`text-xl font-bold ${
            topPrice ? "text-red-500" : "text-text"
          }`}>
          {newPrice}
        </span>
        {oldPrice && (
          <span className="text-sm line-through text-text-secondary">
            {oldPrice}
          </span>
        )}
      </div>
      <p className="text-text-secondary mb-4 text-xl px-2">
        {description || "Описание отсутствует."}
      </p>
    </div>
  );
}

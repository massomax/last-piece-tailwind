export function PriceInputs({ newPrice, oldPrice, onChange, errors }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label htmlFor="newPrice" className="block mb-1">
          Новая цена*, ₽
        </label>
        <input
          id="newPrice"
          name="newPrice"
          type="number"
          value={newPrice}
          onChange={onChange}
          className="w-full border border-input rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary"
        />
        {errors.newPrice && (
          <p className="text-red-500 text-sm mt-1">{errors.newPrice}</p>
        )}
      </div>
      <div>
        <label htmlFor="oldPrice" className="block mb-1">
          Старая цена, ₽
        </label>
        <input
          id="oldPrice"
          name="oldPrice"
          type="number"
          value={oldPrice}
          onChange={onChange}
          className="w-full border border-input rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary"
        />
        {errors.oldPrice && (
          <p className="text-red-500 text-sm mt-1">{errors.oldPrice}</p>
        )}
      </div>
    </div>
  );
}

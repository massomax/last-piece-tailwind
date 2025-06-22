export function CategorySelect({ value, onChange, options, error }) {
  return (
    <div>
      <label htmlFor="category" className="block mb-1">
        Категория*
      </label>
      <select
        id="category"
        name="category"
        value={value}
        onChange={onChange}
        className="w-full border border-input rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary">
        <option value="">Выберите категорию</option>
        {options.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

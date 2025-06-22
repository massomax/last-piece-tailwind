// src/components/seller/ProductForm/DescriptionInput.jsx
export function DescriptionInput({ value, onChange }) {
  return (
    <div>
      <label htmlFor="description" className="block mb-1">
        Описание
      </label>
      <textarea
        id="description"
        name="description"
        rows={3}
        value={value}
        onChange={onChange}
        className="w-full border border-input rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}

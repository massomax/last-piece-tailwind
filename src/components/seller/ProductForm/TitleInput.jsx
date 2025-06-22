export function TitleInput({ value, onChange, error }) {
  return (
    <div>
      <label htmlFor="title" className="block mb-1">
        Название*
      </label>
      <input
        id="title"
        name="title"
        value={value}
        onChange={onChange}
        className="w-full border border-input rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
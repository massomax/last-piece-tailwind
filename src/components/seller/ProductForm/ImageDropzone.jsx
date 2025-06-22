import { useRef } from "react";

export function ImageDropzone({
  onDrop,
  onDragOver,
  onDragLeave,
  dropActive,
  onSelectFile,
}) {
  const inputRef = useRef(null);

  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onClick={() => inputRef.current?.click()}
      className={`border-2 border-dashed p-6 text-center rounded-lg cursor-pointer ${
        dropActive ? "border-primary" : "border-input"
      }`}>
      Перетащите фото или кликните
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onSelectFile}
        className="hidden"
      />
    </div>
  );
}

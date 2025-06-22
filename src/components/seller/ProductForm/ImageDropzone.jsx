// src/components/seller/ProductForm/ImageDropzone.jsx
import React from "react";

export function ImageDropzone({
  onDrop,
  onDragOver,
  onDragLeave,
  dropActive,
  onSelectFile,
}) {
  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      className={`border-2 border-dashed p-6 text-center rounded-lg ${
        dropActive ? "border-primary" : "border-input"
      }`}>
      Перетащите фото или кликните
      <input
        type="file"
        accept="image/*"
        onChange={onSelectFile}
        className="hidden"
      />
    </div>
  );
}

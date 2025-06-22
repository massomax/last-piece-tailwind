// src/components/seller/ProductForm/SubmitButton.jsx
import React from "react";

export function SubmitButton({ submitting }) {
  return (
    <button
      type="submit"
      disabled={submitting}
      className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
      {submitting ? "Сохранение..." : "Сохранить"}
    </button>
  );
}

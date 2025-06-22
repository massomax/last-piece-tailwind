// src/components/seller/ProductForm/CropModal.jsx
import React from "react";
import Cropper from "react-easy-crop";

export function CropModal({
  src,
  crop,
  zoom,
  onCropChange,
  onZoomChange,
  onCropComplete,
  onCancel,
  onApply,
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-background p-4 rounded-lg w-full max-w-lg">
        <div className="relative h-80">
          <Cropper
            image={src}
            crop={crop}
            zoom={zoom}
            aspect={3 / 4}
            onCropChange={onCropChange}
            onZoomChange={onZoomChange}
            onCropComplete={onCropComplete}
          />
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 rounded-lg">
            Отмена
          </button>
          <button
            onClick={onApply}
            className="px-4 py-2 bg-primary text-white rounded-lg">
            Обрезать
          </button>
        </div>
      </div>
    </div>
  );
}

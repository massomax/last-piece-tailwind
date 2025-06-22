// src/components/seller/SellerProductForm.jsx
import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  TitleInput,
  DescriptionInput,
  CategorySelect,
  PriceInputs,
  ImageDropzone,
  CropModal,
  SubmitButton,
} from "./ProductForm";
import { getCroppedImg } from "../../utils/cropImage";
import {
  createProduct,
  updateProduct,
  getProduct,
  getCategories,
} from "../../api/sellerApi";

export function SellerProductForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  // State
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    newPrice: "",
    oldPrice: "",
    images: [],
    sellerUrl: "",
  });
  const [previewUrls, setPreviewUrls] = useState([]);
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // Crop state
  const [dropActive, setDropActive] = useState(false);
  const [srcImage, setSrcImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedPixels, setCroppedPixels] = useState(null);
  const [showCropper, setShowCropper] = useState(false);

  // Load categories
  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  // Load product for edit
  useEffect(() => {
    if (!isEdit) return;
    getProduct(id).then((data) => {
      setForm({
        title: data.title,
        description: data.description,
        category: data.category,
        newPrice: data.newPrice,
        oldPrice: data.oldPrice || "",
        images: [],
        sellerUrl: data.sellerUrl || "",
      });
      setPreviewUrls(data.images || []);
    });
  }, [id, isEdit]);

  // Handlers for fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // Drag & Drop
  const onDragOver = (e) => {
    e.preventDefault();
    setDropActive(true);
  };
  const onDragLeave = () => setDropActive(false);
  const onDrop = (e) => {
    e.preventDefault();
    setDropActive(false);
    const file = e.dataTransfer.files[0];
    if (!file?.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file);
    setSrcImage(url);
    setShowCropper(true);
  };
  const handleSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setSrcImage(url);
    setShowCropper(true);
  };

  const onCropComplete = useCallback((_, pixels) => {
    setCroppedPixels(pixels);
  }, []);

  const applyCrop = async () => {
    try {
      const blob = await getCroppedImg(srcImage, croppedPixels, {
        width: 300,
        height: 400,
      });
      const url = URL.createObjectURL(blob);
      setPreviewUrls((p) => [...p, url]);
      setForm((f) => ({ ...f, images: [...f.images, blob] }));
      URL.revokeObjectURL(srcImage);
    } catch {}
    setShowCropper(false);
    setSrcImage(null);
  };

  const removePreview = (i) => {
    setPreviewUrls((p) => p.filter((_, idx) => idx !== i));
    setForm((f) => ({ ...f, images: f.images.filter((_, idx) => idx !== i) }));
  };

  // Validation
  const validate = () => {
    const errs = {};
    if (!form.title.trim()) errs.title = "Введите название";
    if (!form.category) errs.category = "Выберите категорию";
    if (!form.newPrice || isNaN(+form.newPrice))
      errs.newPrice = "Неверная цена";
    if (+form.oldPrice && +form.oldPrice < +form.newPrice)
      errs.oldPrice = "Старая цена ≥ новой";
    if (!isEdit && previewUrls.length === 0) errs.images = "Добавьте фото";
    return errs;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);

    const oldP = +form.oldPrice;
    const newP = +form.newPrice;
    const topPrice = oldP > 0 && (oldP - newP) / oldP > 0.5;
    const payload = { ...form, topPrice };

    try {
      if (isEdit) await updateProduct(id, payload);
      else await createProduct(payload);
      navigate("/seller", { replace: true });
    } catch (err) {
      setErrors({ form: err.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-background-secondary rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-4">
        {isEdit ? "Редактировать" : "Новый"} товар
      </h1>
      {errors.form && <div className="text-red-500 mb-4">{errors.form}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <TitleInput
          value={form.title}
          onChange={handleChange}
          error={errors.title}
        />
        <DescriptionInput value={form.description} onChange={handleChange} />
        <CategorySelect
          value={form.category}
          onChange={handleChange}
          options={categories}
          error={errors.category}
        />
        <PriceInputs
          newPrice={form.newPrice}
          oldPrice={form.oldPrice}
          onChange={handleChange}
          errors={errors}
        />

        <ImageDropzone
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          dropActive={dropActive}
          onSelectFile={handleSelect}
        />
        {errors.images && (
          <p className="text-red-500 text-sm">{errors.images}</p>
        )}
        <div className="flex flex-wrap gap-2">
          {previewUrls.map((url, idx) => (
            <div key={idx} className="relative">
              <img
                src={url}
                alt="preview"
                className="w-20 h-24 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => removePreview(idx)}
                className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1">
                ×
              </button>
            </div>
          ))}
        </div>

        {showCropper && (
          <CropModal
            src={srcImage}
            crop={crop}
            zoom={zoom}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            onCancel={() => setShowCropper(false)}
            onApply={applyCrop}
          />
        )}

        <SubmitButton submitting={submitting} />
      </form>
    </div>
  );
}

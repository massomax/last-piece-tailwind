// components/Seller/SellerRegisterForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerSeller } from "../../api/sellerApi";

export function SellerRegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    phone: "",
    website: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.companyName.trim()) {
      errs.companyName = "Введите название компании";
    }
    if (!formData.email.trim()) {
      errs.email = "Введите email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Неверный формат email";
    }
    if (!formData.password) {
      errs.password = "Введите пароль";
    } else if (formData.password.length < 6) {
      errs.password = "Пароль минимум 6 символов";
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setSubmitError("");

    try {
      await registerSeller(formData);
      navigate("/seller/status");
    } catch (err) {
      setSubmitError(err.message || "Не удалось зарегистрироваться");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Регистрация продавца
      </h1>

      {submitError && (
        <div className="mb-4 text-red-500 text-center">{submitError}</div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Название компании */}
        <div className="mb-4">
          <label htmlFor="companyName" className="block mb-1">
            Название компании
          </label>
          <input
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Пароль */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Пароль
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Остальные поля без обязательной валидации */}
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1">
            Телефон
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="website" className="block mb-1">
            Сайт
          </label>
          <input
            id="website"
            name="website"
            type="url"
            value={formData.website}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block mb-1">
            Описание
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-2 bg-primary text-white font-medium rounded hover:bg-primary-dark transition-colors">
          {submitting ? "Отправка..." : "Зарегистрироваться"}
        </button>
      </form>
    </div>
  );
}

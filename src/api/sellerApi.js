// src/api/sellerApi.js

const MOCK_DELAY = 500; // 0.5 секунды задержки
const STORAGE_KEY = "mock:seller";

// Ждём заданное число миллисекунд
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Регистрирует селлера в localStorage со статусом "pending"
 * @param {object} data — { companyName, email, password, phone, website, description }
 * @returns {Promise<object>} сохранённый объект селлера { id, ...data, status }
 */
export async function registerSeller(data) {
  await wait(MOCK_DELAY);
  const seller = {
    id: Date.now(),
    ...data,
    status: "pending",
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seller));
  return seller;
}

/**
 * Возвращает текущего селлера из localStorage или null
 * @returns {Promise<object|null>}
 */
export async function getSeller() {
  await wait(MOCK_DELAY);
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}

/**
 * Обновляет статус селлера в localStorage
 * @param {"pending"|"approved"|"rejected"} newStatus
 * @returns {Promise<object>} обновлённый объект селлера
 */
export async function updateSellerStatus(newStatus) {
  await wait(MOCK_DELAY);
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) throw new Error("Селлер не найден");
  const seller = JSON.parse(raw);
  seller.status = newStatus;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seller));
  return seller;
}

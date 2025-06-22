// src/api/sellerApi.js

const MOCK_DELAY = 500; // Задержка в миллисекунды
const STORAGE_SELLER_KEY = "mock:seller";
const STORAGE_PRODUCTS_KEY = "mock:products";

// Ждём заданное число миллисекунд
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// === Seller API ===

/** Регистрирует селлера (mock) */
export async function registerSeller(data) {
  await wait(MOCK_DELAY);
  const seller = { id: Date.now(), ...data, status: "pending" };
  localStorage.setItem(STORAGE_SELLER_KEY, JSON.stringify(seller));
  return seller;
}

/** Получает селлера из localStorage */
export async function getSeller() {
  await wait(MOCK_DELAY);
  const raw = localStorage.getItem(STORAGE_SELLER_KEY);
  return raw ? JSON.parse(raw) : null;
}

/** Обновляет статус селлера */
export async function updateSellerStatus(newStatus) {
  await wait(MOCK_DELAY);
  const raw = localStorage.getItem(STORAGE_SELLER_KEY);
  if (!raw) throw new Error("Селлер не найден");
  const seller = JSON.parse(raw);
  seller.status = newStatus;
  localStorage.setItem(STORAGE_SELLER_KEY, JSON.stringify(seller));
  return seller;
}

// === Products Data & API ===

// Статический массив товаров
const commonImages = [
  "https://avatars.mds.yandex.net/i?id=25519abe76e6e9d4d5ab486b25584aaa4a775c01-5273789-images-thumbs&n=13",
  "https://yandex-images.clstorage.net/4Tdt9d203/250e15fwf/UabBsVRNL8hJy7UahrsMj3wAPoAW3NjLQ7wyForvQ9JhZ_Ha8LbtjKZaO4J73CWXMtqw_rryNPihSwTydyiJCwiHxMEleHeBKNL8H4OaecpscQ6Nf4Dd8ybhZwevrmujAR_hLkDOKRAS_s9u03yl_yPf5aOOhzXNOOM4wmOpjPuF9gDgLVWDQN2_4ULrh3ADLbweNOKYkGpLIBLLOiObt5FPfYb08p2gUo6Lzu8QkT838-nXyw_hyaQmvOZ3UUAPRY6A6C3di0BFMxk6e4sY_6GgmozmhOSW88Tiw_r7b-f9s1V6FPKZONIa05pz-EWjg6exP397mclAFvga30lMRzn2PGixyc-8bX_hHtOrtEcNqFKQhoT4-kvAHk_6_59XNdM5ivD-HXhylssilxzR8xNfTT_bl52tbIIcxsPZcCuN8uywcanjCIH76db_z2zDkQiejLrcyH6fHB7DiiezT0nXecIUTvmQXqpXZivo3UcLg-E7-4v1ffh2iPrT8exXOV5QADF1h_SBe2k6fyMk2-nofsiWHNhmzxTGV54TW6vpG30edF7plPJqQ2rvhDn7r_9ZI8_vqT0EoniyEyHsKx22NEAN9YeEhTdhitczINcdeAq4fpCU9n88guPul29HFRM5dvgSObhakk-ec-y5z2M_Fa8ro7UdmE4cxuud_BNJ1kgAJeEjtOl_0XL7M2i7dSByCKKckI5PMAKb6t8Lq0Fj8eqAfn00Rv7HblPkuU-rxy0_W59xCWwWmIJ3ZYjrqU7IXMlhN8TxvzVCq5MUoyV4auBiVHweL5A603anl6-F60WOePLJ0GZiH44XCAFXC0fN57Ovqf3Ytuj6x7XQ02l2hNBd6ScoyU-F1nPjiFPttPLkkpAUdtdc8i9SO_uvHQclsuzWNRzC3iPuS4wNu0-7yW-_d0257FZ8VtMddN9l8uyMNUXDnPnTBfabn3RLJVyaEOpIaKKj3GZ3dq80",
  "https://yandex-images.clstorage.net/4Tdt9d203/250e15fwf/UabBsVRNL8hJy7UahrsMj3wAPoAW3NjLQ7wyForvQ9JhZ_Ha8LbtjKZaO4J73CWXMtqw-oraPMylRwTydyiURwnryMBlZT7cRNOkG5eOYJZ8bFfQP42Iuy-NewrTvmujAR_hLkDOKRAS_s9u03yl_yPf5aOOhzXNOOM4wmOpjPuF9gDgLVWDQN2_4ULrh3ADLbweNOKYkGpLIBLLOiObt5FPfYb08p2gUo6Lzu8QkT838-nXyw_hyaQmvOZ3UUAPRY6A6C3di0BFMxk6e4sY_6GgmozmhOSW88Tiw_r7b-f9s1V6FPKZONIa05pz-EWjg6exP397mclAFvga30lMRzn2PGixyc-8bX_hHtOrtEcNqFKQhoT4-kvAHk_6_59XNdM5ivD-HXhylssilxzR8xNfTT_bl52tbIIcxsPZcCuN8uywcanjCIH76db_z2zDkQiejLrcyH6fHB7DiiezT0nXecIUTvmQXqpXZivo3UcLg-E7-4v1ffh2iPrT8exXOV5QADF1h_SBe2k6fyMk2-nofsiWHNhmzxTGV54TW6vpG30edF7plPJqQ2rvhDn7r_9ZI8_vqT0EoniyEyHsKx22NEAN9YeEhTdhitczINcdeAq4fpCU9n88guPul29HFRM5dvgSObhakk-ec-y5z2M_Fa8ro7UdmE4cxuud_BNJ1kgAJeEjtOl_0XL7M2i7dSByCKKckI5PMAKb6t8Lq0Fj8eqAfn00Rv7HblPkuU-rxy0_W59xCWwWmIJ3ZYjrqU7IXMlhN8TxvzVCq5MUoyV4auBiVHweL5A603anl6-F60WOePLJ0GZiH44XCAFXC0fN57Ovqf3Ytuj6x7XQ02l2hNBd6ScoyU-F1nPjiFPttPLkkpAUdtdc8i9SO_uvHQclsuzWNRzC3iPuS4wNu0-7yW-_d0257FZ8VtMddN9l8uyMNUXDnPnTBfabn3RLJVyaEOpIaKKj3GZ3dq80",
  "https://avatars.mds.yandex.net/i?id=8edd4093429f730eb6db56d3032fb467c3e94cc4-4033630-images-thumbs&n=13",
];

export const initialProducts = [
  {
    id: 1,
    title: "Товар 1",
    images: commonImages,
    newPrice: "600 ₽",
    oldPrice: "800 ₽",
    topPrice: false,
    category: "Хлеб",
    description: "Свежий отрубной хлеб ручной работы.",
    sellerUrl: "https://yandex.ru/",
  },
  {
    id: 2,
    title: "Товар 2",
    images: commonImages,
    newPrice: "700 ₽",
    oldPrice: "900 ₽",
    topPrice: false,
    category: "Молоко",
    description: "Органическое молоко 3.2% жирности.",
    sellerUrl: "https://yandex.ru/",
  },
  {
    id: 3,
    title: "Товар 3",
    images: commonImages,
    newPrice: "800 ₽",
    oldPrice: "1000 ₽",
    topPrice: false,
    category: "Мясо",
    description: "Свежая говядина первого сорта.",
    sellerUrl: "https://yandex.ru/",
  },
  {
    id: 4,
    title: "Товар 4",
    images: commonImages,
    newPrice: "900 ₽",
    oldPrice: "1100 ₽",
    topPrice: false,
    category: "Фрукты",
    description: "Мини-сет спелых домашних яблок.",
    sellerUrl: "https://yandex.ru/",
  },
  {
    id: 5,
    title: "Товар 5",
    images: commonImages,
    newPrice: "1000 ₽",
    oldPrice: "1200 ₽",
    topPrice: true,
    category: "Овощи",
    description: "Ассорти свежих овощей от фермера.",
    sellerUrl: "https://yandex.ru/",
  },
  {
    id: 6,
    title: "Товар 6",
    images: commonImages,
    newPrice: "1100 ₽",
    oldPrice: "1300 ₽",
    topPrice: false,
    category: "Напитки",
    description: "Природная минеральная вода без газа.",
    sellerUrl: "https://yandex.ru/",
  },
  {
    id: 7,
    title: "Товар 7",
    images: commonImages,
    newPrice: "1200 ₽",
    oldPrice: "1400 ₽",
    topPrice: false,
    category: "Снеки",
    description: "Микс орехов и сухофруктов.",
    sellerUrl: "https://yandex.ru/",
  },
  {
    id: 8,
    title: "Товар 8",
    images: commonImages,
    newPrice: "1300 ₽",
    oldPrice: "1500 ₽",
    topPrice: false,
    category: "Яйца",
    description: "Яйца деревенские, 10 шт.",
    sellerUrl: "https://yandex.ru/",
  },
  {
    id: 9,
    title: "Товар 9",
    images: commonImages,
    newPrice: "1400 ₽",
    oldPrice: "1600 ₽",
    topPrice: false,
    category: "Сыр",
    description: "Твердый сыр выдержанный 6 месяцев.",
    sellerUrl: "https://yandex.ru/",
  },
  {
    id: 10,
    title: "Товар 10",
    images: commonImages,
    newPrice: "1500 ₽",
    oldPrice: "1700 ₽",
    topPrice: true,
    category: "Рыба",
    description: "Филе атлантического лосося.",
    sellerUrl: "https://yandex.ru/",
  },
  {
    id: 11,
    title: "Товар 11",
    images: commonImages,
    newPrice: "1600 ₽",
    oldPrice: "1800 ₽",
    topPrice: false,
    category: "Крупы",
    description: "Гречневая крупа высшего сорта, 1 кг.",
    sellerUrl: "https://yandex.ru/",
  },
  {
    id: 12,
    title: "Товар 12",
    images: commonImages,
    newPrice: "1700 ₽",
    oldPrice: "1900 ₽",
    topPrice: false,
    category: "Масло",
    description: "Масло сливочное 82% жирности, 200 г.",
    sellerUrl: "https://yandex.ru/",
  },
  {
    id: 13,
    title: "Товар 13",
    images: commonImages,
    newPrice: "1800 ₽",
    oldPrice: "2000 ₽",
    topPrice: false,
    category: "Сахар",
    description: "Тростниковый сахар-рафинад, 500 г.",
    sellerUrl: "https://yandex.ru/",
  },
  {
    id: 14,
    title: "Товар 14",
    images: commonImages,
    newPrice: "1900 ₽",
    oldPrice: "2100 ₽",
    topPrice: false,
    category: "Мука",
    description: "Пшеничная мука высший сорт, 2 кг.",
    sellerUrl: "https://yandex.ru/",
  },
  {
    id: 15,
    title: "Товар 15",
    images: commonImages,
    newPrice: "2000 ₽",
    oldPrice: "2200 ₽",
    topPrice: true,
    category: "Специи",
    description: "Набор пряных специй ассорти.",
    sellerUrl: "https://yandex.ru/",
  },
  {
    id: 16,
    title: "Товар 16",
    images: commonImages,
    newPrice: "2100 ₽",
    oldPrice: "2300 ₽",
    topPrice: false,
    category: "Шоколад",
    description: "Горький шоколад 85% какао.",
    sellerUrl: "https://yandex.ru/",
  },
  {
    id: 17,
    title: "Товар 17",
    images: commonImages,
    newPrice: "2200 ₽",
    oldPrice: "2400 ₽",
    topPrice: false,
    category: "Батончики",
    description: "Фитнес-батончики с орехами и медом.",
    sellerUrl: "https://yandex.ru/",
  },
  {
    id: 18,
    title: "Товар 18",
    images: commonImages,
    newPrice: "2300 ₽",
    oldPrice: "2500 ₽",
    topPrice: false,
    category: "Йогурт",
    description: "Натуральный йогурт без добавок, 500 мл.",
    sellerUrl: "https://yandex.ru/",
  },
  {
    id: 19,
    title: "Товар 19",
    images: commonImages,
    newPrice: "2400 ₽",
    oldPrice: "2600 ₽",
    topPrice: false,
    category: "Сок",
    description: "Яблочный сок прямого отжима, 1 л.",
    sellerUrl: "https://yandex.ru/",
  },
  {
    id: 20,
    title: "Товар 20",
    images: commonImages,
    newPrice: "2500 ₽",
    oldPrice: "2700 ₽",
    topPrice: true,
    category: "Леденцы",
    description: "Карамель леденцовая ассорти, 200 г.",
    sellerUrl: "https://yandex.ru/",
  },
];

// Извлекаем категории из начального массива (без дублирования)
const initialCategories = Array.from(
  new Set(initialProducts.map((p) => p.category))
);

function _getStoredProducts() {
  const raw = localStorage.getItem(STORAGE_PRODUCTS_KEY);
  return raw ? JSON.parse(raw) : [...initialProducts];
}

function _setStoredProducts(list) {
  localStorage.setItem(STORAGE_PRODUCTS_KEY, JSON.stringify(list));
}

/** Возвращает список всех товаров */
export async function getProducts() {
  await wait(MOCK_DELAY);
  return _getStoredProducts();
}

/** Возвращает один товар по id */
export async function getProduct(id) {
  await wait(MOCK_DELAY);
  const list = _getStoredProducts();
  return list.find((p) => p.id === Number(id)) || null;
}

/** Создает новый товар */
export async function createProduct(data) {
  await wait(MOCK_DELAY);
  const list = _getStoredProducts();
  const next = { id: Date.now(), ...data };
  list.push(next);
  _setStoredProducts(list);
  return next;
}

/** Обновляет существующий товар */
export async function updateProduct(id, data) {
  await wait(MOCK_DELAY);
  const list = _getStoredProducts();
  const idx = list.findIndex((p) => p.id === Number(id));
  if (idx === -1) throw new Error("Товар не найден");
  list[idx] = { ...list[idx], ...data };
  _setStoredProducts(list);
  return list[idx];
}

/** Удаляет товар по id */
export async function deleteProduct(id) {
  await wait(MOCK_DELAY);
  let list = _getStoredProducts();
  list = list.filter((p) => p.id !== Number(id));
  _setStoredProducts(list);
  return { success: true };
}

/** Возвращает список категорий */
export async function getCategories() {
  await wait(MOCK_DELAY);
  return [...initialCategories];
}

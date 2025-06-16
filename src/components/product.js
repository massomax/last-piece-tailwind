export const SAMPLE_CATEGORIES = ["Хлеб", "Молоко", "Мясо", "Овощи", "Напитки"];

// генерим 10 товаров, каждому даём категорию по кругу
export const products = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Товар ${i + 1}`,
  image:
    "https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/poster/ru/bignew/992x413/992_otpyskaem290525.webp",
  newPrice: "1 200 ₽",
  oldPrice: "1 500 ₽",
  topPrice: false,
  category: SAMPLE_CATEGORIES[i % SAMPLE_CATEGORIES.length],
  sellerUrl: `https://yandex.ru/`,
}));

// берём все категории из products и убираем дубли
const uniqueNames = Array.from(new Set(products.map((p) => p.category)));
export const categories = uniqueNames.map((category, index) => ({
  id: index + 1,
  category,
}));

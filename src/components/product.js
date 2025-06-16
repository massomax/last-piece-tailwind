export const SAMPLE_CATEGORIES = ["Хлеб", "Молоко", "Мясо", "Овощи", "Напитки"];

// генерим 10 товаров, каждому даём категорию по кругу
export const products = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Товар ${i + 1}`,
  images: [
    "https://avatars.mds.yandex.net/i?id=25519abe76e6e9d4d5ab486b25584aaa4a775c01-5273789-images-thumbs&n=13",
    "https://yandex-images.clstorage.net/4Tdt9d203/250e15fwf/UabBsVRNL8hJy7UahrsMj3wAPoAW3NjLQ7wyForvQ9JhZ_Ha8LbtjKZaO4J73CWXMtqw_rryNPihSwTydyiJCwiHxMEleHeBKNL8H4OaecpscQ6Nf4Dd8ybhZwevrmujAR_hLkDOKRAS_s9u03yl_yPf5aOOhzXNOOM4wmOpjPuF9gDgLVWDQN2_4ULrh3ADLbweNOKYkGpLIBLLOiObt5FPfYb08p2gUo6Lzu8QkT838-nXyw_hyaQmvOZ3UUAPRY6A6C3di0BFMxk6e4sY_6GgmozmhOSW88Tiw_r7b-f9s1V6FPKZONIa05pz-EWjg6exP397mclAFvga30lMRzn2PGixyc-8bX_hHtOrtEcNqFKQhoT4-kvAHk_6_59XNdM5ivD-HXhylssilxzR8xNfTT_bl52tbIIcxsPZcCuN8uywcanjCIH76db_z2zDkQiejLrcyH6fHB7DiiezT0nXecIUTvmQXqpXZivo3UcLg-E7-4v1ffh2iPrT8exXOV5QADF1h_SBe2k6fyMk2-nofsiWHNhmzxTGV54TW6vpG30edF7plPJqQ2rvhDn7r_9ZI8_vqT0EoniyEyHsKx22NEAN9YeEhTdhitczINcdeAq4fpCU9n88guPul29HFRM5dvgSObhakk-ec-y5z2M_Fa8ro7UdmE4cxuud_BNJ1kgAJeEjtOl_0XL7M2i7dSByCKKckI5PMAKb6t8Lq0Fj8eqAfn00Rv7HblPkuU-rxy0_W59xCWwWmIJ3ZYjrqU7IXMlhN8TxvzVCq5MUoyV4auBiVHweL5A603anl6-F60WOePLJ0GZiH44XCAFXC0fN57Ovqf3Ytuj6x7XQ02l2hNBd6ScoyU-F1nPjiFPttPLkkpAUdtdc8i9SO_uvHQclsuzWNRzC3iPuS4wNu0-7yW-_d0257FZ8VtMddN9l8uyMNUXDnPnTBfabn3RLJVyaEOpIaKKj3GZ3dq80",
    "https://yandex-images.clstorage.net/4Tdt9d203/250e15fwf/UabBsVRNL8hJy7UahrsMj3wAPoAW3NjLQ7wyForvQ9JhZ_Ha8LbtjKZaO4J73CWXMtqw-oraPMylRwTydyiURwnryMBlZT7cRNOkG5eOYJZ8bFfQP42Iuy-NewrTvmujAR_hLkDOKRAS_s9u03yl_yPf5aOOhzXNOOM4wmOpjPuF9gDgLVWDQN2_4ULrh3ADLbweNOKYkGpLIBLLOiObt5FPfYb08p2gUo6Lzu8QkT838-nXyw_hyaQmvOZ3UUAPRY6A6C3di0BFMxk6e4sY_6GgmozmhOSW88Tiw_r7b-f9s1V6FPKZONIa05pz-EWjg6exP397mclAFvga30lMRzn2PGixyc-8bX_hHtOrtEcNqFKQhoT4-kvAHk_6_59XNdM5ivD-HXhylssilxzR8xNfTT_bl52tbIIcxsPZcCuN8uywcanjCIH76db_z2zDkQiejLrcyH6fHB7DiiezT0nXecIUTvmQXqpXZivo3UcLg-E7-4v1ffh2iPrT8exXOV5QADF1h_SBe2k6fyMk2-nofsiWHNhmzxTGV54TW6vpG30edF7plPJqQ2rvhDn7r_9ZI8_vqT0EoniyEyHsKx22NEAN9YeEhTdhitczINcdeAq4fpCU9n88guPul29HFRM5dvgSObhakk-ec-y5z2M_Fa8ro7UdmE4cxuud_BNJ1kgAJeEjtOl_0XL7M2i7dSByCKKckI5PMAKb6t8Lq0Fj8eqAfn00Rv7HblPkuU-rxy0_W59xCWwWmIJ3ZYjrqU7IXMlhN8TxvzVCq5MUoyV4auBiVHweL5A603anl6-F60WOePLJ0GZiH44XCAFXC0fN57Ovqf3Ytuj6x7XQ02l2hNBd6ScoyU-F1nPjiFPttPLkkpAUdtdc8i9SO_uvHQclsuzWNRzC3iPuS4wNu0-7yW-_d0257FZ8VtMddN9l8uyMNUXDnPnTBfabn3RLJVyaEOpIaKKj3GZ3dq80",
    "https://avatars.mds.yandex.net/i?id=8edd4093429f730eb6db56d3032fb467c3e94cc4-4033630-images-thumbs&n=13",
  ],
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

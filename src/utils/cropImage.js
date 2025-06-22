// src/utils/cropImage.js

/**
 * Создаёт HTMLImageElement из URL
 * @param {string} url
 * @returns {Promise<HTMLImageElement>}
 */
function createImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); // для CORS, если нужно
    image.src = url;
  });
}

/**
 * Обрезает изображение по заданным размерам и возвращает Blob
 * @param {string} imageSrc - URL или src изображения
 * @param {{x: number, y: number, width: number, height: number}} pixelCrop - область кропа
 * @param {{width: number, height: number}} outputSize - размер выходного холста
 * @returns {Promise<Blob>} — blob обрезанного изображения
 */
export async function getCroppedImg(imageSrc, pixelCrop, outputSize) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  canvas.width = outputSize.width;
  canvas.height = outputSize.height;
  const ctx = canvas.getContext("2d");

  // рисуем обрезанную часть на новом canvas
  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    outputSize.width,
    outputSize.height
  );

  // возвращаем Blob для дальнейшей работы (File или URL)
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Не удалось создать blob из canvas"));
    }, "image/jpeg");
  });
}

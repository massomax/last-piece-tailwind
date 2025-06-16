// components/ProductDetails/ImageCarousel.jsx
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AUTO_CHANGE_INTERVAL = 5000;
const SWIPE_THRESHOLD = 50;

export function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);

  // Авто-смена
  useEffect(() => {
    if (images.length < 2) return;
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((i) => (i + 1) % images.length);
    }, AUTO_CHANGE_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  // Сброс таймера автосмены
  const resetAuto = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((i) => (i + 1) % images.length);
    }, AUTO_CHANGE_INTERVAL);
  };

  // Свайп
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    if (dx > SWIPE_THRESHOLD) {
      goNext();
    } else if (dx < -SWIPE_THRESHOLD) {
      goPrev();
    }
  };

  // Листаем вперед/назад
  const goNext = () => {
    setDirection(1);
    setCurrent((i) => (i + 1) % images.length);
    resetAuto();
  };
  const goPrev = () => {
    setDirection(-1);
    setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
    resetAuto();
  };

  return (
    <div
      className="relative w-full flex-none aspect-[3/4] overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}>
      {/* Кнопка «назад» */}
      {images.length > 1 && (
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-background-secondary/50 p-2 rounded-full z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 text-text">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
            />
          </svg>
        </button>
      )}

      {/* Анимированный слайд */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={current}
          src={images[current]}
          custom={direction}
          initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Кнопка «вперед» */}
      {images.length > 1 && (
        <button
          onClick={goNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-background-secondary/50 p-2 rounded-full z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 text-text">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

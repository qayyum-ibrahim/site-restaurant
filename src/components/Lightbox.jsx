import { useEffect, useRef } from "react";
import Img from "./Img.jsx";
import Arrow from "./Arrow.jsx";
import "./Lightbox.css";

const toNumber = (ratio) => {
  const [w, h] = ratio.split("/").map(Number);
  return w / h;
};

// Modal image viewer on a native <dialog>: focus is kept inside, Escape closes,
// arrow keys and swipes move between images.
export default function Lightbox({ images, index, onClose, onChange }) {
  const dialogRef = useRef(null);
  const touchX = useRef(null);
  const image = images[index];
  const count = images.length;

  const go = (step) => onChange((index + step + count) % count);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label="Photo viewer"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onKeyDown={onKeyDown}
    >
      <div
        className="lightbox__stage"
        onClick={(e) => e.target === e.currentTarget && onClose()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <figure className="lightbox__figure" style={{ "--r": toNumber(image.ratio) }} key={image.src}>
          <Img src={image.src} alt={image.alt} ratio={image.ratio} label={image.caption} eager />
          <figcaption>
            <span>{image.caption}</span>
            <span className="lightbox__count" aria-live="polite">
              {index + 1} / {count}
            </span>
          </figcaption>
        </figure>
      </div>

      <button type="button" className="lightbox__btn lightbox__close" onClick={onClose} aria-label="Close photo viewer" autoFocus>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
      <button type="button" className="lightbox__btn lightbox__nav lightbox__nav--prev" onClick={() => go(-1)} aria-label="Previous photo">
        <Arrow dir="left" />
      </button>
      <button type="button" className="lightbox__btn lightbox__nav lightbox__nav--next" onClick={() => go(1)} aria-label="Next photo">
        <Arrow />
      </button>
    </dialog>
  );
}

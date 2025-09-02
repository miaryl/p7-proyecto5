import { useEffect, useRef } from "react";
import s from "./Modal.module.scss";

export default function Modal({ open, onClose, title = "Información", children }) {
  const dialogRef = useRef(null);
  const lastFocusedRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) {
      lastFocusedRef.current = document.activeElement;
      document.addEventListener("keydown", onKey);
      setTimeout(() => dialogRef.current?.focus(), 0);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lastFocusedRef.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={s.backdrop} onClick={onClose} aria-hidden="true">
      <div
        className={s.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        ref={dialogRef}
      >
        <header className={s.header}>
          <h2 id="modal-title">{title}</h2>
          <button className={s.close} onClick={onClose} aria-label="Cerrar">×</button>
        </header>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
}


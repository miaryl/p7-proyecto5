import Modal from "../modal/Modal";

export default function InfoModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} title="Sobre esta web">
      <p>
        <strong>Venus del Tarot</strong> es una demo hecha con React + Vite.
        Usa <strong>Sass (SCSS)</strong> y CSS Modules.
      </p>
      <ul>
        <li>Routing: React Router.</li>
        <li>Estilos: SCSS + módulos.</li>
        <li>Assets en <code>src/assets</code>.</li>
      </ul>
      <p>Proyecto académico: no guardamos datos personales.</p>
    </Modal>
  );
}

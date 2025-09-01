import Modal from "../modal/Modal";

export default function InfoModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} title="Sobre esta web">
      <p>
        <strong>Las Venus del Tarot</strong>
      </p>
      <p>
        Esta aplicación web en React es un tarot especial donde cada
        carta boca abajo revela la historia de una mujer que ha dejado huella
        en el mundo STEM.
      </p>
      <p>
        El usuario puede barajar el mazo, elegir tres cartas y al girarlas
        descubrir sus logros junto con un mensaje inspirador.
      </p>
      <p>
        Cada lectura se puede guardar en un historial persona con nombre y fecha. Desde allí es posible consultar, editar o eliminar
        lecturas pasadas.
      </p>
    </Modal>
  );
}

import { useCloseModal } from "../../../contexts/modal";
import "./modal.scss";

export default function Modal({ children }) {
  const closeModal = useCloseModal();

  return (
    <div className="modal-container" onClick={closeModal}>
      <main onClick={(e) => e.stopPropagation()}>{children}</main>
    </div>
  );
}

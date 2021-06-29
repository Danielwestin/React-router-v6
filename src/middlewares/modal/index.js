import { useState } from "react";
import modalContext from "../../contexts/modal";
import imageModal from "../../components/animationSections/react-spring/imageModal";

const modals = {
  imageModal,
};

const initialModalState = {
  name: "",
  context: {},
};

export default function ModalMiddleware({ children }) {
  const [modal, setModal] = useState(initialModalState);

  const closeModal = () => {
    setModal(initialModalState);
  };

  const Modal = modal.name && modals[modal.name];

  const value = {
    setModal: (name, context = {}) => setModal({ name, context }),
    closeModal,
    context: modal.context,
  };

  return (
    <modalContext.Provider value={value}>
      {children}
      {Modal && <Modal />}
    </modalContext.Provider>
  );
}

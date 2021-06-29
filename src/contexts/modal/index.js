import { createContext, useContext } from "react";

const modalContext = createContext();

export function useSetModal() {
  return useContext(modalContext).setModal;
}

export function useCloseModal() {
  return useContext(modalContext).closeModal;
}

export function useModalContext() {
  return useContext(modalContext).context;
}

export default modalContext;

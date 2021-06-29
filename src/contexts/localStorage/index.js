import { createContext, useContext } from "react";

const localStorageContext = createContext();

export const useSetLocalStorage = () => {
  return useContext(localStorageContext).setLocalStorageValue;
};

export const useGetLocalStorage = () => {
  return useContext(localStorageContext).getLocalStorageValue;
};

export const useRemoveLocalStorageItem = () => {
  return useContext(localStorageContext).removeLocalStorageItem;
};

export const useClearLocalStorage = () => {
  return useContext(localStorageContext).clearLocalStorage;
};

// export const useLocalStorageContext = () => {
//   return useContext(localStorageContext).context;
// };

export default localStorageContext;

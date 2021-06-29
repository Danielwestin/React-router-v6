import localStorageContext from "../../contexts/localStorage";

const initialStorageValue = {
  name: "",
  value: "",
};

export default function LocalStorageMiddleware({ children }) {
  // const [value, setLocalStorge] = useState(initialStorageValue);

  function setLocalStorageValue(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
    // return [value, setLocalStorge];
  }

  function getLocalStorageValue(key) {
    const storedValue = JSON.parse(localStorage.getItem(key));
    if (storedValue) return storedValue;
    return initialStorageValue.value;
  }

  function removeLocalStorageItem(key) {
    return localStorage.removeItem(key);
  }

  function clearLocalStorage() {
    window.localStorage.clear();
  }

  const context = {
    clearLocalStorage,
    getLocalStorageValue,
    setLocalStorageValue,
    removeLocalStorageItem,
  };

  return (
    <localStorageContext.Provider value={context}>
      {children}
    </localStorageContext.Provider>
  );
}

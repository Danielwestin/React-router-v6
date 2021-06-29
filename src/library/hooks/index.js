import { useEffect, useRef, useState } from "react";

export function useLocalStorage(key, fallbackValue) {
  const [value, setState] = useState(() => {
    const localStoreValue = localStorage.getItem(key);

    if (localStoreValue) return JSON.parse(localStoreValue);

    return fallbackValue;
  });

  //   useEffect(() => {
  //     const listener = (e) => {
  //       console.log(e);
  //       if (e.storageArea === localStorage && e.key === key) {
  //         setState(JSON.parse(e.NewValue));
  //       }
  //     };
  //     window.addEventListener("storage", listener);

  //     return () => {
  //       window.removeEventListener("storage", listener);
  //     };
  //   }, [key]);

  function setValue(newValue) {
    setState((currentValue) => {
      const result =
        // typeof newValue === "function"
        newValue instanceof Function ? newValue(currentValue) : newValue;
      localStorage.setItem(key, JSON.stringify(result));

      return result;
    });
  }

  return [value, setValue];
}

export function useInView(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}

// export function DumbComponent() {
//   const ref = useRef();

//   const onScreen = useOnScreen(ref);

//   return <div ref={ref}>{onScreen && "I'm on screen!"}</div>;
// }

export function useOnScreen(elements, options) {
  // const [node, setNode] = useState([]);

  // const [entry, setEntry] = useState({});
  // const observer = useRef(
  //   new IntersectionObserver(([entry]) => setEntry(entry), options)
  // );

  function callback(entries) {
    entries.forEach((n) => {
      if (n.isIntersecting) {
        n.target.src = n.target.dataset.src;
        observer.unobserve(n.target);
      }
    });
  }
  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    const node = document.querySelectorAll(elements);

    if (node) node.forEach((n) => observer.observe(n));
    return () => {
      observer.disconnect();
    };
  }, []);
}

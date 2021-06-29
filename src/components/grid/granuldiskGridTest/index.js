import { useEffect } from "react";
import { useGetLocalStorage } from "../../../contexts/localStorage";
import { ObserveElements } from "../../../library/helpers";
import { useOnScreen } from "../../../library/hooks";
import styles from "./GranuldiskGridTest.module.css";

const GranuldiskGrid = () => {
  const getLocalStorageValue = useGetLocalStorage();
  const storeValue = getLocalStorageValue("daniel");

  // useOnScreen("#lazyLoad", { rootMargin: "-10px", threshold: 1.0 });

  useEffect(() => {
    const observer = ObserveElements("#lazyLoad", {
      rootMargin: "-10px",
      threshold: 1.0,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <h1 className="text-xl subpixel-antialiased font-medium">
        Section 1 {storeValue}
      </h1>
      <h1 className="text-xl subpixel-antialiased font-medium">
        Value from Local Storage: {storeValue && storeValue}
      </h1>
      <section className={styles.gridSection}>
        <div className={styles.gridSection__topLeft}>
          <img id="lazyLoad" data-src="/macbook.jpeg" src="" alt="A macbook" />
        </div>
        <div className={styles.gridSection__topRight}>
          <h1 className="text-2xl font-bold">MACBOOK PRO</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            nesciunt nulla numquam reiciendis, perferendis harum id officiis
            distinctio rerum dolore magni consectetur necessitatibus non odio
            dicta, neque magnam, excepturi minima?
          </p>
        </div>

        <div className={styles.gridSection__bottomRight}>
          <img id="lazyLoad" data-src="/iphone.jpeg" src="" alt="Iphone" />
        </div>
        <div className={styles.gridSection__bottomLeft}>
          <h1 className="text-2xl font-bold">{`IPHONE`}</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            nesciunt.
          </p>
        </div>
      </section>
    </>
  );
};

export default GranuldiskGrid;

import { useEffect } from "react";
import { ObserveElements } from "../../../library/helpers";
import { useOnScreen } from "../../../library/hooks";
import { Grandma1Section } from "../../../utilities/Animations";
import "./grid2.scss";

export default function Grid2() {
  // useOnScreen("#lazyLoad", { threshold: 1.0 });

  useEffect(() => {
    Grandma1Section();
    const observer = ObserveElements("#lazyLoad", { threshold: 1.0 });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <h1 className="text-xl subpixel-antialiased font-medium">Section 2</h1>
      <section className="grid2-section">
        <div className="grid2-section__left">
          <h1 className="text-4xl font-medium">Watch out!</h1>
          <p>It's grandma.</p>
        </div>
        <div className="grid2-section__right">
          <img
            id="lazyLoad"
            data-src="/grandma1.jpeg"
            src=""
            alt="grandma1 with iron"
          />
        </div>
      </section>
    </>
  );
}

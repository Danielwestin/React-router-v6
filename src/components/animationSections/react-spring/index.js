import { useEffect, useState } from "react";
import "./react-spring.scss";
import { useTransition, animated } from "react-spring";
import { slides } from "./ImageArray";
import { useSetModal } from "../../../contexts/modal";
import { ObserveElements } from "../../../library/helpers";

const ReactSpringImageGallery = () => {
  const [index, setIndex] = useState(0);

  const setModal = useSetModal();

  const item = slides[index];
  const increment = () => setIndex((index) => (index + 1) % slides.length);

  useEffect(() => {
    const interval = setInterval(increment, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let transitions = useTransition(item, (item) => item.id, {
    from: { opacity: 0, transform: "scale(1.1)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.9)" },
  });

  const openModal = () => {
    setModal("imageModal");
  };

  return (
    <main className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-col">
        <h1 class="text-4xl font-bold mb-5">
          Simple image-galley with react-spring
        </h1>
        <div className="gallery-container" onClick={openModal}>
          {transitions.map(({ item, props, key }) => (
            <animated.img
              id="lazyLoad"
              key={key}
              style={props}
              class="gallery-container__image"
              src={item.path}
              alt={item.alt}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
export default ReactSpringImageGallery;

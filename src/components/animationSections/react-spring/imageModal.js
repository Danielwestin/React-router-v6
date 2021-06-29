import { useEffect, useState } from "react";
import "./react-spring.scss";
import { useTransition, animated } from "react-spring";
import { slides } from "./ImageArray";

import Modal from "../../ui/modal";

const ImageModal = () => {
  const [index, setIndex] = useState(0);

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

  return (
    <Modal>
      <div className="image-modal-gallery-container">
        {transitions.map(({ item, props, key }) => (
          <animated.img
            key={key}
            style={props}
            className="image-modal-gallery-container__image"
            src={item.path}
            alt={item.alt}
          />
        ))}
      </div>
      {/* <div className="image-modal-gallery-container">
        <img
          class="image-modal-gallery-container__image"
          src={item.path}
          alt={item.alt}
        />
      </div> */}
    </Modal>
  );
};
export default ImageModal;

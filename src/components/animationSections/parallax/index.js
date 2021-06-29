import { useEffect, useState } from "react";
import "./parallaxScrolling.scss";

export default function ParallaxScrolling() {
  const [offsetY, setOffsetY] = useState(0);
  const [mouseValue, setMouseValue] = useState({});
  const [leftCard, setLeftCard] = useState(false);
  const [animatedValues, setAnimtedValues] = useState({});

  const handleScroll = () => setOffsetY(window.pageYOffset);

  const handleMouseMove = (e) => {
    setMouseValue({
      xAxis: (window.innerWidth / 2 - e.clientX) / 10,
      yAxis: (window.innerHeight / 2 - e.clientY) / 10,
    });
  };
  const handleMouseEnter = () => {
    setLeftCard(false);
    setAnimtedValues({
      CardTransition: "none",
      circleTransform: "translateZ(190px)",
      titleTransform: "translateZ(150px)",
    });
  };

  const handleMouseLeave = () => {
    setLeftCard(true);
    setAnimtedValues({
      CardTransition: "all 0.5s ease",
      cardTransform: "rotateY(0deg) rotateX(0deg)",
      circleTransform: "translateZ(0px)",
      titleTransform: "translateZ(0px)",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  //rotateX(${mouseValue.yAxis}deg)
  return (
    <main>
      <div className="parallax">
        <img
          // style={{ transform: `translateY(${offsetY * 0.2}px)` }}
          src="/parallax/YTvideoBackground.png"
          alt="random"
        />
        <img
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          src="/parallax/YTvideoBackground-triangles.png"
          alt="random"
        />

        <h1 className="parallax__h1 text-black text-5xl">SCROLL</h1>
      </div>
      <section className="section1">
        <div className="section1__shadow" />
        <div
          className="section1__container"
          onMouseMove={(e) => handleMouseMove(e)}
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={(e) => handleMouseLeave(e)}
        >
          <div
            className="section1__container__card"
            style={{
              transform: leftCard
                ? animatedValues.cardTransform
                : `rotateY(${mouseValue.xAxis}deg) rotateX(${mouseValue.yAxis}deg)`,
              transition: animatedValues.CardTransition,
            }}
          >
            <img
              className="section1__container__card__petra1"
              //   style={{ transform: `translateY(${offsetY * 0.3}px)` }}
              src="/parallax/petra1.jpeg"
              alt="random2"
            />

            <div
              className="section1__container__card__circle-eye"
              style={{ transform: animatedValues.circleTransform }}
            >
              <img
                className="section1__container__card__circle-eye__petra4"
                //   style={{ transform: `translateY(${offsetY * 0.3}px)` }}
                src="/parallax/petra4.jpeg"
                alt="random1"
              />
            </div>
            <div className="section1__container__card__text">
              <h1
                className="section1__container__card__text--title"
                style={{ transform: animatedValues.titleTransform }}
              >
                Petra Agency
              </h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

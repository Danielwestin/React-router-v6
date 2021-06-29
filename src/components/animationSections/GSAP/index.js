import { useEffect } from "react";
import { useSetTheme, useTheme } from "../../../contexts/theme";
import { useLocalStorage } from "../../../library/hooks";
import { FlyingPlane, GlideIn } from "../../../utilities/Animations";
import CheckboxSlider from "../../checkboxSlider";

import styles from "./animation.module.css";

export default function GSAPScrollTrigger() {
  // const [theme, setTheme] = useLocalStorage("theme", "lightMode");
  const darkMode = useTheme();
  const setDarkMode = useSetTheme();

  useEffect(() => {
    GlideIn();
    FlyingPlane();
  }, []);

  const themeStyle = {
    backgroundColor: darkMode ? "#4f46e5" : "#f9fafb",
    color: !darkMode ? "#4f46e5" : "#f9fafb",
  };
  const buttonStyle = {
    backgroundColor: !darkMode ? "#4f46e5" : "#f9fafb",
    color: darkMode ? "#4f46e5" : "#f9fafb",
  };

  const toggleTheme = () => {
    // setTheme((currentValue) =>
    //   currentValue === "lightMode" ? "darkMode" : "lightMode"
    // );
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <section style={themeStyle} className="h-screen text-center">
          <h1 className="text-3xl font-bold">
            {darkMode ? "DARKMORDE" : "LIGHTMODE"}
          </h1>
          <button
            onClick={toggleTheme}
            className="bg-transparent hover:bg-gray-500 font-semibold hover:text-white mb-5 mt-5 py-2 px-4 hover:border-transparent rounded"
            style={buttonStyle}
          >
            SWITCH THEME TO {!darkMode ? "DARK MODE" : "LIGHT MODE"}
          </button>
          <h1 className="text-3xl font-bold">Scroll Down!</h1>
          {/* <CheckboxSlider onClick={toggleTheme} /> */}
        </section>
        <div className="bg-gray-50 pin-this">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block glide-text-right text-black-900">
                Ready to dive in?
              </span>
              <span className="block glide-text-left text-indigo-600">
                Start your free trial today.
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Get started
                </button>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <section
          style={themeStyle}
          className="bye-text h-screen flex items-center justify-center flex-col "
        >
          <h1 className=" text-3xl font-bold ">Hello!</h1>
          <h2 className=" text-2xl font-bold ">Scroll some more!</h2>
        </section>
        <section className="bye-text h-screen bg-gradient-to-r from-green-400 to-blue-500 relative">
          <img
            src="./plane.png"
            alt="plane"
            className={`${styles.plane} plane`}
          />
        </section>
        <section
          style={themeStyle}
          className="bye-text h-screen flex items-center justify-center flex-col"
        >
          <h1 className=" text-3xl font-bold">Bye!</h1>
        </section>
      </div>
    </div>
  );
}

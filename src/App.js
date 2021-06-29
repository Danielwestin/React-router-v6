import "./App.scss";
import { useLocation, useRoutes, Route } from "react-router-dom";
import NavLink from "./components/navlink";
import { appRoutes } from "./routes/appRoutes";
import { useSetTheme, useTheme } from "./contexts/theme";
import CheckboxSlider from "./components/checkboxSlider";
import { animated, useTransition } from "react-spring";

function App() {
  let element = useRoutes(appRoutes);
  const location = useLocation();
  const setDarkMode = useSetTheme();
  const darkMode = useTheme();

  const toggleThemes = () => {
    setDarkMode((prev) => !prev);
  };

  const transitions = useTransition(location, (location) => location.pathname, {
    from: { display: "none", opacity: 0, transform: "scale(1.03)" },
    enter: { display: "block", opacity: 1, transform: "scale(1)" },
    leave: { display: "none", opacity: 0, transform: "scale(0.5)" },
    // from: { display: "none", opacity: 0, transform: "translate3d(20%,0,0)" },
    // enter: { display: "block", opacity: 1, transform: "translate3d(0%,0,0)" },
    // leave: { display: "none", opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return (
    <div>
      <nav className={darkMode ? "bg-gray-800" : "bg-gray-300"}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    to="/"
                    className={
                      " px-3 py-2 rounded-md text-sm font-medium " +
                      (darkMode ? "text-gray-300" : "text-gray-800")
                    }
                    activeClassName="bg-gray-900 text-indigo-50"
                    inactiveClassName="hover:bg-gray-700 hover:text-white"
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    to="/animation"
                    className={
                      " px-3 py-2 rounded-md text-sm font-medium " +
                      (darkMode ? "text-gray-300" : "text-gray-800")
                    }
                    activeClassName="bg-gray-900 text-indigo-50"
                    inactiveClassName="hover:bg-gray-700 hover:text-white"
                  >
                    Animation
                  </NavLink>
                  <NavLink
                    to="/notification"
                    className={
                      " px-3 py-2 rounded-md text-sm font-medium " +
                      (darkMode ? "text-gray-300" : "text-gray-800")
                    }
                    activeClassName="bg-gray-900 text-indigo-50"
                    inactiveClassName="hover:bg-gray-700 hover:text-white"
                  >
                    Notification
                  </NavLink>

                  <NavLink
                    to="/projects"
                    className={
                      " px-3 py-2 rounded-md text-sm font-medium " +
                      (darkMode ? "text-gray-300" : "text-gray-800")
                    }
                    activeClassName="bg-gray-900 text-indigo-50"
                    inactiveClassName="hover:bg-gray-700 hover:text-white"
                  >
                    Projects
                  </NavLink>

                  <NavLink
                    to="/calendar"
                    className={
                      " px-3 py-2 rounded-md text-sm font-medium " +
                      (darkMode ? "text-gray-300" : "text-gray-800")
                    }
                    activeClassName="bg-gray-900 text-indigo-50"
                    inactiveClassName="hover:bg-gray-700 hover:text-white"
                  >
                    Calendar
                  </NavLink>
                  <CheckboxSlider darkMode={darkMode} onClick={toggleThemes} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        {transitions.map(({ location, key, props }) => (
          <animated.div key={key} style={props} className="Routes-wrapper">
            {element}
          </animated.div>
        ))}

        {/* <Routes>
          <Route path="/" element={<Dashboard title="Dashboard" />}>
            <Route path="/" element={<p>Overview</p>} />
            <Route path="/new-users" element={<p>New-Users</p>} />
            <Route path="/sales" element={<p>Sales</p>} />
          </Route>

          <Route path="/team" element={<Page title="Team" />} />
          <Route path="/projects" element={<Page title="Projects" />} />
          <Route path="/calendar" element={<Page title="Calendar" />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;

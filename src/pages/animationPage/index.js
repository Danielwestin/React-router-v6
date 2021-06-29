import { Outlet } from "react-router-dom";
import Tab from "../../components/tabs";

const AnimationPage = ({ title }) => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <nav className="flex ml-8">
            <Tab to="" exact="true" title="GSAP-ScrollTrigger" />
            <Tab to="react-spring" title="React-Spring" />
            <Tab to="parallax-scrolling" title="Parallax Scrolling" />
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AnimationPage;

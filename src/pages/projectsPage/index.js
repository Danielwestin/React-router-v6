import { Outlet } from "react-router-dom";
import Tab from "../../components/tabs";

export default function Projects({ title }) {
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <nav className="flex ml-8">
            <Tab to="" exact="true" title="Landing Page" />
            <Tab to="simple-reducer" title="Simple Reducer" />
            <Tab to="map" title="MapBox" />
          </nav>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}

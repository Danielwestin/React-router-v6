import { Outlet } from "react-router-dom";
import Tab from "../../components/tabs";
import { places } from "../../library/places";

const MapPage = ({ title }) => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <nav>
            {places.map(({ path, city, ...rest }) => (
              <Tab key={city} to={path} title={city} {...rest} />
            ))}
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default MapPage;

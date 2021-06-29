import { Outlet } from "react-router-dom";
import NavLink from "../../../components/navlink";

const Notify = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        {[...Array(7).keys()].map((index) => (
          <p className="m-4" key={index}>
            <NavLink
              to={`${index}`}
              activeClassName="border-gray-400"
              inactiveClassName="hover:bg-gray-100"
              className="bg-white text-gray-800 font-semibold py-2 px-4 border rounded shadow"
            >
              Notification {index}
            </NavLink>
          </p>
        ))}
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Notify;

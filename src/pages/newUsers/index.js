import NavLink from "../../components/navlink";
import { Outlet } from "react-router-dom";

export default function NewUsers() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <p className="mb-4">New users:</p>
        {[...Array(20).keys()].map((index) => (
          <div key={index}>
            <NavLink
              to={`${index}`}
              activeClassName="text-gray-900"
              inactiveClassName="text-gray-300 hover:text-gray-500"
            >
              User {index}
            </NavLink>
          </div>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

import NavLink from "../navlink";

const Tab = ({ title, to, ...rest }) => {
  return (
    <NavLink
      to={`${to}`}
      activeClassName="text-gray-700 bg-gray-100"
      inactiveClassName="text-gray-500 hover:text-gray-700"
      className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
      {...rest}
    >
      {title}
    </NavLink>
  );
};

export default Tab;

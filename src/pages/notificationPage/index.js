import { Outlet } from "react-router-dom";
import Tab from "../../components/tabs";

export default function NotificationPage({ title }) {
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <nav className="flex ml-8">
            <Tab to="" exact="true" title="Notify Overview" />
            <Tab to="no-notification" title="No-notify" />
            <Tab to="see-notification" title="Notify" />
          </nav>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

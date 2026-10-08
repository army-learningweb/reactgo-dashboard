import { Outlet } from "react-router";
import Sidebar from "../../ui/admin/sidebar/Sidebar";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen text-sm">
      <Sidebar />
      <main className="p-5 dark:bg-gray-900 w-full">
        <Outlet />
      </main>
    </div>
  );
}

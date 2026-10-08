import {
  LayoutDashboard,
  Box,
  FileText,
  ShoppingCart,
  UserRound,
} from "lucide-react";

import { useNavigate } from "react-router";
import { useState } from "react";
import { useThemeContext } from "../../../../contexts/ThemeContext";
import { useAuthContext } from "../../../../contexts/AuthContext";
import SidebarLink from "./SidebarLink";
import SidebarSubLink from "./SidebarSubLink"

export default function Sidebar() {

  const [index, setIndex] = useState(null);

  const { logoutApi } = useAuthContext();
  const { isDark, toggleTheme } = useThemeContext();
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    await logoutApi();
    navigate("/login", { replace: true });
  };
  
  return (
    <aside className="bg-black w-[15%] text-gray-100 p-4">
      {/* Logo */}
      LOGO

      <div className="flex flex-col gap-1">
        {/* Dashboard */}
        <SidebarLink
          to="dashboard"
          name="Dashboard"
          icon={<LayoutDashboard size={17} />}
          onClick={() => setIndex(null)}
        />

        {/* Thành viên */}
        <SidebarLink
          to="users"
          name="Thành viên"
          icon={<UserRound size={17} />}
          onClick={() => setIndex(null)}
        />

        {/* Sản phẩm */}
        <SidebarLink
          to="products"
          name="Sản phẩm"
          icon={<Box size={17} />}
          isOpen={index == 0}
          onClick={() => setIndex(0)}
        >
          <SidebarSubLink to="products" name="Danh sách" />
          <SidebarSubLink to="products/categories" name="Danh mục" />
          <SidebarSubLink to="products/create" name="Thêm mới" />
        </SidebarLink>

        {/* Bài viết */}
        <SidebarLink
          to="posts"
          name="Bài viết"
          icon={<FileText size={17} />}
          isOpen={index == 1}
          onClick={() => setIndex(1)}
        >
          <SidebarSubLink to="posts" name="Danh sách" />
          <SidebarSubLink to="posts/categories" name="Danh mục" />
          <SidebarSubLink to="posts/create" name="Thêm mới" />
        </SidebarLink>

        {/* Bán hàng */}
        <SidebarLink
          to="sales"
          name="Bán hàng"
          icon={<ShoppingCart size={17} />}
          isOpen={index == 2}
          onClick={() => setIndex(2)}
        >
          <SidebarSubLink to="sales" name="Đơn hàng" />
        </SidebarLink>

        {/* Đăng xuất */}
        <div className="px-2 mt-4 cursor-pointer" onClick={handleLogout}>
          Đăng xuất
        </div>

        <button onClick={toggleTheme} className="w-full  text-left mt-3 px-2">
          {isDark ? "Chế độ tối" : "Chế độ sáng"}
        </button>
      </div>
    </aside>
  );
}

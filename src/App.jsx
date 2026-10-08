import "./App.css";
import { Routes, Route } from "react-router";
import AdminLayout from "./components/layouts/admin/AdminLayout";
import Dashboard from "./pages/admin/dashboard/Dashboard";

// Đăng nhập
import Login from "./pages/admin/auth/Login";

// Kiêm tra đăng nhập và chuyển hướng
import ProtectedRoute from "./routes/ProtectedRoute";

// Thành viên
import ReadUser from "./pages/admin/user/ReadUser";

// Sản phẩm
import ReadProduct from "./pages/admin/product/ReadProduct";
import ReadProductCategory from "./pages/admin/product/ReadProductCategory";
import CreateProduct from "./pages/admin/product/CreateProduct";
import EditProduct from "./pages/admin/product/EditProduct";

// Bài viết
import ReadPost from "./pages/admin/post/ReadPost";
import ReadPostCategory from "./pages/admin/post/ReadPostCategory";
import CreatePost from "./pages/admin/post/CreatePost";
import EditPost from "./pages/admin/post/EditPost";

// Bán hàng
import ReadSale from "./pages/admin/sale/ReadSale";

function App() {
  return (
    <Routes>

      {/* Route riêng lẻ */}
      <Route path="/login" element={<Login />} />

      {/* Bước 1: Kiểm tra đăng nhập (ProtectedRoute bọc ở ngoài cùng) */}
      <Route element={<ProtectedRoute />}>
        {/* Bước 2: Khai báo layout chung cho phần admin */}
        <Route path="/admin" element={<AdminLayout />}>
        
          {/* Các trang con bên trong AdminLayout sẽ tự động hiển thị vào vị trí <Outlet /> */}
          <Route path="dashboard" element={<Dashboard />} />

          {/* Thành viên */}
          <Route path="users" element={<ReadUser />} />

          {/* Sản phẩm */}
          <Route path="products" element={<ReadProduct />} />
          <Route path="products/categories" element={<ReadProductCategory />} />
          <Route path="products/create" element={<CreateProduct />} />
          <Route path="products/edit/:id" element={<EditProduct />} />

          {/* Bài viết */}
          <Route path="posts" element={<ReadPost />} />
          <Route path="posts/categories" element={<ReadPostCategory />} />
          <Route path="posts/create" element={<CreatePost />} />
          <Route path="posts/edit/:id" element={<EditPost />} />

          {/* Bán hàng */}
          <Route path="sales" element={<ReadSale />} />
        </Route>
      </Route>

    </Routes>
  );
}

export default App;

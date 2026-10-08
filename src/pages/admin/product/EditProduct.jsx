import { useParams } from "react-router";

export default function EditProduct() {
  const { id } = useParams();

  return <h1 className="text-xl font-semibold">Chỉnh sửa sản phẩm {id}</h1>;
}

import { useParams } from "react-router";

export default function EditPost() {
  const { id } = useParams();

  return <h1 className="text-xl font-semibold">Chỉnh sửa bài viết {id}</h1>;
}

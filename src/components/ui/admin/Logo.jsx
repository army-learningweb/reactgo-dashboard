import { Link } from "react-router";

export default function Logo() {
  return (
    <>
      <Link to="dashboard">
        <div className="flex items-center gap-2">
          <div className="p-3 bg-blue-600 rounded-md w-9 h-8 flex justify-center items-center font-bold text-xl">
            R
          </div>
          <div className="font-semibold text-lg">React GO</div>
        </div>
        <hr className="my-4 border-gray-400" />
      </Link>
    </>
  );
}

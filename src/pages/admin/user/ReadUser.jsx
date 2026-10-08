import { useEffect } from "react";
import { privateApi } from "../../../api/privateApi";
import { useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";

export default function ReadUser() {

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Danh sách thành viên</h1>

      <table className="w-full border border-gray-200">
        <thead>
          <tr className="border-b border-gray-200">
            <td className="px-2 py-4">Tên</td>
            <td className="px-2 py-4">Email</td>
            <td className="px-2 py-4">Ngày tạo</td>
          </tr>
        </thead>

        {/* <tbody>
          <tr>
            <td className="px-2 py-4">{data.name}</td>
            <td className="px-2 py-4">{data.email}</td>
            <td className="px-2 py-4">{data.created_at}</td>
          </tr>
        </tbody> */}
      </table>
    </div>
  );
}

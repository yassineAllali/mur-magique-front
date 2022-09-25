import clsx from "clsx";
import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import File from "../icons/File";

type Props = {
  file: any;
  onDelete: () => void;
  highlight?: boolean;
};

const TableItem = ({ file, onDelete, highlight }: Props) => {
  const [currentUser] = useContext(UserContext);

  return (
    <tr className={clsx("border-b", highlight ? "bg-green-300" : "bg-white")}>
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2"
      >
        <div>
          <File />
        </div>
        <div>{file.name}</div>
      </th>
      <td className="py-4 px-6">{file.size}</td>
      <td className="py-4 px-6">{file.uploader}</td>
      <td className="py-4 px-6">{file.createdAt}</td>
      <td className="py-4 px-6">
        {currentUser.role === "admin" ? (
          <button
            onClick={onDelete}
            className="font-medium text-red-600  hover:underline"
          >
            Supprimer
          </button>
        ) : (
          <button className="font-medium text-blue-600  hover:underline">
            Download
          </button>
        )}
      </td>
    </tr>
  );
};

export default TableItem;

const Table = ({ headers, children }: any) => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            {headers.map((header: any) => (
              <th key={header} scope="col" className="py-3 px-6">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;

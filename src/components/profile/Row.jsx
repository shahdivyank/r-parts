import { flexRender } from "@tanstack/react-table";

const Body = ({ id, getVisibleCells }) => {
  return (
    <>
      <div className="flex px-3 py-2">
        <div className="w-1/12 flex items-center justify-center">
          {parseInt(id) + 1}
        </div>
        {getVisibleCells().map(({ id, column, getContext }) => (
          <div
            className={`flex items-center ${column.columnDef.width}`}
            key={id}
          >
            {flexRender(column.columnDef.cell, getContext())}
          </div>
        ))}
      </div>
    </>
  );
};

export default Body;

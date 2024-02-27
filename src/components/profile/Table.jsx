import { flexRender } from "@tanstack/react-table";
import Row from "./Row";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Toolbar from "./Toolbar";

const Table = ({
  setFilters,
  getHeaderGroups,
  getRowModel,
  getState,
  previousPage,
  getCanPreviousPage,
  nextPage,
  getCanNextPage,
  empty,
  totalNumItems,
}) => {
  const index = getState().pagination.pageIndex;
  const size = 10;
  const start = index * size + 1;
  const end = Math.min((index + 1) * size, totalNumItems);
  return (
    <div className="border-2 border-parts-gray-400 rounded-xl">
      <div className="flex items-center justify-between">
        <Toolbar setFilters={setFilters} />
        <div className="flex items-center ">
          <div className=" font-outfit text-lg flex-grow whitespace-nowrap ">
            {start}-{end} OF {totalNumItems}
          </div>
          <div className="flex gap-3 items-center p-4 text-2xl w-full rounded-b-lg">
            <button
              onClick={() => previousPage()}
              disabled={!getCanPreviousPage()}
              className="mx-2 disabled:text-parts-gray-400"
            >
              <FaChevronLeft className=" text-2xl" />
            </button>

            <button
              onClick={() => nextPage()}
              disabled={!getCanNextPage()}
              className="mx-2 disabled:text-parts-gray-400"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div className="h-[70vh] w-full overflow-y-scroll flex flex-col justify-between">
        <div>
          {getHeaderGroups().map(({ headers, id }) => (
            <div key={id} className="flex items-center px-3 py-2">
              <div className="w-1/12" />
              {headers.map(({ id, column, getContext }) => (
                <div
                  key={id}
                  className={`${column.columnDef.width} flex items-center font-outfit font-light text-sm`}
                >
                  {flexRender(column.columnDef.header, getContext())}
                </div>
              ))}
            </div>
          ))}
          {getRowModel().rows.length === 0 && (
            <p className="w-full text-center py-8">{empty}</p>
          )}
          {getRowModel().rows.map(({ id, getVisibleCells }) => (
            <Row key={id} id={id} getVisibleCells={getVisibleCells} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;

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
  getPageCount,
  empty,
}) => {
  return (
    <div className="border-2 border-parts-gray-400 rounded-xl">
      <Toolbar setFilters={setFilters} />
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
      <div className="flex justify-end items-center p-4 text-lg w-full rounded-b-lg">
        <div className="mx-2">{getRowModel().rows.length} row(s)</div>
        <button
          onClick={() => previousPage()}
          disabled={!getCanPreviousPage()}
          className="mx-2 disabled:text-parts-gray-400"
        >
          <FaChevronLeft />
        </button>
        <div>
          Page {getState().pagination.pageIndex + 1} of {getPageCount()}
        </div>
        <button
          onClick={() => nextPage()}
          disabled={!getCanNextPage()}
          className="mx-2 disabled:text-parts-gray-400"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Table;

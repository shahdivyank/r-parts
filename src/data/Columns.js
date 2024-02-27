import Tag from "@/components/Tag";
import Image from "next/image";
import placeholder from "../../public/png/placeholder.png";
import Link from "next/link";

const STATUSES = {
  0: "pending",
};

export const columns = [
  {
    accessorKey: "name",
    header: "ITEM",
    width: "w-3/12",
    enableColumnFilter: true,
    filterFn: "includesString",
    cell: ({ getValue, row }) => (
      <div className="flex items-center">
        <Image src={placeholder} className="w-16 rounded" />
        <div className="mx-2">
          <p className="font-medium">{getValue()}</p>
          <p className="font-light">Quantity: {row.original.quantity}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: "DATE",
    width: "w-2/12",
    cell: ({ getValue }) => <div className="font-medium">{getValue()}</div>,
  },
  {
    accessorKey: "reference",
    header: "REFERENCE",
    width: "w-2/12",
    cell: ({ getValue }) => <div className="font-medium">{getValue()}</div>,
  },
  {
    accessorKey: "status",
    header: "STATUS",
    width: "w-2/12",
    cell: ({ getValue }) => <Tag text={STATUSES[getValue()]} />,
  },
  {
    accessorKey: "invoice",
    header: "INVOICE",
    width: "w-2/12",
    cell: ({ getValue }) => <Link href="https://github.com">VIEW MORE</Link>,
  },
];

import React from "react";

const Information = ({ productInfo }) => {
  return (
    <div className="container mx-auto p-4">
      <table className="table-auto w-full border-collapse border">
        <thead>
          <tr>
            <th className="text-left font-bold py-2">Product Dimensions</th>
            <th className="text-left font-bold py-2">Item Weight</th>
            {/* Add remaining headers for other product information */}
          </tr>
        </thead>
        <tbody>
          {productInfo.map((item) => (
            <tr key={item.label}>
              <td className="text-left py-1 px-2">{item.label}</td>
              <td className="text-left py-1 px-2">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Information;

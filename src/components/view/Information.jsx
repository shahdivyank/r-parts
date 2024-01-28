const Information = ({
  dimensions,
  weight,
  manufacturer,
  country,
  unitPrice,
  totalPrice,
}) => {
  const renderField = (label, value) => {
    return (
      <>
        <div className="bg-gray-200 pb-2 px-8 py-2 font-semibold">{label}</div>
        <div className="px-8 py-2">{value ?? "Not Available"}</div>
      </>
    );
  };
  return (
    <div className="grid grid-cols-2 w-6/12 justify-start divide-y divide-gray-400 font-outfit mb-8">
      {renderField("Product Dimensions", dimensions)}
      {renderField("Weight", weight)}
      {renderField("Manufacturer", manufacturer)}
      {renderField("Country", country)}
      {renderField("Unit Price", unitPrice)}
      {renderField("Total Price", totalPrice)}
    </div>
  );
};

export default Information;

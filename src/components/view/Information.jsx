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
    <div className="py-6">
      <div className="font-semibold font-outfit text-2xl my-4">
        {" "}
        Product Information
      </div>
      <div className="grid grid-cols-2 w-6/12 justify-start divide-y divide-gray-300 font-outfit mb-8">
        {renderField("Product Dimensions", dimensions)}
        {renderField("Weight", weight)}
        {renderField("Manufacturer", manufacturer)}
        {renderField("Country", country)}
        {renderField("Unit Price", unitPrice)}
        {renderField("Total Price", totalPrice)}
      </div>
    </div>
  );
};

export default Information;

import Information from "./Information";
import Item from "./Item";

const productInformation = {
  dimensions: "10x15",
  weight: "2 lbs",
  manufacturer: "Example Manufacturer",
  country: "Example Country",
  unit_price: "example price",
  total_price: "$40.00",
};

const View = () => {
  return (
    <div className="w-11/12">
      <Item />
      <Information {...productInformation} />
    </div>
  );
};

export default View;

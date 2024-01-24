import Information from "./Information";
import Item from "./Item";

const productInformation = {
  dimensions: "10x15",
  weight: "2 lbs",
  manufacturer: null,
  country: null,
  unitPrice: "example price",
  totalPrice: "example total price",
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

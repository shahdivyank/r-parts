import Information from "./Information";
import Item from "./Item";

const productInformation = {
  dimensions: "10x15",
  weight: "2 lbs",
  manufacturer: null,
  country: null,
  unitPrice: "example price",
  totalPrice: "example total price",
  manufacturer: "Example Manufacturer",
  ASIN: "SH28JFI2J8",
  modelNum: "BFJ3U4209",
  date: "1/1/2024",
  frequency: "2",
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

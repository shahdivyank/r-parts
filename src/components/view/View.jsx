import Information from "./Information";
import Item from "./Item";

const productInfo = [
  { label: "Product Dimensions", value: "10 x 5 x 2 inches" },
  { label: "Item Weight", value: "1 pound" },
  // ... other product information items
];

const View = () => {
  return (
    <div className="w-11/12">
      <Item />
      <Information productInfo={productInfo} />
    </div>
  );
};

export default View;

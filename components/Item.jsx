import Link from "next/link";
import React, { useContext } from "react";
import PartsContext from "./PartsContext";

const Item = ({
  id,
  title,
  description,
  price,
  images,
  condition,
  available,
  classes,
  specifications,
}) => {
  const { setSelectedItem } = useContext(PartsContext);

  const selectProduct = () => {
    setSelectedItem({
      id: id,
      data: {
        title: title,
        description: description,
        price: price,
        images: images,
        condition: condition,
        available: available,
        classes: classes,
        specifications: specifications,
      },
    });
  };

  return (
    <Link href={`/view/${id}`} onClick={selectProduct}>
      <img src={images[0]} />
      <p>{title}</p>
      <p>{price}</p>
    </Link>
  );
};

export default Item;

import Image from "next/image";
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
      title: title,
      description: description,
      price: price,
      images: images,
      condition: condition,
      available: available,
      classes: classes,
      specifications: specifications,
    });
  };

  return (
    <Link href={`/view/${id}`} onClick={selectProduct}>
      <Image src={images[0]} alt={title} width={100} height={100} />
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
    </Link>
  );
};

export default Item;

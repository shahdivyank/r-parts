import React, { useContext, useEffect, useState } from "react";
import Item from "./Item";
import { Col, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import PartsContext from "./PartsContext";

// const items = [
//   {
//     id: 123,
//     title: "Water Bottle",
//     description: "Sample Description",
//     price: 25.0,
//     images: [
//       "https://as2.ftcdn.net/v2/jpg/01/17/16/11/1000_F_117161164_mBhUQUTj1vXMJYlBLVBnwgaoeNihNv00.jpg",
//       "https://cdn4.iconfinder.com/data/icons/random-shapes/30/pattern-random-19-512.png",
//       "https://static.vecteezy.com/system/resources/previews/014/874/414/original/contemporary-red-blue-color-small-geometric-square-circle-random-shape-seamless-pattern-background-use-for-fabric-home-decoration-elements-upholstery-wrapping-vector.jpg",
//     ],
//     condition: "New",
//     available: 10,
//     classes: ["CS122A", "CS177", "CS169"],
//     specifications: [
//       "Wi-Fi Direct (P2P),soft-AP",
//       "Built-in TCP/IP protocol stack",
//       "Built-in low-power 32-bit CPU: can work as an application processor",
//       "Support WPA WPA2/WPA2-PSK encryption",
//       "Support UART interface",
//       "Support for TTL serial port to wireless application",
//       "Working voltage: 3.3V power <240Ma",
//       "Wireless standard: IEEE802.11b/g/n",
//     ],
//   },
//   {
//     id: 456,
//     title: "Laptop",
//     description: "Sample Description",
//     price: 26.0,
//     images: [
//       "https://as2.ftcdn.net/v2/jpg/01/17/16/11/1000_F_117161164_mBhUQUTj1vXMJYlBLVBnwgaoeNihNv00.jpg",
//       "https://cdn4.iconfinder.com/data/icons/random-shapes/30/pattern-random-19-512.png",
//       "https://static.vecteezy.com/system/resources/previews/014/874/414/original/contemporary-red-blue-color-small-geometric-square-circle-random-shape-seamless-pattern-background-use-for-fabric-home-decoration-elements-upholstery-wrapping-vector.jpg",
//     ],
//     condition: "Poor",
//     available: 7,
//     classes: ["CS122A", "CS177", "CS169"],
//     specifications: [
//       "Wi-Fi Direct (P2P),soft-AP",
//       "Built-in TCP/IP protocol stack",
//       "Built-in low-power 32-bit CPU: can work as an application processor",
//       "Support WPA WPA2/WPA2-PSK encryption",
//       "Support UART interface",
//       "Support for TTL serial port to wireless application",
//       "Working voltage: 3.3V power <240Ma",
//       "Wireless standard: IEEE802.11b/g/n",
//     ],
//   },
//   {
//     id: 789,
//     title: "Computer",
//     description: "Sample Description",
//     price: 27.0,
//     images: [
//       "https://as2.ftcdn.net/v2/jpg/01/17/16/11/1000_F_117161164_mBhUQUTj1vXMJYlBLVBnwgaoeNihNv00.jpg",
//       "https://cdn4.iconfinder.com/data/icons/random-shapes/30/pattern-random-19-512.png",
//       "https://static.vecteezy.com/system/resources/previews/014/874/414/original/contemporary-red-blue-color-small-geometric-square-circle-random-shape-seamless-pattern-background-use-for-fabric-home-decoration-elements-upholstery-wrapping-vector.jpg",
//     ],
//     condition: "Used",
//     available: 3,
//     classes: ["CS122A", "CS177", "CS169"],
//     specifications: [
//       "Wi-Fi Direct (P2P),soft-AP",
//       "Built-in TCP/IP protocol stack",
//       "Built-in low-power 32-bit CPU: can work as an application processor",
//       "Support WPA WPA2/WPA2-PSK encryption",
//       "Support UART interface",
//       "Support for TTL serial port to wireless application",
//       "Working voltage: 3.3V power <240Ma",
//       "Wireless standard: IEEE802.11b/g/n",
//     ],
//   },
// ];

const Items = () => {
  const router = useRouter();
  const { items } = useContext(PartsContext);
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    console.log(router.query);
    if (router.query.search) {
      console.log(router.query.search);
      setFilteredItems(
        items.filter((item) =>
          item.data.title
            .toUpperCase()
            .includes(router.query.search.toUpperCase())
        )
      );
    } else {
      setFilteredItems(items);
    }
  }, [router.query]);

  return (
    filteredItems && (
      <Row>
        {filteredItems.map((item, index) => (
          <Col key={index}>
            <Item
              id={item.id}
              title={item.data.title}
              description={item.data.description}
              price={item.data.price}
              images={item.data.images}
              condition={item.data.condition}
              available={item.data.available}
              classes={item.data.classes}
              specifications={item.data.specifications}
            />
          </Col>
        ))}
      </Row>
    )
  );
};

export default Items;

import React, { useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ViewImages from "../../components/ViewImages";
import ViewDescription from "../../components/ViewDescription";
import ViewClasses from "../../components/ViewClasses";
import ViewSpecifications from "../../components/ViewSpecifications";
import PartsContext from "../../components/PartsContext";
import axios from "axios";
import { useRouter } from "next/router";

const View = () => {
  const router = useRouter();

  const { selectedItem, setSelectedItem } = useContext(PartsContext);

  useEffect(() => {
    if (selectedItem === null && router.query.id) {
      axios.post("/api/getItem", { id: router.query.id }).then((response) => {
        setSelectedItem(response.data);
      });
    }
  }, [router.query]);

  console.log(selectedItem);

  return (
    selectedItem && (
      <div className="w-full flex justify-center items-center">
        <div className="w-10/12">
          <p className="font-outfit text-rparts-subheadingGray">
            MARKET / PRODUCT
          </p>
          <Row>
            <Col xl={6}>
              <ViewImages
                images={selectedItem.data.images}
                first={selectedItem.data.images[0]}
              />
            </Col>
            <Col xl={6}>
              <ViewDescription />
            </Col>
            <Col xl={5}>
              <ViewClasses />
            </Col>
            <Col xl={7}>
              <ViewSpecifications />
            </Col>
          </Row>
        </div>
      </div>
    )
  );
};

export default View;

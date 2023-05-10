import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const ViewImages = () => {
  const [image, setImage] = useState(
    "https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000"
  );

  console.log(image);

  return (
    <Row className="flex">
      <Col xl={2}>
        <div
          onClick={() =>
            setImage(
              "https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000"
            )
          }
        >
          {" "}
          <img src="https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000" />
        </div>

        <div
          onClick={() =>
            setImage(
              "https://thechive.com/wp-content/uploads/2019/12/person-hilariously-photoshops-animals-onto-random-things-xx-photos-25.jpg?attachment_cache_bust=3136487&quality=85&strip=info&w=400"
            )
          }
        >
          <img src="https://thechive.com/wp-content/uploads/2019/12/person-hilariously-photoshops-animals-onto-random-things-xx-photos-25.jpg?attachment_cache_bust=3136487&quality=85&strip=info&w=400" />
        </div>

        <div
          onClick={() =>
            setImage(
              "https://thechive.com/wp-content/uploads/2019/12/person-hilariously-photoshops-animals-onto-random-things-xx-photos-8.jpg?attachment_cache_bust=3136470&quality=85&strip=info&w=400"
            )
          }
        >
          <img src="https://thechive.com/wp-content/uploads/2019/12/person-hilariously-photoshops-animals-onto-random-things-xx-photos-8.jpg?attachment_cache_bust=3136470&quality=85&strip=info&w=400" />
        </div>
      </Col>
      <Col xl={10}>
        <img src={image} />
      </Col>
    </Row>
  );
};

export default ViewImages;

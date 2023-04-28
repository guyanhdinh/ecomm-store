import { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import products from "../lib/products";
import StoreItems from "./StoreItems"

function Store() {
  const [filter, setFilter] = useState("");
  return (
    <>
      <Form.Control
        type="text"
        placeholder="Search for soccer balls"
        value={filter}
        onChange={(evt) => setFilter(evt.target.value)}
        className="mb-2"
      />
      <Row lg={4} md={3} xs={1} className="g-2">
        {products
          .filter((product) =>
            product.name
              .toLocaleLowerCase()
              .includes(filter.toLocaleLowerCase())
          )
          .map((product) => (
            <Col key={product.id}>
              <StoreItems {...product} />
            </Col>
          ))}
      </Row>
    </>
  );
}

export default Store;

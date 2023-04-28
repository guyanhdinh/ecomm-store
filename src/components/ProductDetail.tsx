import { Link, useParams } from "react-router-dom";
import products, { currency } from "../lib/products";
import { Col, Form, Row } from "react-bootstrap";

type ProductParams = {
    id: string;
}

type Product = {
    name: string;
    price: number;
    brand: string;
    description: string;
    imageUrl: string;
    longDescription: string;
  }

function ProductDetail() {
    const { id } = useParams<ProductParams>();
    const item = products.find((i) => i.id.toString() === id);
    const {name, imageUrl, price, description, longDescription} = item<Product>;
    
    return (
      <>
       <Link to="/" className="text-decoration-none text-black">&lt;&lt; Back to Store</Link>
       <Form className="bg-white border-radius-2 p-3 mt-3" style={{borderRadius: "10px"}}>
        <Row lg={2} sm={1}>
          <Col className="text-center">
           <img src={imageUrl} alt={name} height={400} width={400} />
          </Col>
          <Col className="p-3">
           <span className="fs-2 fw-bold">{name}</span>
           <span className="d-block text-muted fs-3">
            {currency.format(price)}
           </span>
          </Col>
        </Row>
         <div className="pt-4 text-center">
          <h3>{description}</h3>
          <p>{longDescription}</p>
        </div>
       </Form>
      </>
    )
}

export default ProductDetail;
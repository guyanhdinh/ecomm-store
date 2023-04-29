import { Link, useParams } from "react-router-dom";
import products, { currency } from "../lib/products";
import { Col, Form, Row } from "react-bootstrap";

type ProductParams = {
    id: string;
}

function ProductDetail() {
    const { id } = useParams<ProductParams>();
    const item = products.find((i) => i.id.toString() === id);

    if (!item) return null;
    
    return (
      <>
       <Link to="/" className="text-decoration-none text-black">&lt;&lt; Back to Store</Link>
       <Form className="bg-white border-radius-2 p-3 mt-3" style={{borderRadius: "10px"}}>
        <Row lg={2} sm={1}>
          <Col className="text-center">
           <img src={item.imageUrl} alt={item.name} height={400} width={400} />
          </Col>
          <Col className="p-3">
           <span className="fs-2 fw-bold">{item.name}</span>
           <span className="d-block text-muted fs-3">
            {currency.format(item.price)}
           </span>
          </Col>
        </Row>
         <div className="pt-4 text-left">
          <h3>{item.description}</h3>
          <p>{item.longDescription}</p>
        </div>
       </Form>
      </>
    )
}

export default ProductDetail;
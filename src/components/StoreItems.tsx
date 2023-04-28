import { Card, Button } from "react-bootstrap";
import { currency } from "../lib/products"
import { useCart } from "../lib/cart";
import { Link } from "react-router-dom"; 

type StorePageItemsProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

function StorePageItems({ id, name, price, imageUrl }: StorePageItemsProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Link to={`/product/${id}`}>
       <Card.Img variant="top" src={imageUrl} className="p-3" />
      </Link>
      <Card.Body>
        <Card.Title className="mb-4">
          <Link to={`/product/${id}`} className="text-decoration-none text-black">
          <span className="d-block fs-bold">{name}</span>
          </Link>
          <span className="d-block mt-2 text-muted">
            {currency.format(price)}
          </span>
        </Card.Title>
        <div>
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span>
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StorePageItems;

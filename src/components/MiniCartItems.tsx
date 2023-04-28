import { Button, Stack } from "react-bootstrap";
import { useCart } from "../lib/cart";
import products, { currency } from "../lib/products";

type MiniCartItemsProps = {
  id: number;
  quantity: number;
};

function MiniCartItems({ id, quantity }: MiniCartItemsProps) {
  const { removeFromCart } = useCart();
  const item = products.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imageUrl}
        alt=""
        style={{ width: "100px", height: "100px" }}
      />
      <div className="me-auto">
        <div>{item.name} </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {currency.format(item.price)}{" "}
          {quantity > 1 && (
            <span style={{ fontSize: ".75rem", fontWeight: "bold" }}>
              x{quantity}
            </span>
          )}
        </div>
      </div>
      <div>{currency.format(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        X
      </Button>
    </Stack>
  );
}

export default MiniCartItems;

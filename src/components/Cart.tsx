import { Button, Stack } from "react-bootstrap";
import { useCart } from "../lib/cart";
import products, { currency } from "../lib/products";

type CartPageProps = {
  id: number;
  quantity: number;
};

function CartPageItems({ id, quantity }: CartPageProps) {
  const { removeFromCart } = useCart();
  const item = products.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imageUrl}
        alt=""
        style={{ width: "150px", height: "150px" }}
      />
      <div className="me-auto">
        <div>{item.name}</div>
        <div className="text-muted pt-3" style={{ fontSize: "1rem" }}>
          {currency.format(item.price)}{" "}
          {quantity > 1 && (
            <span style={{ fontSize: "1rem", fontWeight: "bold" }}>x{quantity}</span>
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

function CartPage() {
  const { cartItems, cartQuantity } = useCart();

  return (
    <div
      className="bg-white p-3"
      style={{ borderRadius: "10px", border: ".5px solid lightgray" }}
    >
      <Stack gap={3}>
        {cartItems.map((item) => (
          <CartPageItems key={item.id} {...item} />
        ))}
        {cartQuantity > 0 ? (
          <>
            <div className="ms-auto fw-bold fs-5">
              Total{" "}
              {currency.format(
                cartItems.reduce((total, cartItem) => {
                  const item = products.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
            <div className="d-flex justify-content-end py-2">
              <Button>Checkout</Button>
            </div>
          </>
        ) : (
          "Your cart is empty"
        )}
      </Stack>
    </div>
  );
}

export default CartPage;

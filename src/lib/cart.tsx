import { createContext, ReactNode, useContext, useState } from "react";
import MiniCart from "../components/MiniCart";
import useLocalStorage from "../hooks/useLocalStorage";


type CartProviderProps = {
    children: ReactNode;
  };
  
  type CartItem = {
    id: number;
    quantity: number;
  };
  
  type CartContextProps = {
    openMiniCart: () => void;
    closeMiniCart: () => void;
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    cartQuantity: number;
    cartItems: CartItem[];
  };
  
  const CartContext = createContext({} as CartContextProps);
  
  export function useCart() {
    return useContext(CartContext);
  }
  
  export function CartProvider({ children }: CartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
      "cart-list",
      []
    );
    const [isOpen, setIsOpen] = useState(false);
  
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
  
    const openMiniCart = () => setIsOpen(true);
    const closeMiniCart = () => setIsOpen(false);
  
    function getItemQuantity(id: number) {
      return cartItems.find((item) => item.id === id)?.quantity || 0;
    }
  
    function increaseCartQuantity(id: number) {
      setCartItems((currItems) => {
        if (currItems.find((item) => item.id === id) == null) {
          return [...currItems, { id, quantity: 1 }];
        } else {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          });
        }
      });
    }
  
    function decreaseCartQuantity(id: number) {
      setCartItems((currItems) => {
        if (currItems.find((item) => item.id === id)?.quantity === 1) {
          return currItems.filter((item) => item.id !== id);
        } else {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          });
        }
      });
    }
  
    function removeFromCart(id: number) {
      setCartItems((currItems) => {
        return currItems.filter((item) => item.id !== id);
      });
    }
  
    return (
      <CartContext.Provider
        value={{
          getItemQuantity,
          increaseCartQuantity,
          decreaseCartQuantity,
          removeFromCart,
          cartItems,
          cartQuantity,
          openMiniCart,
          closeMiniCart
        }}
      >
        {children}
        <MiniCart isOpen={isOpen} />
      </CartContext.Provider>
    );
  }


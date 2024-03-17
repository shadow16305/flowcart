"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

interface CartContextObject {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  calculateTotalPrice: () => number;
}

export const CartContext = createContext<CartContextObject>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  calculateTotalPrice: () => 0,
});

const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const saveCartItemsToLocalStorage = (items: CartItem[]) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  const addToCart = (item: CartItem) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: item.quantity }
          : cartItem,
      );
      setCartItems(updatedCartItems);
      saveCartItemsToLocalStorage(updatedCartItems);
    } else {
      const updatedCartItems = [...cartItems, { ...item }];
      setCartItems(updatedCartItems);
      saveCartItemsToLocalStorage(updatedCartItems);
    }
  };

  const removeFromCart = (itemId: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    saveCartItemsToLocalStorage(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    calculateTotalPrice,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

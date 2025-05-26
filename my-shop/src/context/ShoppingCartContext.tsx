import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "../hook/useLocalStorage";
import { LoginProvider } from "./LoginContext";

interface CartItemType {
  id: number;
  quantity: number;
  price: number
}

interface ShoppingCartProviderType {
  children: React.ReactNode;
};

interface ShoppingCartContextType {
  cartItems: CartItemType[];
  handleAddToCart: (id: number, price: number) => void;
  handleRemoveFromCart: (id: number) => void;
  handleDecreaseFromProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  handleIncreaseFromProductQty: (id: number) => void;
  getCartQty: () => number;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export const useShoppingCartContext = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error("useShoppingCart must be used within a ShoppingCartProvider");
  }
  return context;
}

export function ShoppingCartProvider({children}: ShoppingCartProviderType){
  const [cartItems, setCartItems] = useLocalStorage<CartItemType[]>("cartItems",[]);

  const handleAddToCart = (id: number, price: number) => {
    setCartItems([...cartItems, {id, quantity: 1, price}]);
  };

  const handleIncreaseFromProductQty = (id: number) => {
    const existingItem = cartItems.find((item: CartItemType) => item.id === id);
    if (existingItem) {
      setCartItems(cartItems.map((item: CartItemType) => item.id === id ? {...item, quantity: item.quantity + 1} : item));
    }

  }

  const handleRemoveFromCart = (id: number) => {
    const filterItems = cartItems?.filter((item: CartItemType) => item?.id != id);
    setCartItems(filterItems)

  };

  const handleDecreaseFromProductQty = (id: number) => {
    const existingItem = cartItems.find((item: CartItemType) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        setCartItems(cartItems.map((item: CartItemType) => item.id === id ? {...item, quantity: item.quantity - 1} : item));
      } else {
        handleRemoveFromCart(id);
      }
  };

  const getProductQty = (id: number) => {
    const existingItem = cartItems.find((item: CartItemType) => item.id === id);
    return existingItem ? existingItem.quantity : 0;

  };

  const getCartQty = () => {
    return  cartItems.reduce((totalQty: number, item: CartItemType) => totalQty + item.quantity, 0);
  };

  const value = useMemo(() => ({ cartItems, handleAddToCart, handleRemoveFromCart, handleDecreaseFromProductQty, handleIncreaseFromProductQty, getProductQty, getCartQty }), [cartItems, handleAddToCart, handleRemoveFromCart, handleDecreaseFromProductQty, handleIncreaseFromProductQty, getProductQty, getCartQty]);


  return(
    <LoginProvider>
      <ShoppingCartContext.Provider value={value}>
        {children}
      </ShoppingCartContext.Provider>
    </LoginProvider>
  )
}
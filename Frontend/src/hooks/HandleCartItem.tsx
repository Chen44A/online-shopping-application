import { useState, useEffect } from 'react';
import LoadCart from '../Utilities/LoadCart';
import { Cart } from '../Models/Cart';
import { deleteCartItem, updateCartItem } from '../Utilities/UppdateCart';

const HandleCartItem = () => {
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    const getCart = async () => {
      const result = await LoadCart('/cart');
      setCart(result);
    };

    getCart();
  }, []);

  const handleIncreaseQuantity = async (id: number) => {
    const item = cart.find((product: Cart) => product.id === id);
    if (item) {
      const updatedItem = await updateCartItem(id, item.quantity + 1);
      setCart((prev) =>
        prev.map((product) => (product.id === id ? updatedItem : product))
      );
    }
  };

  const handleDecreaseQuantity = async (id: number) => {
    const item = cart.find((product) => product.id === id);
    if (item && item.quantity > 1) {
      const updatedItem = await updateCartItem(id, item.quantity - 1);
      setCart((prev) =>
        prev.map((product) => (product.id === id ? updatedItem : product))
      );
    }
  };

  const handleDelete = async (id: number) => {
    await deleteCartItem(id);
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return { cart, handleIncreaseQuantity, handleDecreaseQuantity, handleDelete };
};

export default HandleCartItem;

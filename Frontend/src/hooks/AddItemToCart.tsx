import { useEffect, useState } from 'react';
import { Cart } from '../Models/Cart';
import LoadCart from '../Utilities/LoadCart';
import { addProductToCart, updateCartItem } from '../Utilities/UppdateCart';
import { Products } from '../Models/Products';

const AddItemToCart = () => {
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    const getCart = async () => {
      const result = await LoadCart('/cart');
      setCart(result);
    };

    getCart();
  }, []);

  const updateCart = async (product: Products) => {
    const existingProduct = cart.find(
      (item: Products) => item.id === product.id
    );

    if (existingProduct) {
      const updatedItem = await updateCartItem(
        product.id,
        existingProduct.quantity + 1
      );
      setCart((prev) =>
        prev.map((item) => (item.id === product.id ? updatedItem : item))
      );
    } else {
      const newItemToCart = await addProductToCart(product);
      setCart((prev) => [...prev, newItemToCart]);
    }
  };
  return { cart, updateCart };
};

export default AddItemToCart;

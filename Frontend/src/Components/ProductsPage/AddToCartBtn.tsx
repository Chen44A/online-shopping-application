import { useState } from 'react';
import { Products } from '../../Models/Products';
import AddItemToCart from '../../hooks/AddItemToCart';

const AddToCartBtn = ({ products }: { products: Products }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { updateCart } = AddItemToCart();

  const handleClick = async () => {
    try {
      setIsClicked(true);
      await updateCart(products);
    } catch (error) {
      console.error('Failed to update cart:', error);
    }

    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  return (
    <>
      <button className='AddToCartBtn' onClick={() => handleClick()}>
        <i className={isClicked ? 'fa fa-check' : 'fa fa-shopping-cart'}></i>
      </button>
    </>
  );
};

export default AddToCartBtn;

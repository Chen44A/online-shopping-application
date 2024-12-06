import { Cart } from '../Models/Cart';
import Heading from '../Components/UI/Heading/Heading';
import CartSummary from '../Components/Cart/CartSummary';
import CartItem from '../Components/Cart/CartItem';
import HandleCartItem from '../hooks/HandleCartItem';

const CartPage = () => {
  const { cart, handleIncreaseQuantity, handleDecreaseQuantity, handleDelete } =
    HandleCartItem();

  const calculateTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <>
      <Heading title='Kassa' />
      <section className='cart'>
        {cart.length === 0 ? (
          <p className='empty-cart'>Det finns inga produkter i varukorgen.</p>
        ) : (
          <>
            <div className='cart-detail'>
              {cart.map((cartItem: Cart) => (
                <CartItem
                  key={cartItem.id}
                  item={cartItem}
                  DeleteItem={handleDelete}
                  increaseItem={handleIncreaseQuantity}
                  decreaseItem={handleDecreaseQuantity}
                />
              ))}
            </div>
            {/* 有括号立即执行 */}
            <CartSummary totalSumma={calculateTotalPrice()} />
          </>
        )}
      </section>
    </>
  );
};

export default CartPage;

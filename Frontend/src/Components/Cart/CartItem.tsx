import { Cart } from '../../Models/Cart';

type CartItemPorps = {
  item: Cart;
  DeleteItem: (id: number) => void;
  increaseItem: (id: number) => void;
  decreaseItem: (id: number) => void;
};

const CartItem = ({
  item,
  DeleteItem,
  increaseItem,
  decreaseItem,
}: CartItemPorps) => {
  const { id, brand, name, price, image, quantity } = item;
  const itemTotalPrice = price * quantity;

  return (
    <div className='cart-item'>
      <div className='cart-item-info'>
        <img src={image} className='cart-img' alt={name} />
        <div>
          <h3>{brand}</h3>
          <h2>{name}</h2>
          <p>
            {price} <span>kr</span>
          </p>
        </div>
      </div>
      <div className='quantity-control'>
        <button className='quantity-btn' onClick={() => decreaseItem(id)}>
          ➖
        </button>
        <p>{quantity} st</p>
        <button className='quantity-btn' onClick={() => increaseItem(id)}>
          ➕
        </button>
      </div>
      <div className='delete-container'>
        <p>{itemTotalPrice} kr</p>
        <button className='deleteBtn' onClick={() => DeleteItem(id)}>
          <i className='fa-solid fa-trash'></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;

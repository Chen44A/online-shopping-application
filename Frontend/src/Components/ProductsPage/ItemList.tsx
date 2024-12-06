import { NavLink } from 'react-router-dom';
import { Products } from '../../Models/Products';
import styles from './itemList.module.css';
import AddToCartBtn from './AddToCartBtn';

const ItemList = ({ products }: { products: Products }) => {
  return (
    <section className={styles.card}>
      <NavLink to={`/products/${products.id}`}>
        <img src={products.image} alt={products.name} />
      </NavLink>
      <div className={styles['card-body']}>
        <h6>{products.brand}</h6>
        <h5>{products.name}</h5>
        <p className={styles.description}>{products.description}</p>
        <div className={styles.smallContainer}>
          <small role='price' className={styles['text-muted']}>
            {products.price} kr
          </small>
          <AddToCartBtn products={products} />
        </div>
      </div>
    </section>
  );
};

export default ItemList;

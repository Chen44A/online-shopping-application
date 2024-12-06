import { Products } from '../../Models/Products';

const ProductInfo = ({ product }: { product: Products }) => {
  return (
    <div className='productDetail'>
      <section className='details'>
        <img src={product?.image} alt={product?.name} />
        <div>
          <h3>{product?.brand}</h3>
          <h2>{product?.name}</h2>
          <p>Description:{product?.description}</p>
          <div className='smallContainer'>
            <small>
              {product?.price} <span>kr</span>
            </small>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductInfo;

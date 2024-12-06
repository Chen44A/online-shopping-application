import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Products } from '../Models/Products';
import ProductInfo from '../Components/ProductPage/ProductInfo';
import FindProduct from '../Utilities/FindProduct';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProducts] = useState<Products>();

  useEffect(() => {
    const getProduct = async () => {
      const selectedProduct = await FindProduct(`/products/${id}`);
      setProducts(selectedProduct);
    };
    getProduct();
  }, [id]);

  return (
    <>
      <ProductInfo product={product!} />
    </>
  );
};

export default ProductPage;

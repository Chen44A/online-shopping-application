import { useEffect, useState } from 'react';
import GridList from '../Components/ProductsPage/GridList';
import Heading from '../Components/UI/Heading/Heading';
import { Products } from '../Models/Products';
import LoadProducts from '../Utilities/LoadProducts';
import AdBanner from '../Components/UI/AdBanner';

export const ProductsPage = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await LoadProducts('/products');
      // console.log(result);
      setProducts(result);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <AdBanner
        url={
          'https://plus.unsplash.com/premium_photo-1696879452233-3a7f91f7d3dc?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      />
      <Heading title='Our products' />
      <GridList products={products} />
    </>
  );
};

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
      <AdBanner url={'./src/assets/ad-banner-image.jpg'} />
      <Heading title='Our products' />
      <GridList products={products} />
    </>
  );
};

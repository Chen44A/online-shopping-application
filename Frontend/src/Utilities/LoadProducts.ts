import { Products } from '../Models/Products';

const LoadProducts = async (endpoint: string): Promise<Products[]> => {
  const response = await fetch(`http://localhost:5031${endpoint}`);
  const result = await response.json();
  return result;
};

export default LoadProducts;

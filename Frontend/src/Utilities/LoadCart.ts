import { Cart } from '../Models/Cart';

const LoadCart = async (endpoint: string): Promise<Cart[]> => {
  const response = await fetch(`http://localhost:5031/api${endpoint}`);
  const result = await response.json();
  return result.result;
};

export default LoadCart;

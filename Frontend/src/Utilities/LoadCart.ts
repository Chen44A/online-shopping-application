import { Cart } from '../Models/Cart';

const LoadCart = async (endpoint: string): Promise<Cart[]> => {
  const response = await fetch(`http://localhost:5031${endpoint}`);
  const result = await response.json();
  return result;
};

export default LoadCart;

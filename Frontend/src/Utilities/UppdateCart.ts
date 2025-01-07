export const updateCartItem = async (id: number, quantity: number) => {
  const response = await fetch(`http://localhost:5031/api/cart/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quantity }),
  });
  if (!response.ok) throw new Error('Failed to update product quantity');
  return response.json();
};

export const addProductToCart = async (product: {
  id: number;
  brand: string;
  name: string;
  price: number;
  image: string;
}) => {
  const response = await fetch(`http://localhost:5031/api/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...product, quantity: 1 }),
  });
  if (!response.ok) throw new Error('Failed to add product to cart');
  return response.json();
};

export const deleteCartItem = async (id: number) => {
  const response = await fetch(`http://localhost:5031/api/cart/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete cart item');
};

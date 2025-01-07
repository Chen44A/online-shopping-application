import { fetchData } from '../utilities/httpClient.mjs';

export const cartList = async (req, res) => {
  try {
    const result = await fetchData('cart');
    res.status(200).json({ success: true, result: result });
    return;
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const findCartItem = async (req, res) => {
  const param = req.params.id;
  try {
    const result = await fetchData(`cart/${param}`);
    res.status(200).json(result);
    return;
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const addCartItem = async (req, res) => {
  try {
    const body = req.body;
    const result = await fetchData('cart', 'POST', body);
    res.status(200).json(result);
    return;
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const updateCartItem = async (req, res) => {
  const param = req.params.id;
  try {
    const body = req.body;
    const result = await fetchData(`cart/${param}`, 'PATCH', body);
    res.status(200).json(result);
    return;
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const deleteCartItem = async (req, res) => {
  const param = req.params.id;
  try {
    const body = req.body;
    const result = await fetchData(`cart/${param}`, 'DELETE');
    res.status(204).send(); // No content
    return;
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

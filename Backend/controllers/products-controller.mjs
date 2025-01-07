import { fetchData } from '../utilities/httpClient.mjs';

export const productsList = async (req, res) => {
  try {
    const result = await fetchData('products');
    res.status(200).json({ success: true, result: result });
    return;
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const findProduct = async (req, res) => {
  const param = req.params.id;
  try {
    const result = await fetchData(`products/${param}`);
    res.status(200).json({ success: true, result: result });
    return;
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

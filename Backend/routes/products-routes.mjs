import express from 'express';
import {
  productsList,
  findProduct,
} from '../controllers/products-controller.mjs';

const router = express.Router();

router.route('/').get(productsList);
router.route('/:id').get(findProduct);

export default router;

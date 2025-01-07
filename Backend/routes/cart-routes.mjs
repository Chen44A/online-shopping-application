import express from 'express';
import {
  addCartItem,
  cartList,
  deleteCartItem,
  findCartItem,
  updateCartItem,
} from '../controllers/cart-controller.mjs';

const router = express.Router();

router.route('/').get(cartList).post(addCartItem);
router
  .route('/:id')
  .get(findCartItem)
  .patch(updateCartItem)
  .delete(deleteCartItem);

export default router;

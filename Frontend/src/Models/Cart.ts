import { Products } from './Products';

export interface Cart extends Products {
  id: number;
  quantity: number;
}

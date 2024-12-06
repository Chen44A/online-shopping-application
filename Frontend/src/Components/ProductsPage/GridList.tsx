import { Products } from '../../Models/Products';
import ItemList from './ItemList';

export default function GridList({ products }: { products: Products[] }) {
  return (
    <section className='grid'>
      {products.map((products: Products) => (
        <ItemList key={products.id} products={products} />
      ))}
    </section>
  );
}

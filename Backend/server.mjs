//Grymt!!
//Det här filen kan vara tomt eftersom JSON Server genererar REST API automatiskt!!!

//npx json-server products.jsons

import express from 'express';
import cors from 'cors';

import products from './routes/products-routes.mjs';
import cart from './routes/cart-routes.mjs';

const app = express();
// Middleware...
app.use(express.json());

app.use(cors());
app.use('/api/products', products);
app.use('/api/cart', cart);

const PORT = 5031;
app.listen(PORT, () =>
  console.log(`Server är startad och lyssnar på PORT ${PORT}`)
);

//npx json-server --watch products.json --port 3001

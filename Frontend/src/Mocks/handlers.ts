import { http, HttpResponse } from 'msw';

const products = [
  {
    id: '1',
    brand: 'Rituals',
    name: 'Classic Advent Calendar',
    price: 899,
    description:
      'Kom in i julkänslan med vår nya Amsterdam-inspirerade klassiska adventskalender...',
    image: 'http://localhost:3001/images/Rituals-Classic-Advent-Calendar.webp',
  },
  {
    id: '2',
    brand: 'Jo Malone London',
    name: 'Advent Calendar',
    price: 5025,
    description: 'Gör dig redo för julen med Jo Malone Londons julkalender...',
    image: 'http://localhost:3001/images/Jo-Malone-London-Advent-Calendar.webp',
  },
  {
    id: '3',
    brand: 'La Mer',
    name: 'The Wonder Express Advent Calendar',
    price: 6710,
    description: 'Upplev 12 dagar av magi med en adventskalender...',
    image:
      'http://localhost:3001/images/La-Mer-The-Wonder-Express-Advent-Calendar.webp',
  },
];

const cart = [
  {
    id: '1',
    brand: 'Rituals',
    name: 'Classic Advent Calendar',
    price: 899,
    description:
      'Kom in i julkänslan med vår nya Amsterdam-inspirerade klassiska adventskalender. Omfamna kraften i medvetenhet och ge dig ut på en resa som hyllar livets minsta detaljer – som ofta för med sig den största lyckan. Tänk på det som adventstraditionen – öppnandet av 24 luckor som för med sig en ny gåva varje dag. Vår kalender innehåller exklusiva överraskningar med bästsäljare för kropp, hem och skönhet, tillsammans med limited edition-produkter och fyra ljus för adventssöndagar.',
    image: 'http://localhost:3001/images/Rituals-Classic-Advent-Calendar.webp',
    quantity: 1,
  },
  {
    id: '2',
    brand: 'Jo Malone London',
    name: 'Advent Calendar',
    price: 5025,
    description:
      'Gör dig redo för julen med Jo Malone Londons julkalender. Bakom de dekorativa dörrarna döljer sig tjugofem doftande överraskningar. Julkalendern innehåller ett urval av både tidlösa och säsongsbetonade dofter, minidoftljus och bath & body-favoriter i mindre storlekar, samt ett Travel Candle och en festlig 30 ml doft.',
    image: 'http://localhost:3001/images/Jo-Malone-London-Advent-Calendar.webp',
    quantity: 3,
  },
];

export const handlers = [
  // Existing handler for getting all products
  http.get('http://localhost:5031/api/products', () => {
    return HttpResponse.json(products);
  }),

  // New handler for getting product by ID
  http.get('http://localhost:5031/api/products/:id', (req) => {
    const { id } = req.params;
    const product = products.find((p) => p.id === id);
    if (product) {
      return HttpResponse.json(product);
    } else {
      return HttpResponse.json({ error: 'Product not found' }, { status: 404 });
    }
  }),

  http.get('http://localhost:5031/api/cart', () => {
    return HttpResponse.json(cart);
  }),
];

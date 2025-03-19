## How to Run the project

### 1. Start the Frontend

```sh
cd Frontend
npm run dev
```

### 2. Start JSON Server (in a new terminal)

```sh
cd Backend
npx json-server --watch products.json --port 3001
```

### 3. Start the Backend (in a new terminal)

```sh
cd Backend
npm run dev
```

## Mock Server Endpoints:

#### products

http://localhost:5031/api/products

http://localhost:5031/api/products/:id

#### cart

http://localhost:5031/api/cart

http://localhost:5031/api/cart/:id

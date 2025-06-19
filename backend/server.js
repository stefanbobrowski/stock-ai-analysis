import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import getStockPrice from './routes/getStockPrice.js';

const app = express();
const PORT = process.env.PORT || 8080;

// For ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the frontend build
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.use(getStockPrice);

// Fallback route for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

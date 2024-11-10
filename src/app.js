const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.use(express.json());

// Rutas para el cliente
app.use('/data', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
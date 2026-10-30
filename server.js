const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// GET /
app.get('/', (request, response) => {
    response.status(200).send('Welcome to the Node.js and Express Server!');
});

// GET /about
app.get('/about', (request, response) => {
    response.status(200).json({
        name: 'R. Praisy',
        section: 'AIDE-1B'
    });
});

// GET /time
app.get('/time', (request, response) => {
    response.status(200).json({
        currentDateTime: new Date().toISOString()
    });
});

// Handle unknown routes
app.use((request, response) => {
    response.status(404).json({
        error: '404 - Route not found'
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});
// This file should set up the express server as shown in the lecture code
import express from 'express';
import exphbs from 'express-handlebars';
import tripsRouter from './routes/trips.js';

const app = express();

// Set Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Use the trips router
app.use('/trips', tripsRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


import express from 'express';
import { create, getAll, get, remove, update } from '../data/trips.js';

const router = express.Router();

// Route for creating a new trip
router.post('/', async (req, res) => {
    try {
        const {
            postTitle,
            userId,
            startLocation,
            endLocation,
            locationList,
            description,
            photoList,
            rating,
        } = req.body;

        // Call create function from data module
        const newTrip = await create(
            postTitle,
            userId,
            startLocation,
            endLocation,
            locationList,
            description,
            photoList,
            rating
        );

        res.status(201).json(newTrip);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route for getting all trips
router.get('/', async (req, res) => {
    try {
        // Call getAll function from data module
        const allTrips = await getAll();
        res.json(allTrips);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route for getting a trip by ID
router.get('/:tripId', async (req, res) => {
    try {
        const tripId = req.params.tripId;
        // Call get function from data module
        const trip = await get(tripId);
        if (!trip) {
            res.status(404).json({ error: 'Trip not found' });
        } else {
            res.json(trip);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route for updating a trip by ID
router.put('/:tripId', async (req, res) => {
    try {
        const tripId = req.params.tripId;
        const {
            postTitle,
            userId,
            startLocation,
            endLocation,
            locationList,
            description,
            photoList,
            rating,
        } = req.body;

        // Call update function from data module
        const updatedTrip = await update(
            tripId,
            postTitle,
            userId,
            startLocation,
            endLocation,
            locationList,
            description,
            photoList,
            rating
        );

        res.json(updatedTrip);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route for deleting a trip by ID
router.delete('/:tripId', async (req, res) => {
    try {
        const tripId = req.params.tripId;
        // Call remove function from data module
        const deletedTrip = await remove(tripId);
        res.json(deletedTrip);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;

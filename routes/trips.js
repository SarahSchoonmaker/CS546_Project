import express from 'express';
import { ObjectId } from 'mongodb';
import { trips } from '../config/mongoCollections';

const router = express.Router();

// Create a new trip
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
        const newTrip = await exportedMethods.create(
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

// Get all trips
router.get('/', async (req, res) => {
    try {
        // Call getAll function from data module
        const allTrips = await exportedMethods.getAll();
        res.json(allTrips);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a trip by ID
router.get('/:tripId', async (req, res) => {
    try {
        const tripId = req.params.tripId;
        // Call get function from data module
        const trip = await exportedMethods.get(tripId);
        if (!trip) {
            res.status(404).json({ error: 'Trip not found' });
        } else {
            res.json(trip);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a trip by ID
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
        const updatedTrip = await exportedMethods.update(
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

// Delete a trip by ID
router.delete('/:tripId', async (req, res) => {
    try {
        const tripId = req.params.tripId;
        // Call remove function from data module
        const deletedTrip = await exportedMethods.remove(tripId);
        res.json(deletedTrip);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


export default router;

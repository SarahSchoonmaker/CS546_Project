import { Router } from 'express';
import { tripsData } from '../data/index.js';

const router = Router();

router
  .route('/')
  .get(async (req, res) => {
    try {
      // Retrieve all trips
      const trips = await tripsData.getAll();
      res.json(trips);
    } catch (error) {
      // Handle error
      res.status(500).json({ error: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      // Extract trip data from request body
      const {
        postTitle,
        userid,
        datePosted,
        startLocation,
        endLocation,
        locationList,
        description,
        photoList,
        rating,
        comments
        // Include other trip properties here
      } = req.body;

      // Add new trip
      const trip = await tripsData.create(
        postTitle,
        userid,
        datePosted,
        startLocation,
        endLocation,
        locationList,
        description,
        photoList,
        rating,
        comments
        // Include other trip properties here
      );
      res.json(trip);
    } catch (error) {
      // Handle error
      res.status(400).json({ error: error.message });
    }
  });

router
  .route('/:tripId')
  .get(async (req, res) => {
    try {
      // Retrieve trip by id
      const trip = await tripsData.get(req.params.tripId);
      if (!trip) {
        res.status(404).json({ error: 'Trip not found' });
      } else {
        res.json(trip);
      }
    } catch (error) {
      // Handle error
      res.status(500).json({ error: error.message });
    }
  })
  .delete(async (req, res) => {
    try {
      // Delete trip by id
      const deletedTrip = await tripsData.remove(req.params.tripId);
      if (deletedTrip) {
        res.status(200).json({ _id: req.params.tripId, deleted: true });
      } else {
        res.status(404).json({ error: 'Trip not found' });
      }
    } catch (error) {
      // Handle error
      res.status(500).json({ error: error.message });
    }
  })
  .put(async (req, res) => {
    try {
      // Extract trip data from request body
      const {
        postTitle,
        userid,
        datePosted,
        startLocation,
        endLocation,
        locationList,
        description,
        photoList,
        rating,
        comments
        // Include other trip properties here
      } = req.body;

      // Update trip by id
      const updatedTrip = await tripsData.update(
        req.params.tripId,
        postTitle,
        userid,
        datePosted,
        startLocation,
        endLocation,
        locationList,
        description,
        photoList,
        rating,
        comments
        // Include other trip properties here
      );
      res.json(updatedTrip);
    } catch (error) {
      // Handle error
      res.status(400).json({ error: error.message });
    }
  });

// Export the router
export default router;
import { dbConnection } from './mongoConnection.js';

const getCollectionFn = (collection) => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await dbConnection();
      if (!db) throw new Error('Failed to connect to MongoDB');

      _col = await db.collection(collection);
      if (!_col) throw new Error(`Could not get collection ${collection}`);
    }

    return _col;
  };
};

export const trips = getCollectionFn('trips');
export const locations = getCollectionFn('locations');
export const users = getCollectionFn('users');
export const comments = getCollectionFn('comments');

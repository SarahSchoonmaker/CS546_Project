import { MongoClient } from 'mongodb';
import { mongoConfig } from './settings.js';

let _connection = undefined;
let _db = undefined;

const dbConnection = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(mongoConfig.serverUrl);

    if (!_connection) throw new Error('Failed to connect to MongoDB');
    _db = _connection.db(mongoConfig.database);

    if (!_db) throw new Error(`Could not get database ${mongoConfig.database}`);
  }

  return _db;
};

const closeConnection = async () => {
  await _connection.close();
};

export { dbConnection, closeConnection };
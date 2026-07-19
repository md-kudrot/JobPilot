import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('MONGODB_URI is not set in environment variables');
}

// Reuse the client across hot reloads in development to avoid exhausting
// database connections.
declare global {
  // eslint-disable-next-line no-var
  var _mongoClient: MongoClient | undefined;
}

const client = global._mongoClient ?? new MongoClient(uri);

if (process.env.NODE_ENV !== 'production') {
  global._mongoClient = client;
}

export { client };
export const db = client.db('jobpilot');

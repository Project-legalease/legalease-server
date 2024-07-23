require('dotenv').config();

import { MongoClient } from 'mongodb';

const uri: string | undefined = process.env.MONGODB_URI;

if (!uri) {
  console.log("The MONGODB_URI environment variable is not set.");
  throw new Error('The MONGODB_URI environment variable is not set.');
}

const client: MongoClient = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

export { connect };
// Import the mongoose module
const mongoose = require("mongoose");
let database;

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set('strictQuery', false);

// Define the database URL to connect to.
const mongoDB = process.env.ATLAS_URI;

//connecting to mongoose


async function mongooseConnect() {
  try {
    database =await mongoose.connect(mongoDB, {dbName: process.env.MONGO_DATABASE});
  } catch (error) {
    throw error;
  }
}
async function db() {
	try {
	  return database =await mongoose.connect(mongoDB, {dbName: "user"});
	} catch (error) {
	  throw error;
	}
  }

module.exports = {
    mongooseConnect,
	db
};

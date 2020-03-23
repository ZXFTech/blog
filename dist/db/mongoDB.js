"use strict";

const mongoClient = require('mongodb').MongoClient;

const mongoose = require('mongoose');

const MONGODB_CONFIG = {
  url: 'localhost:27017',
  dbname: 'test'
};

const ConnectDB = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(`mongodb://${MONGODB_CONFIG.url}/${MONGODB_CONFIG.dbname}`, async err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

module.exports = ConnectDB;
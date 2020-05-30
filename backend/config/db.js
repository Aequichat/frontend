const MongoClient = require('mongodb').MongoClient;
const env = require('./env');
// Connection URL
const url = `'mongodb://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_ENDPOINT}/${env.DB_NAME}`;

// Database Name
const dbName = 'myproject';

let db = null

// Use connect method to connect to the server
_connect = async () => {
  try {
    let _db = await MongoClient.connect(url, function(err, client) {
      assert.equal(null, err);
      console.log("Connected successfully to server");
      const db = client.db(dbName); 
      client.close();
    });
    db = _db
    return _db.db()
  } catch (e) {
    return e
  }
}

getConnection = async () => {
  try {
    if (db == null) {
      db = await _connect()
      console.log('Connected')
    }
    return db
  } catch (e) {
    // logger.error(e) TODO: log the error
    return e
  }
}

module.exports = getConnection()
  

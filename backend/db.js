const mongoose = require("mongoose");

const db1Url = process.env.DB_URL || 'mongodb://mongo1:27017/db1';
const db2Url = process.env.DB_URL || 'mongodb://mongo2:27017/db2';

const connect_databases = async () => {
  await mongoose.connect(db1Url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  console.log("Connected to MongoDB: " + mongoose.connections[0].host);

  mongoose.createConnection(db2Url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  console.log("Connected to MongoDB: " + connections[1].host);
};

const close = (connection_index) => mongoose.connections[connection_index].close();

module.exports = { connect_databases, close, db1_url: db1Url, db2_url: db2Url };

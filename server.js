const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Connect to the first MongoDB instance
mongoose.connect('mongodb://mongo1:27017/db1', { useNewUrlParser: true });

// Connect to the second MongoDB instance
mongoose.createConnection('mongodb://mongo2:27017/db2', { useNewUrlParser: true });

app.get('/', (req, res) => {
  res.send('Node.js backend connected to MongoDB instances.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

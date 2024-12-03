const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
// --------------------------DATABASE CONNECTION------------------------
// connectToMongo();
// ---------------------------------------------------------------------

// -------------------------EXPRESS SERVER------------------------------
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

 

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
});
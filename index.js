require('dotenv').config();
const express = require('express');
const app = express();
const { PORT } = process.env;

console.log(PORT);

app.listen(PORT, () => {
  console.log(`Server listeing on ${PORT}`);
});


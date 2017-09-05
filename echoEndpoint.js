'use strict';

// EXAMPLE 1: Use logging to explore request object
// ================================================

const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.get('/echo/:what', (req,res)=>{
  res.json({
    hostname: req.hostname,
    query: JSON.stringify(req.query),
    params: req.params.what});
})

app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));

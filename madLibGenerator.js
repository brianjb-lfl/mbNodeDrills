'use strict';

const express = require('express');
const app = express();


function doMadLib(q) {
  
  return `There's a ${q.adjective1} new ${q.name} in ${q.place} and 
  everyone's talking. Stunningly ${q.adjective2} and ${q.adverb} ${q.adjective3}, 
  all the cool kids know it. However, ${q.name} has a secret - ${q.name}'s 
  a vile vampire. Will it end with a bite, or with a stake through the ${q.noun}?`;

}


app.get('/', (req, res) => {

  let statCode = 200;

  const expectedKeys = ['adjective1', 'name', 'place', 'adjective2', 'adverb', 'adjective3', 'noun'];
  for (let i = 0; i < expectedKeys.length; i++){
    if(!Object.keys(req.query).includes(expectedKeys[i])){
      statCode = 406;
      res.status(statCode).send(expectedKeys[i] + ' is missing');
      return;
    }
  }

  res.status(statCode).send(doMadLib(req.query));

});

app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
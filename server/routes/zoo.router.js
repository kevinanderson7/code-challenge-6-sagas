const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
  // YOUR CODE HERE
  const queryString = `SELECT species_name, class_name FROM "species"
  JOIN "class" ON "class".id = "species".class_id`;

  pool
    .query(queryString)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  let newAnimal = req.body;
  console.log(`Adding animal`, newAnimal);

  let queryText = `INSERT INTO "species" ("species_name")
                     VALUES ($1);
                     INSERT INTO "class" ("class_name")
                     VALUES ($2);`;
  pool
    .query(queryText, [newAnimal.speciesInput, newAnimal.classInput])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error adding animal to database`, error);
      res.sendStatus(500);
    });
});

module.exports = router;

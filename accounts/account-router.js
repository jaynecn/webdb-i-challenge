const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
  db('accounts')
    .then(result => {
      console.log(result);
      res.json({ message: 'CONTACT!'})
    })
})

module.exports = router;
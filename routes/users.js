const express = require('express');

const router = express.Router();

//@router post
router.post('/', (req, res) => {
  res.send('Register a user');
});

//@ router get
router.get('/', (req, res) => {
  res.send('Get all users');
});

//@route put
router.put('/:id', (req, res) => {
  res.send('Update a user');
});

//@route delete
router.delete('/:id', (req, res) => {
  res.send('Delete a user');
});

module.exports = router;

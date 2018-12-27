const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Items');

// @route GET api/items
// @desc Get all items
// @access Public
router.get('/',(req,res)=>{
    Item.find()
        .sort({date: -1})
        .then(item => res.json(item))
});

module.exports = router;

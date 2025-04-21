const express = require("express");
const router = express.Router();
const reservering_route = require('./api/reservering');

// routes
router.get('/', (req, res) => {
    res.send("api working!");
});

router.use('/reservering', reservering_route);

module.exports = router
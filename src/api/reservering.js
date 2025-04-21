const express = require("express");
const router = express.Router()
const reserveringModel = require("../models/reservering");

// routes
router.route('/')
    .post((req, res) => {
        console.log(req.body);

        reserveringModel.create({Email: req.body.email, Roomname: req.body.room, Arrival: req.body.checkin, Departure: req.body.checkout})

        res.redirect("/reserved.html")
    });

module.exports = router
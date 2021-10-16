const router = require("express").Router();
//const date = require('date-and-time');
let Cafe = require("../models/checkIns");

router.route("/add").post((req,res) => {
    const nic = req.body.nic;
    const telnumber = Number(req.body.telnumber);
    

    const newVisitor = new Cafe({
        nic,
        telnumber
        
    })

    newVisitor.save().then(() => {
        res.json("Visitor added")
    }).catch((err) => {
        console.log(err)
    })

})

router.route("/").get((req,res) => {
    Cafe.find().then((visitors) => {
        res.json(visitors)
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router;


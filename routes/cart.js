//expoeres withe express
var express = require("express");
var router = express.Router();
var cart = require("../models/cart");
var products = require("../models/product");
router.post("/create", function(req, res, next) {

    var cid = cart.createCart()
    res.send({_cid:cid});

})

router.get("/get/:id", function(req, res, next) {

    if (req.params.id && cart.carts[req.params.id] != null) {
        res.send(cart.carts[req.params.id])
    } else {
        res.send("No Cart");
    }


})


router.post("/addToCart", (req, res, next) => {

    if (req.body.cid && cart.carts[req.body.cid] != null) {
        if (req.body.pid) {
            var response = products.filter((item) => {
                return item.productId == req.body.pid
            })
            cart.carts[req.body.cid].products.push(response[0]);
            res.send("Item Added")
        } else {
            res.send("No Product")
        }
    } else {
        res.send("No Cart")
    }

})






module.exports = router;
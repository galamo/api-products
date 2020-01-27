//expoeres withe express
var express = require("express");
var router = express.Router();
var products = require("./../models/Product");
router.get("/", function(req, res, next) {
    res.send(products);

})

router.get("/getProduct/:id", (req, res, next) => {
    var response = products.filter((item) => {
        return item.productId == req.params.id
    })
    res.send(response[0]);
})


router.post("/product", (req, res, next) => {
    let product;

    if (req.body) {
        product = req.body;
        product.productId = Math.floor(Math.random() * 1000) + 1
        products.push(product);
        res.send(product);
    } else {
        res.send("Error")
    }



})

//async

router.delete("/product/:id", (req, res, next) => {
    let product;

    for (var index = 0; index < products.length; index++) {
        if (products[index].productId == req.params.id) {
            products.splice(index, 1)
            res.send({ _index: index, result: true });
            return;
        }
    }
    res.send({ _index: -1, result: false });
})


module.exports = router;
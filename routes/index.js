var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shop/index', { title: 'Shopping Cart' });
});

router.get('/add-to-cart:id', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session : {});

  Product.findById(productId, function (err, product) {
      if (err){
        return res.redirect('/');
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/');
  });
});

module.exports = router;

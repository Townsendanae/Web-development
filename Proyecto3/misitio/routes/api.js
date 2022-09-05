var express = require('express');
var router = express.Router();
const axios = require('axios');


// const Sequelize = require('sequelize');
// const Producto = require('../models').producto;


router.get('/', function (req, res, next) {
    axios.get(`https://proyectocosmos-ef348-default-rtdb.firebaseio.com/collection.json`)
    .then(resAxios => {
      res.json(resAxios.data)
    })
    .catch(err => console.log(err))
    
})

router.get('/planetas', function (req, res, next) {

  let inputSelect = parseInt(req.query.inputSelect);
  
  console.log("oa")
  
 
  
})


// router.get('/productos/:id', function (req, res, next) {

//   let id = parseInt(req.params.id);
  
//   Producto.findOne({ where: {id:id} })
//   .then(productos => {  
//     res.json( productos );  
// })  

// })

module.exports = router;

var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Planeta = require('../models').planeta;  
const Galaxia = require('../models').galaxia;  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mostrarPlanetas', (req, res) => {
  Planeta.findAll(
    {
      include:[{model:Galaxia}],
      attributes: { exclude: ["updatedAt","createdAt"] }
    }
  )
  .then((data) => {
    res.json({datos:data})
  })
  .catch((error) => {
    res.json({error:error})
  }) 
});


router.get('/mostrarGalaxias', (req, res) => {
  Galaxia.findAll({
    attributes: { exclude: ["updatedAt","createdAt"] }
  })
  .then((data) => {
    res.json({datos:data})
  })
  .catch((error) => {
    res.json({error:error})
  }) 
});




module.exports = router;

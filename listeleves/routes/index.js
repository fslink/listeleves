var express = require('express');
var router = express.Router();
var liste = require('../data/liste.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Liste des élèves', listeE: liste });
});

router.get('/profil', function(req, res, next){
	var eleve = liste[req.query.id];
	res.render('profil', { Eleve: eleve , Title: 'Profil élève'});
});

module.exports = router;

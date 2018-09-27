var mongoose = require('mongoose')

var listeSchema = new mongoose.Schema({
	nom: String,
	prenom: String
})

module.exports = mongoose.model('Liste', listeSchema)
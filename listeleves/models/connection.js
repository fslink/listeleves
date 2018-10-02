var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ifa2018', {useNewUrlParser : true})

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('la database envoie le pâté')
});

module.exports = mongoose
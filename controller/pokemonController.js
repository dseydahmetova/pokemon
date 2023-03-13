const pokemon = require('../models/pokemon')

module.exports.index = (req, res) => {
    res.render('Index', {pokemon})
}

module.exports.show = (req, res) => {
    res.render('Show', {pokemon: pokemon[req.params.index]})
}
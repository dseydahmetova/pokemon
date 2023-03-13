const express = require('express')

const router = express.Router()

const pokemonController = require('../controller/pokemonController')


router.get('/', pokemonController.index)
router.get('/:index', pokemonController.show)

module.exports = router
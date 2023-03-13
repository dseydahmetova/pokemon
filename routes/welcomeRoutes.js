const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send(`<div><h1>Welcome to the Pokemon App!<h1><a href="/pokemon">Continue</a></div>`)
})


module.exports = router
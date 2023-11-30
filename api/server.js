const express = require("express")

const server = express()

server.use().json()

server.use('*', (req, res, next)=>{
    next({status: 404, message: 'tragedy struck'})
})

server.use((err, req, res, next)=>{
    res.status(err.status || 500).json({
        message: err.message})
//33:51 is stopping point

})

module.exports = server

const converts = require('../model/converTime_model')
const { request, response } = require('express')

const convert = (request, response) => {
    converts.convertTime(request, response, function(error, result){

    })
}

module.exports = {
    convert
}
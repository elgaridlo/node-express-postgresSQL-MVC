const discount = require('../model/discount_model')
const { request, response } = require('express')

const index = (request, response) => {
    discount.getUsers(request,response, function(err, rows){
        if(!rows) {

        }
        response.render("/index", {data: rows})
    })
}

const getId = (request, response) => {
    discount.getUserById(request,response, function(err, rows){
       console.log('rowws === ', rows.rows)
        if(!rows) {

        }
        // response.render("", {data: rows})
    })
}

const create = (request, response) => {
    console.log('response controller = ', response)
    discount.createUser(request,response, function(err, rows){
       console.log('rowws controller === ', rows.rows)
        if(!rows) {

        }
        // response.render("", {data: rows})
    })
}

module.exports = {
    index,
    getId,
    create
}
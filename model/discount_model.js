const pool = require('../configureDB')

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM DISCOUNT WHERE user_id = $1', [id], (error, result)=> {
        let hasil = [];
        let status = false;
        let total ;
        if(error) {
            throw error
        }
        if (result.rows) {
            hasil = bussinessLogic(result.rows)
            total = calculation(hasil)
            status = true
        }
        response.status(200).json({ result: hasil, status: status, totalSub: total })
    })
}

const getUsers = (request, response) => {
    pool.query('SELECT * FROM DISCOUNT ORDER BY id ASC', (err, result) => {
        if (err) {
            throw err
        }
        response.status(200).json(result.rows)
    })
}

const createUser = (request, response) => {
    const {name, discount_code, price, user_id} = request.body
    pool.query('INSERT INTO DISCOUNT (name , discount_code, price, user_id) VALUES ($1, $2, $3, $4)', [name, discount_code, price, user_id], 
    (err, result)=> {
        if (err) {
            response.status(500).send({success: false})
        }
        response.status(201).send({success: true});
    })
}

// take the value from db by user id and then give response to the asker
let bussinessLogic = function (data) {
    let nota = {
        name: '',
        discount_code: '',
        price: '',
        type: '',
        refundable: '',
        amount: '',
        discount: ''
    }
    let notaArray = []
    data.forEach(element => {
        if (element.discount_code === '1') {
            nota.discount = element.price * (10/100)
            nota.amount = element.price - nota.discount
            nota.type = 'Fashion'
            nota.refundable = 'No' // tergantung kesepakatan aja sih biasanya boolean
        }
        if (element.discount_code === '2') {
            nota.discount = (element.price * (2/100)) + 10
            nota.amount = element.price - nota.discount
            nota.type = 'Furniture'
            nota.refundable = 'No'
        }
        if (element.discount_code === '3') {
            if ( element.price < 100 ) {
                nota.discount = '0'
            } else {
                nota.discount = (element.price - 100) * (1/100) 
            }
            nota.amount = element.price - nota.discount
            nota.type = 'Jewelry'
            nota.refundable = 'No'
        }
        notaArray.push(
            {
                name: element.name, 
                price: Number(element.price), 
                discount_code: element.discount_code, 
                discount: nota.discount,
                amount: nota.amount,
                type: nota.type,
                refundable: nota.refundable
            }
        )
    });
    return notaArray
}
// Calculate all the sub total 
let calculation = function (data) {
    let resultCalc = {
        priceSub: 0,
        discSub: 0,
        grandTotal: 0
    }
    data.forEach( element => {
        resultCalc.priceSub += element.price
        resultCalc.discSub += element.discount
        resultCalc.grandTotal += element.amount
    })
    return resultCalc
}

module.exports = {
    getUsers,
    getUserById,
    createUser
}
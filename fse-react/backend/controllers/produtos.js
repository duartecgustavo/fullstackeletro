const Produto = require('../models/produtos');

exports.findAll = (req, res) =>{
    Produto.getAll((error, results) => {
        if(error){
            return error;
        }res.send(results)
    })
}

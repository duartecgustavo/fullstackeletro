const Comentario = require('../models/comentarios');

exports.findAll = (req, res) =>{

    Comentario.getAll((error, results) => {
        if(error){
            return error;
        }res.send(results)
    })
}

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            mensagem: "Conteúdo não pode ser nulo;"
        })
    }
    const comentario = new Comentario({
        nome: req.body.nome,   
        msg: req.body.msg
    })

    Comentario.create(comentario, (error, result) =>{
        if(error){
            res.send(result)
        }res.send(result)
    })
}

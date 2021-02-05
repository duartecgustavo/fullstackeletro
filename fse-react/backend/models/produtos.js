const Conn = require ('../config/db');

const Produto = function(produto){
    return this;
}

Produto.getAll = result => {
    const sql =  "SELECT * FROM produtos JOIN categorias ON categorias.id_categoria = produtos.id_categoria";
    Conn.query(sql, (error, res) => {
        if (error){
            return error
        } console.log("Produtos: ", res);
        result(null,res);
    })
}

module.exports = Produto;

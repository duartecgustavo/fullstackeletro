module.exports = server => {
    const produto = require('../controllers/produtos');
    server.get('/produtos', produto.findAll);
}


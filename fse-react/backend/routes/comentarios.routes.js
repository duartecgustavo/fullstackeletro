module.exports = server => {
    const comentario = require('../controllers/comentarios');
    server.get('/comentarios', comentario.findAll);
    server.post('/comentarios', comentario.create);
}


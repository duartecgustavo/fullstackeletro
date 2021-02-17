module.exports = server => {
    Comments = require('../models/comentarios');

    server.post('/comentarios', async (req, res) => {
        const { nome, msg } = req.body;
        const result = await Comments.create({ nome, msg });
        res.send(result)
    })

    server.get('/comentarios', async (req, res) => {
        const result = await Comments.find();
        res.send(result)
    })
}


// module.exports = server => {
//     const comentario = require('../controllers/comentarios');
//     server.get('/comentarios', comentario.findAll);
//     server.post('/comentarios', comentario.create);
// }


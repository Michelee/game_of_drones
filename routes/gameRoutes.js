module.exports = app => {
    app.get('/api/newgame', (req, res) => {
        res.send({ resp: 'Hola mundo!'});
    });
}

module.exports = app => {
    app.post('/api/newgame', (req, res) => {
        res.send({ resp: 'Hola mundo!'});
    });
}

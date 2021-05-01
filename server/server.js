require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// Get se usa para 
app.get('/usuario', (req, res) => {
    res.json('GET usuario');
});

// POST se usa para crear nuevos registros
app.post('/usuario', (req, res) => {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });
        //res.json('POST usuario');
    }
});

// PUT se usa para actualizar registros
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    //res.json('PUT usuario');
    res.json({
        id
    });
});

// DELETE se usa para borrar registros
app.delete('/usuario', (req, res) => {
    res.json('DELETE usuario');
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port: 3000`);
});
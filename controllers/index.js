const { getDb } = require('../db/database')

module.exports = {

    index: (req, res) => {
        
        const platos = getDb;        

        res.render('index', { platos: platos })
    },

    detalle: (req, res) => {
        const { id } = req.params;
        const db = getDb;

        const plato = db.find(plato => plato.id == id);
        const { desc = "Plato tipico", name, price, img } = plato;

        res.render('detalleMenu', { plato: {id, desc, name, price, img} })
    }

}
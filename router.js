const express = require('express');
const router = express.Router();

const pool = require('./database/db');

router.get('/', (req, res) =>{
    pool.query('SELECT *FROM usuario', (error, results) => {
        if(error) {
            throw error;
        }else{
            res.render('index', {results: results});
        }
    });
})

router.get('/list', (req, res) => {
    pool.query('SELECT v.id as id, v.nombre as n, v.descripcion as des , v.direccion  as dir, v.habitaciones as h, v.banios as bn, v.mt2 as m ,t.descripcion as dd FROM vivienda v INNER JOIN tvivienda t ON v.id_vivenda = t.id', (error, results) => {  
            if(error) {
                throw error;
            }else{
                res.render('list-vivienda', {results: results});
            }
        
    });
})

router.get('/contrato', (req, res) => {
    pool.query('SELECT C.id as id, U.nombre as nom, V.nombre as viv, C.finicio as fdate, C.ffinal as fin, C.monto as monto FROM contrato C INNER JOIN usuario U ON C.id_cliente = U.id INNER JOIN vivienda V ON C.id_vivienda = V.id', (error, results) => {
        if(error) {
            throw error;
        }else{
            res.render('contrato', {results: results});
        }
    });
})



router.get('/create', (req, res) =>{
    res.render('create');
})

router.get('/create-vivienda', (req, res) =>{
    res.render('vivienda');
})
router.get('/pago', (req, res) =>{
    res.render('pago');
})


const crud = require('./controllers/crud'); 
router.post('/save', crud.save);
router.post('/saveVivienda', crud.saveVivienda);

module.exports = router;
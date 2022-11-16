const conexion = require('../database/db');

exports.save =  (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const telefono = req.body.telefono;
    const pwd = req.body.pwd;

    conexion.query(`INSERT INTO usuario (nombre, email, telefono, pwd) VALUES ($1, $2, $3, $4)`,[nombre,email,telefono,pwd], (error, results) => {
        if(error){
            console.log(error);
        }else{
            res.redirect('/'); 
        }  
    });
}

//CONSULTA - AGREGAR VIVIENDA
exports.saveVivienda =  (req, res) => {
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const direccion = req.body.direccion;
    const habitaciones = req.body.habitaciones;
    const banios = req.body.banios;
    const mt2 = req.body.mt2;
    const id_vivienda = req.body.id_vivienda;
    console.log(nombre,descripcion,direccion,habitaciones, banios, mt2, id_vivienda)
    conexion.query(`INSERT INTO vivienda (nombre, descripcion, direccion, habitaciones, banios, mt2, id_vivenda) VALUES ($1, $2, $3, $4, $5, $6, $7)`,[nombre,descripcion,direccion,habitaciones, banios, mt2, id_vivienda], (error, results) => {
        if(error){
            console.log(error);
        }else{
            res.redirect('/'); 
        }  
    });
}

exports.saveContrato = (req, res) => {
    const banios = req.body.banios;
    const mt2 = req.body.mt2;
    const id_vivienda = req.body.id_vivienda;
    console.log(nombre,descripcion,direccion,habitaciones, banios, mt2, id_vivienda)
    conexion.query(`INSERT INTO vivienda (nombre, descripcion, direccion, habitaciones, banios, mt2, id_vivenda) VALUES ($1, $2, $3, $4, $5, $6, $7)`,[nombre,descripcion,direccion,habitaciones, banios, mt2, id_vivienda], (error, results) => {
        if(error){
            console.log(error);
        }else{
            res.redirect('/'); 
        }  
    });
}

exports.pdf = (req, res) =>{
    conexion.query('SELECT v.id as id, v.nombre as n, v.descripcion as des , v.direccion  as dir, v.habitaciones as h, v.banios as bn, v.mt2 as m ,t.descripcion as dd FROM vivienda v INNER JOIN tvivienda t ON v.id_vivenda = t.id', (error, results) => {  
        if(error) {
            throw error;
        }else{
            res.render('./PDF/pdfVivienda', {res: res});
        }
    });
}
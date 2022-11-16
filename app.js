const express = require('express');
const app = express();
const pdf = require("html-pdf");
const ejs = require("ejs");
const path = require("path");

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false}));
app.use(express(JSON));

app.use('/', require('./router'));




app.get("/pdf-generar",(req,res) => {
    
    ejs.renderFile(path.join(__dirname, "./PDF/pdfVivienda"), (err, results) => {
        
        if (err) {
              res.send(err);
        } else {
            
            pdf.create(results).toFile("report.pdf", function (err, results) {
                if (err) {
                    res.send(err);
                } else {
                    console.log("estoy en la funcion")
                    res.send("hola");
                }
            });
        }
    })
});



app.listen(4000,() => {
    console.log('Server corriendo en https');
})
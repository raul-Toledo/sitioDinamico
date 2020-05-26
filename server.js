//Importamos el "paquete" express
const express = require('express');
//Creamos un Objeto de tipo express
const app = express();
//Importar HBS
const hbs = require('hbs');

//Defino el motor"plantilla" con el que trabajare
app.set('view engine', 'hbs');

//Definimos donde estan los parciales
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

//Definimos la ruta.
app.get('/', (req,res)=>{
    res.render('index',{
        nombre : 'Raúl Toledo',
        year : new Date().getFullYear(),
        titulo : "Hola HBS"
    });
});

app.get('/informe', (req,res)=>{
    res.render('informe',{
        nombre : 'Raúl Toledo',
        year : new Date().getFullYear(),
        titulo : "Informe"
    });
});

app.get('/contacto', (req,res)=>{
    res.render('contacto',{
        nombre : 'Raúl Toledo',
        year : new Date().getFullYear(),
        titulo : "Contacto"
    });
});

//Arrancamos el servidor web en el puerto 3000
app.listen(3000,()=>{
    //Escribimos en la terminal
    console.log('Escuchando en el puerto 3000');
});
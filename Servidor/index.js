const express = require('express');
const app = express()

// === IMPORTACIÓN DE RUTAS ===
// Aquí se importan las rutas de la carpeta ./routes 

const authRouter = require('./Rutas/authRoutes');
const Citas_Rutas = require('./Rutas/Citas_Rutas')
//<<<<<<< HEAD
//=======
////<<<<<<< HEAD
const InicioSesion_Rutas = require ('./Rutas/InicioSesion_Rutas')
//=======
//<<<<<<< HEAD
//>>>>>>> b6b6880044ba17f52e400d088f73e7eb69cbb86a

const Usuario_Rutas = require('./Rutas/Usuario_Rutas')
const Inventario_Rutas = require('./Rutas/Inventario_Rutas')
const VentasAutolavado_Rutas = require('./Rutas/VentasAutolavado_Rutas')
//<<<<<<< HEAD
const VentasTienda_Rutas = require('./Rutas/VentasTienda_Rutas')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
  next();
})
//=======
//>>>>>>> 6e71fba5470ed99a2fcc9518f0a1e7be66841ef5
//>>>>>>> f34ef78cba35cb5d8a12a65e6c625cffadb61064
//>>>>>>> b6b6880044ba17f52e400d088f73e7eb69cbb86a
// === FIN IMPORTACIÓN DE RUTAS ===


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// === RUTAS ===

// Aquí se definen las rutas del servidor

app.use(authRouter)
app.use(Citas_Rutas)
/*<<<<<<< HEAD
=======
<<<<<<< HEAD*/
app.use(InicioSesion_Rutas)
/*=======
<<<<<<< HEAD
>>>>>>> b6b6880044ba17f52e400d088f73e7eb69cbb86a*/

app.use(Usuario_Rutas)
app.use(Inventario_Rutas)
app.use(VentasAutolavado_Rutas)
//<<<<<<< HEAD
app.use(VentasTienda_Rutas)
/*=======
>>>>>>> 6e71fba5470ed99a2fcc9518f0a1e7be66841ef5
>>>>>>> f34ef78cba35cb5d8a12a65e6c625cffadb61064
>>>>>>> b6b6880044ba17f52e400d088f73e7eb69cbb86a*/
// Otras rutas...

// === FIN DE RUTAS ===
const mainRutas = require('./Rutas/lajoyaMain.routes');
app.use('/ajax', mainRutas);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error del servidor');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
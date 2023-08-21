const connection = require("./conexion");

class InicioSesion_Modelo{

    constructor(id_usuario,nombre,apellido,usuario,psw,id_rol){
        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.psw = psw;
        this.id_rol = id_rol;

        //Más atributos aquí...
    }

    /*agregar_usuario(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `INSERT INTO usuario(nombre,apellido,usuario,psw,id_rol) 
            VALUES (${this.nombre}",'${this.apellido}','${this.usuario}','${this.psw}',
            ${parseInt(this.id_rol)})`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }*/

    //Más funciones aquí...
    iniciar_sesion(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `SELECT * FROM usuarios WHERE usuario = '${this.usuario}' 
            AND psw = '${this.psw}'`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }

}


module.exports = InicioSesion_Modelo;
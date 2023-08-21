const connection = require("./conexion");

class Usuario_Modelo{

    constructor(id_usuario,nombre,apellido,usuario,psw,id_rol){
        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.psw = psw;
        this.id_rol = id_rol;

        //Más atributos aquí...
    }

    agregar_usuario(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `INSERT INTO usuarios(nombre,apellido,usuario,psw,id_rol) 
            VALUES ('${this.nombre}','${this.apellido}','${this.usuario}','${this.psw}',${parseInt(this.id_rol)})`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }
    consultar_usuario(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `SELECT * FROM usuarios WHERE id_usuario = ${parseInt(this.id_usuario)}`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }

    modificar_usuario(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `UPDATE usuarios SET nombre = "${this.nombre}", 
            apellido = "${this.apellido}", usuario = "${this.usuario}", psw = "${this.psw}" WHERE id_usuario = ${parseInt(this.id_usuario)};`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }



    //Más funciones aquí...(ESTOS SON DE EXPERIMENTO)------------------------------------------
    eliminar_usuario(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `DELETE FROM usuarios WHERE id_usuario = ${parseInt(this.id_usuario)};`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    //Más funciones aquí...

}
}


module.exports = Usuario_Modelo;
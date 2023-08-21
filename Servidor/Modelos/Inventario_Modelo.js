const connection = require("./conexion");

class Inventario_Modelo{

    constructor(id_inventario, codigo, nombre, descripcion, cantidad, entrada, salida){
        this.id_inventario = id_inventario;
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.entrada = entrada;
        this.salida = salida;

        //Más atributos aquí...
    }

    agregar_producto(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `INSERT INTO inventario(codigo, nombre, descripcion, cantidad, entrada, salida)
            VALUES ("${(this.codigo)}", "${(this.nombre)}", "${(this.descripcion)}", ${parseInt(this.cantidad)}, ${parseInt(this.entrada)}, ${parseInt(this.salida)})`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }

    consultar_producto(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `SELECT * FROM inventario WHERE id_inventario = ${parseInt(this.id_inventario)}`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }

    consultar_productos(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `SELECT * FROM inventario`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }

    modificar_producto(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `UPDATE inventario SET nombre = "${this.nombre}", 
            descripcion = "${this.descripcion}", cantidad = ${parseInt(this.cantidad)}, entrada = ${parseInt(this.entrada)},
             salida = ${parseInt(this.salida)} WHERE id_inventario = ${parseInt(this.id_inventario)};`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }

    eliminar_producto(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `DELETE FROM inventario WHERE id_inventario = ${parseInt(this.id_inventario)};`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })  
        
        


        

    }



}


module.exports = Inventario_Modelo;
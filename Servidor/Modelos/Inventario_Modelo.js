const connection = require("./conexion");

class Inventario_Modelo{

    constructor(id_inventario, codigo, nombre, descripcion, cantidad, precio) {
        this.id_inventario = id_inventario;
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio; 
    }

    agregar_producto() {
        return new Promise((resolve, reject) => {
            // Verificar que los valores sean números válidos antes de la conversión
            console.log("Valores antes de la validación:", this.cantidad,  this.precio);

            if (
                isNaN(parseInt(this.cantidad)) ||
                isNaN(parseFloat(this.precio))
            ) {
                return reject(new Error("Valores numéricos inválidos"));
            }
    
            let SentenciaSQL = `INSERT INTO inventario(codigo, nombre, descripcion, cantidad, precio)
                VALUES (?, ?, ?, ?, ?)`;
    
            let values = [
                this.codigo,
                this.nombre,
                this.descripcion,
                parseInt(this.cantidad),
                parseFloat(this.precio)
            ];
    
            connection.query(SentenciaSQL, values, (err, rows) => {
                if (err || rows.length === 0) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
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
            descripcion = "${this.descripcion}", cantidad = ${parseInt(this.cantidad)}, precio=${parseFloat(this.precio)} WHERE id_inventario = ${parseInt(this.id_inventario)};`
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
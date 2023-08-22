const connection = require("./conexion");

class preciosAutos_Modelo{

    constructor(idAuto, tipoAuto, precio) {
        this.idAuto = idAuto;
        this.tipoAuto = tipoAuto; 
        this.precio = precio; 
    }

    agregar_precio() {
        return new Promise((resolve, reject) => {
            // Verificar que los valores sean números válidos antes de la conversión
            console.log("Valores antes de la validación:", this.tipoAuto,this.precio);

            if (
                isNaN(parseFloat(this.precio))
            ) {
                return reject(new Error("Valores numéricos inválidos"));
            }
    
            let SentenciaSQL = `INSERT INTO precio_autos(tipoAuto, precio)
                VALUES (?, ?)`;
    
            let values = [
                this.tipoAuto,
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
    

    consultar_precio(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `SELECT * FROM precio_autos WHERE idAuto = ${parseInt(this.idAuto)}`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }

    consultar_precios(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `SELECT * FROM precio_autos`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }

    modificar_precios(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `UPDATE precio_autos SET tipoAuto = "${this.tipoAuto}", 
            precio=${parseFloat(this.precio)} WHERE idAuto = ${parseInt(this.idAuto)};`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }

    eliminar_precios(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `DELETE FROM precio_autos WHERE idAuto = ${parseInt(this.idAuto)};`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })     

    }



}


module.exports = preciosAutos_Modelo;
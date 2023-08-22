const connection = require("./conexion");

class VentasAutolavado_Modelo{

    constructor(id_ventasAutolavado, id_usuario, fecha, tipoVehiculo, costo){
        this.id_ventasAutolavado = id_ventasAutolavado;
        this.id_usuario = id_usuario;
        this.fecha = fecha;
        this.tipoVehiculo = tipoVehiculo;
        this.costo = costo;

        //Más atributos aquí...
    }

    agregar_ventaAutolavado(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `INSERT INTO ventasautolavado(id_usuario, fecha, tipoVehiculo, costo)
            VALUES (${parseInt(this.id_usuario)}, "${this.fecha}", "${this.tipoVehiculo}",  ${parseFloat(this.costo)})`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }

    consultar_ventaAutolavado(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `SELECT * FROM ventasautolavado WHERE id_ventasAutolavado = ${parseInt(this.id_ventasAutolavado)}`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }

    consultar_ventasAutolavados() {
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `SELECT * FROM ventasautolavado`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length === 0) {
                    return reject(err);
                }
    
                // Formatear las fechas antes de resolver la promesa
                const formattedRows = rows.map(row => {
                    const fecha = new Date(row.fecha);
                    const formattedDate = fecha.toISOString().split('T')[0];
                    return {
                        ...row,
                        fecha: formattedDate
                    };
                });
    
                return resolve(formattedRows);
            });
        });
    }
    

    modificar_ventaAutolavado(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `UPDATE ventasautolavado SET tipoVehiculo = "${this.tipoVehiculo}", 
            fecha = "${this.fecha}", costo= ${parseFloat(this.costo)} WHERE id_ventasAutolavado = ${parseInt(this.id_ventasAutolavado)};`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }

    eliminar_ventaAutolavado(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `DELETE FROM ventasautolavado WHERE id_ventasAutolavado = ${parseInt(this.id_ventasAutolavado)};`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })  
        
        


        

    }



}


module.exports = VentasAutolavado_Modelo;
const connection = require("./conexion");

class VentasTienda_Modelo{

    constructor(id_ventaTienda,id_usuario,fecha,articulo,cantidad,costo){
        this.id_ventaTienda = id_ventaTienda;
        this.id_usuario = id_usuario;
        this.fecha = fecha;
        this.articulo = articulo;
        this.cantidad = cantidad;
        this.costo = costo;

        //Más atributos aquí...
    }

    agregar_ventaTienda(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `INSERT INTO ventastienda(id_usuario, fecha, articulo, cantidad,costo)
            VALUES (${parseInt(this.id_usuario)}, "${this.fecha}", "${this.articulo}", ${parseInt(this.cantidad)}, ${parseFloat(this.costo)})`
            console.log('sqlp', SentenciaSQL);
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }

    consultando_ventaTienda(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `SELECT * FROM ventastienda WHERE id_ventaTienda = ${parseInt(this.id_ventaTienda)}`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }

    consultar_ventaTienda() {
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `SELECT * FROM ventastienda`
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

    modificar_ventaTienda(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `UPDATE ventastienda SET id_usuario = ${parseInt(this.id_usuario)}, 
            fecha = "${this.fecha}", articulo= "${this.articulo}", cantidad= ${parseInt(this.cantidad)}, costo= ${parseFloat(this.costo)} WHERE id_ventaTienda = ${parseInt(this.id_ventaTienda)};`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }

    eliminar_ventaTienda(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `DELETE FROM ventastienda WHERE id_ventaTienda = ${parseInt(this.id_ventaTienda)};`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })  
        
        


        

    }



}


module.exports = VentasTienda_Modelo;
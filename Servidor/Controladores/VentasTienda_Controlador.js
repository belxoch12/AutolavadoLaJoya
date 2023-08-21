//Importar modelo(s)

const VentasTienda_Modelo = require("../Modelos/VentasTienda_Modelo");
const moment = require('moment');

class VentasTienda_Controlador{

    //--Función Base--//
    agregar_ventaTienda(req, res){        
        console.log('bodyTienda:', req.body)
        let{id_ventaTienda, id_usuario, fecha, articulo, cantidad, costo} = req.body
        const Model = new VentasTienda_Modelo(id_ventaTienda, id_usuario, fecha, articulo, cantidad, costo)

        

        Model.agregar_ventaTienda()
        .then(result =>{
            res.status(200).send({
                'status':true,
                'msg' : "Venta de la tienda agregado correctamente"
            })
        })
        .catch(err=>{
            console.error("Error al...", err);
            res.status(500).send({
                'status':false,
                'msg' : "Error al [...] Intento más Tarde"
            })
        })
    }    

    consultando_ventaTienda(req,res){
        let {id_ventaTienda} = req.params
        const Model = new VentasTienda_Modelo(id_ventaTienda, null, null, null, null,null)


        Model.consultando_ventaTienda()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : "Venta de la tienda en existencia",
                'data':result
            })
        })
        .catch(err=>{
            console.error("Error al...", err);
            res.status(500).send({
                'status':false,
                'msg' : "Error al [...] Intento más Tarde"
            })
        })
    }

    consultar_ventaTienda(req, res) {
        const Model = new VentasTienda_Modelo( null, null, null, null,null, null)
        Model.consultar_ventaTienda()
        .then(result => {
            const formattedResults = result.map(row => {
                // Formatear la columna "fecha" sin la hora
                const fecha = new Date(row.fecha);
                const formattedDate = fecha.toISOString().split('T')[0];
                
                // Retornar una nueva fila con la fecha formateada
                return {
                    ...row,
                    fecha: formattedDate
                };
            });
            
            res.send({
                'status': true,
                'msg': "Productos en existencia",
                'data': formattedResults
            });
        })
        .catch(err => {
            console.error("Error al...", err);
            res.status(500).send({
                'status': false,
                'msg': "Error al [...] Intento más Tarde"
            });
        });
    }

    modificar_ventaTienda(req, res){
        let {id_ventaTienda, id_usuario, fecha, articulo, cantidad, costo} = req.body
        const Model = new VentasTienda_Modelo(id_ventaTienda, id_usuario, fecha, articulo, cantidad, costo)
        console.log(req.body)

        Model.modificar_ventaTienda()
        .then(result =>{
            res.status(200).send({
                'status':true,
                'msg' : "Venta de la Tienda Modificado correctamente"
            })
        })
        .catch(err=>{
            console.error("Error al...", err);
            res.status(500).send({
                'status':false,
                'msg' : "Error al [...] Intento más Tarde"
            })
        })
    } 

    eliminar_ventaTienda(req, res){
        let {id_ventaTienda} = req.params
        const Model = new VentasTienda_Modelo(id_ventaTienda, null,  null, null, null,null)
        
        console.log(req.body)

        Model.eliminar_ventaTienda()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : "Venta de la Tienda eliminado correctamente"
            })
        })
        .catch(err=>{
            console.error("Error al...", err);
            res.status(500).send({
                'status':false,
                'msg' : "Error al [...] Intento más Tarde"
            })
        })
    }

}


module.exports = VentasTienda_Controlador;
//Importar modelo(s)

const VentasAutolavado_Modelo = require("../Modelos/VentasAutolavado_Modelo");
const moment = require('moment');


class VentasAutolavado_Controlador{

    //--Función Base--//
    agregar_ventaAutolavado(req, res){
        console.log('body:', req.body)
        let{id_ventasAutolavado, id_usuario, fecha, tipoVehiculo, costo} = req.body        
        const Model = new VentasAutolavado_Modelo(id_ventasAutolavado, id_usuario, fecha, tipoVehiculo, costo)

        

        Model.agregar_ventaAutolavado()
        .then(result =>{
            res.status(200).send({
                'status':true,
                'msg' : "Venta agregado correctamente"
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

    consultar_ventaAutolavado(req,res){
        let {id_ventasAutolavado} = req.params
        const Model = new VentasAutolavado_Modelo(id_ventasAutolavado, null, null, null, null)


        Model.consultar_ventaAutolavado()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : "Venta en existencia",
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

    consultar_ventasAutolavados(req, res) {
        const Model = new VentasAutolavado_Modelo(null, null, null, null, null, null, null)
        Model.consultar_ventasAutolavados()
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
    

    modificar_ventaAutolavado(req, res){
        let {id_ventasAutolavado, id_usuario, fecha, tipoVehiculo, costo} = req.body
        const Model = new VentasAutolavado_Modelo(id_ventasAutolavado, id_usuario, fecha, tipoVehiculo, costo)
        
        console.log(req.body)

        Model.modificar_ventaAutolavado()
        .then(result =>{
            res.status(200).send({
                'status':true,
                'msg' : "Venta Modificado correctamente"
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

    eliminar_ventaAutolavado(req, res){
        let {id_ventasAutolavado} = req.params
        const Model = new VentasAutolavado_Modelo(id_ventasAutolavado, null,  null, null, null)
        
        console.log(req.body)

        Model.eliminar_ventaAutolavado()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : "Venta eliminado correctamente"
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


module.exports = VentasAutolavado_Controlador;
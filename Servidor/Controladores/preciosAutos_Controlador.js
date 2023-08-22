//Importar modelo(s)

const preciosAutos_Modelo = require("../Modelos/preciosAutos_Modelo");

class preciosAutos_Controlador{

    //--Función Base--//
    agregar_precio(req, res){
        let {tipoAuto,precio} = req.body
        const Model = new preciosAutos_Modelo(null,tipoAuto,precio)

        console.log(req.body)

        Model.agregar_precio()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : "PRECIO AGREGADO CORRECTAMENTE"
            })
        })
        .catch(err=>{
            console.error("Error ", err);
            res.status(500).send({
                'status':false,
                'msg' : "Error al [...] Intento más Tarde"
            })
        })
    }    

    consultar_precio(req,res){
        let {idAuto} = req.params
        const Model = new preciosAutos_Modelo(idAuto, null, null)


        Model.consultar_precio()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : "Precios en existencia",
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

    consultar_precios(req,res){
        const Model = new preciosAutos_Modelo(null, null, null)
        Model.consultar_precios()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : "Precios en existencia",
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

    modificar_precio(req, res){
        let {idAuto,tipoAuto, precio} = req.body
        const Model = new preciosAutos_Modelo(idAuto, tipoAuto,precio)
        
        console.log(req.body)

        Model.modificar_precios()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : "Precio modificado correctamente"
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

    eliminar_precio(req, res){
        let {idAuto} = req.params
        const Model = new preciosAutos_Modelo(idAuto, null,  null)
        
        console.log(req.body)

        Model.eliminar_precios()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : "Precio eliminado correctamente"
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


module.exports = preciosAutos_Controlador;
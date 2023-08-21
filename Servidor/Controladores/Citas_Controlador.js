//Importar modelo(s)

const Citas_Modelo = require("../Modelos/Citas_Modelo");

class Citas_Controlador{

    //--Función Base--//
    agregar_cita(req, res){
        let {id_cita,id_usuario,tipoVehiculo,fecha,hora} = req.body
        const Model = new Citas_Modelo(id_cita,id_usuario,tipoVehiculo,fecha,hora)
        
        console.log(req.body)

        Model.agregar_cita()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : ""
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
    
    consultar_cita(req, res){
        let {id_cita} = req.params

        const Model = new Citas_Modelo(id_cita,null,null,null,null)
        
        Model.consultar_cita()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : "",
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

    consultar_citas(req, res){

        const Model = new Citas_Modelo(null,null,null,null,null)
        
        Model.consultar_citas()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : "Citas existentes",
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

    modificar_cita(req, res){
        let {id_cita,id_usuario,tipoVehiculo,fecha,hora} = req.body
        const Model = new Citas_Modelo(id_cita,id_usuario,tipoVehiculo,fecha,hora)
        
        console.log(req.body)

        Model.modificar_cita()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : "Cita modificada correctamente"
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

    //Más funciones aquí...
    eliminar_cita(req, res){
        let {id_cita} = req.params
        const Model = new Citas_Modelo(id_cita,null,null,null,null)
        
        console.log(req.body)

        Model.eliminar_cita()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : ""
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


module.exports = Citas_Controlador;
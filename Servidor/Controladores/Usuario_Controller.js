//Importar modelo(s)

const Usuario_Modelo = require("../Modelos/Usuario_Modelo");

class Usuario_Controlador{

    //--Función Base--//
    agregar_usuario(req, res){
        let {id_usuario,nombre,apellido,usuario,psw,id_rol} = req.body
        const Model = new Usuario_Modelo(id_usuario,nombre,apellido,usuario,psw,id_rol)

        console.log(req.body)

        Model.agregar_usuario()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : ""
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

    consultar_usuario(req, res){
        let {id_usuario} = req.params

        const Model = new Usuario_Modelo(id_usuario,null,null,null,null,null)
        
        Model.consultar_usuario()
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

    modificar_usuario(req, res){
        let {id_usuario,nombre,apellido,usuario,psw,id_rol} = req.body
        const Model = new Usuario_Modelo(id_usuario,nombre,apellido,usuario,psw,id_rol)
        
        console.log(req.body)

        Model.modificar_usuario()
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

    eliminar_usuario(req, res){
        let {id_usuario} = req.params
        const Model = new Usuario_Modelo(id_usuario,null,null,null,null,null)
        
        console.log(req.body)

        Model.eliminar_usuario()
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

    //Más funciones aquí...

}


module.exports = Usuario_Controlador;
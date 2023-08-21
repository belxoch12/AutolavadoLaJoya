//Importar modelo(s)

const InicioSesion_Modelo = require("../Modelos/InicioSesion_Modelo");

class InicioSesion_Controlador{

    //--Función Base--//
    /*agregar_usuario(req, res){
        let {id_usuario,nombre,apellido,usuario,psw,id_rol} = req.body
        const Model = new InicioSesion_Modelo(id_usuario,nombre,apellido,usuario,psw,id_rol)

        console.log(req.body)

        Model.agregar_usuario()
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
    }*/

    iniciar_sesion(req, res){
        let {usuario,psw} = req.params
        console.log(usuario,psw)

        const Model = new InicioSesion_Modelo(null,null,null,usuario,psw,null)
        
        Model.iniciar_sesion()
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

    //Más funciones aquí...

}


module.exports = InicioSesion_Controlador;
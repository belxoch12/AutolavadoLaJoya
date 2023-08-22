//Importar modelo(s)

const Inventario_Modelo = require("../Modelos/Inventario_Modelo");

class Inventario_Controlador{

    //--Función Base--//
    agregar_producto(req, res){
        let{codigo, nombre, descripcion, cantidad, entrada, salida,precio} = req.body
        const Model = new Inventario_Modelo(null, codigo, nombre, descripcion, cantidad, entrada, salida,precio)

        console.log(req.body)

        Model.agregar_producto()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : "Producto agregado correctamente"
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

    consultar_producto(req,res){
        let {id_inventario} = req.params
        const Model = new Inventario_Modelo(id_inventario, null, null, null, null, null, null,null)


        Model.consultar_producto()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : "Producto en existencia",
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

    consultar_productos(req,res){
        const Model = new Inventario_Modelo(null, null, null, null, null, null, null,null)
        Model.consultar_productos()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : "Productos en existencia",
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

    modificar_producto(req, res){
        let {id_inventario, codigo, nombre, descripcion, cantidad, entrada, salida,precio} = req.body
        const Model = new Inventario_Modelo(id_inventario, codigo, nombre, descripcion, cantidad, entrada, salida,precio)
        
        console.log(req.body)

        Model.modificar_producto()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : "Producto modificado correctamente"
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

    eliminar_producto(req, res){
        let {id_inventario} = req.params
        const Model = new Inventario_Modelo(id_inventario, null,  null, null, null, null, null,null)
        
        console.log(req.body)

        Model.eliminar_producto()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : "Producto eliminado correctamente"
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


module.exports = Inventario_Controlador;
function buscar(){
    const id = document.getElementById('default-search').value;    
    window.location.href = `/lajoya/historial/${id}`;
}

function eliminar(){
    const id = document.getElementById('default-search').value;    
    window.location.href = `/lajoya/eliminar/${id}`;
}
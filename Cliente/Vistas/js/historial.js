function buscar(){
    const id = document.getElementById('default-search').value;
    if( id == '' ){
        fetch(`http://localhost:5000/ajax/historial`, {            
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(result => {
            console.log('Si jala we')
            return result.json();
        })
        .then(data => {
            console.log(data)

            tbodyAutolavado = ''
            for(row of data.autolavado){
                tbodyAutolavado += tbodyAutolavado = `<tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    ${row.id_ventasAutolavado }
                </th>
                <td class="px-6 py-4">
                    ${row.usuario }
                </td>
                <td class="px-6 py-4">
                    ${row.fecha}
                </td>
                <td class="px-6 py-4">
                    ${row.tipoVehiculo}
                </td>
                <td class="px-6 py-4">
                    ${row.costo }
                </td>
                <td class="px-6 py-4">
                    <button onclick="eliminarAL(${row.id_ventasAutolavado})">
                        <svg class="borrar" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>.borrar{fill:#4c4ecc}</style><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                    </button>                                    
                </td>
                </tr>`
            }
            const tbodyAutolavadoHtml = document.getElementById('tbodyAutolavado');

            tbodyAutolavadoHtml.innerHTML = tbodyAutolavado;

            tbodyTienda = ''
            for(row of data.tienda){
                tbodyTienda += `<tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    ${row.id_ventaTienda}
                </th>
                <td class="px-6 py-4">
                    ${row.usuario }
                </td>
                <td class="px-6 py-4">
                    ${row.fecha }
                </td>
                <td class="px-6 py-4">
                    ${row.articulo }
                </td>
                <td class="px-6 py-4">
                    ${row.cantidad }
                </td>
                <td class="px-6 py-4">
                    ${row.costo }
                </td>
                <td class="px-6 py-4">
                    <button onclick="eliminarTi(${row.id_ventaTienda})">
                        <svg class="borrar" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>.borrar{fill:#4c4ecc}</style><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                    </button>                                    
                </td>
                </tr>`
            }
            const tbodyTiendaHtml = document.getElementById('tbodyTienda');

            tbodyTiendaHtml.innerHTML = tbodyTienda;          
            
        })
        .catch(err => {
            console.log(err);
        });
    }else{
        fetch(`http://localhost:5000/ajax/historial/${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(result => {
            console.log('Si jala we 2')
            return result.json();
        })
        .then(data => {
            console.log(data)

            tbodyAutolavado = ''
            for(row of data.autolavado){
                tbodyAutolavado += tbodyAutolavado = `<tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    ${row.id_ventasAutolavado }
                </th>
                <td class="px-6 py-4">
                    ${row.usuario }
                </td>
                <td class="px-6 py-4">
                    ${row.fecha}
                </td>
                <td class="px-6 py-4">
                    ${row.tipoVehiculo}
                </td>
                <td class="px-6 py-4">
                    ${row.costo }
                </td>
                <td class="px-6 py-4">
                    <button onclick="eliminarAL(${row.id_ventasAutolavado})">
                        <svg class="borrar" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>.borrar{fill:#4c4ecc}</style><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                    </button>                                    
                </td>
                </tr>`
            }
            const tbodyAutolavadoHtml = document.getElementById('tbodyAutolavado');

            tbodyAutolavadoHtml.innerHTML = tbodyAutolavado;

            tbodyTienda = ''
            for(row of data.tienda){
                tbodyTienda += `<tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    ${row.id_ventaTienda}
                </th>
                <td class="px-6 py-4">
                    ${row.usuario }
                </td>
                <td class="px-6 py-4">
                    ${row.fecha }
                </td>
                <td class="px-6 py-4">
                    ${row.articulo }
                </td>
                <td class="px-6 py-4">
                    ${row.cantidad }
                </td>
                <td class="px-6 py-4">
                    ${row.costo }
                </td>
                <td class="px-6 py-4">
                    <button onclick="eliminarTi(${row.id_ventaTienda})">
                        <svg class="borrar" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>.borrar{fill:#4c4ecc}</style><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                    </button>                                    
                </td>
                </tr>`
            }
            const tbodyTiendaHtml = document.getElementById('tbodyTienda');

            tbodyTiendaHtml.innerHTML = tbodyTienda;          
            
        })
        .catch(err => {
            console.log(err);
        });
    }
}

function eliminar(){
    const id = document.getElementById('default-search').value;    
    fetch(`http://localhost:5000/ajax/eliminar/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .then(result => {
        console.log('Si borra we')
        buscar();
        return result.json();
    })
    .catch(err => {
        buscar();
        console.log(err);
    });
}

function eliminarAL(id){  
    fetch(`http://localhost:5000/ajax/eliminarAL/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .then(result => {
        console.log('Si borra we')
        buscar();
        return result.json();
    })
    .catch(err => {
        console.log(err);
    });
}

function eliminarTi(id){   
    fetch(`http://localhost:5000/ajax/eliminarTi/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .then(result => {
        console.log('Si borra we')
        buscar();        
        return result.json();
    })
    .catch(err => {
        console.log(err);
    });
}


buscar();
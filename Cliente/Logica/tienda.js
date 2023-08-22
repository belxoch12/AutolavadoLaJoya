let regresarBtn = document.getElementById("regresarBtn");
let eliminarVentasBtn = document.getElementById("eliminarVentasBtn");
let consultarVentasBtn = document.getElementById("consultarVentasBtn");
let GuardarVentaTiendaBtn = document.getElementById("BtnGuardarVenta");
let id_usuario = document.getElementById('id_usuario');
let fecha = document.getElementById('fecha');
let articulo = document.getElementById('articulo');
let cantidad = document.getElementById('cantidad');
let costo = document.getElementById('costo');

regresarBtn.addEventListener("click", (e) => {
  location.href = "/Conexion/Cliente/Vistas/menu.html";
});

//LLENADO DE LA TABLA CON LAS RESPUESTA DEL SERVIDOR
const settings = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
};

fetch('http://localhost:5000/consultar_ventaTienda', settings)
    .then(rest => rest.ok ? rest.json() : Promise.reject(rest))
    .then(response => {
        console.log("Se conectó con el Servidor", response);

        const tableBody = document.getElementById('filas');
        tableBody.innerHTML = ''; // Limpiar contenido existente en la tabla

        // Iterar sobre los datos y agregar filas a la tabla
        response.data.forEach(producto => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${producto.id_ventaTienda}</td>
                <td>${producto.id_usuario}</td>
                <td>${producto.fecha}</td>
                <td>${producto.articulo}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.costo}</td>
            `;

            // Agregar un manejador de eventos para resaltar la fila al hacer clic en ella
            row.addEventListener('click', function () {
                const allRows = tableBody.querySelectorAll('tr');
                allRows.forEach(function (row) {
                    row.classList.remove('selected-row');
                });
                this.classList.add('selected-row');
            });

            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.log("Error con el Servidor", error);
    });


//AGREGAR UN NUEVO PRODUCTO A LA BASE DE DATOS
GuardarVentaTiendaBtn.addEventListener("click", (e) => {
    const selectedRowVentas = getSelectedRowVentas();

    if (selectedRowVentas) {
        let dataFormat = {
            id_ventaTienda:selectedRowVentas.cells[0].innerText,
            id_usuario: id_usuario.value,
            fecha: fecha.value,
            articulo: articulo.value,
            cantidad: cantidad.value,
            costo: costo.value
        };
        
        console.log(dataFormat);
        const settings = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataFormat)
        };

        fetch('http://localhost:5000/modificando_ventaTienda', settings)
            .then(rest => rest.ok ? rest.json() : Promise.reject(rest))
            .then(json => {
                console.log("Se conecto con el Servidor", json);
                location.href="./../Vistas/VentasTienda.html"
            })
            .catch(error => {
                console.log("Error con el Servidor");
            });
    } else {
        let dataFormat = {
            id_usuario: id_usuario.value,
            fecha: fecha.value,
            articulo: articulo.value,
            cantidad: cantidad.value,
            costo: costo.value
        };
        
        console.log(dataFormat);
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataFormat)
        };

        fetch('http://localhost:5000/agregando_ventaTienda', settings)
            .then(rest =>{
              return rest.json();
            } )
            .then(json => {
                console.log("Se conecto con el Servidor", json);
                location.href="./../Vistas/VentasTienda.html"
            })
            .catch(error => {
                console.log("Error con el Servidor");
            });
    }
});


//ELIMINAR PRODUCTO
eliminarVentasBtn.addEventListener('click', function () {
    const selectedRow = getSelectedRowVentas();
    if (selectedRow) {
      // Crear la ventana modal
      const modal = document.createElement('div');
      modal.classList.add('modal');
  
      // Contenido de la ventana modal
      const modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');
  
      // Mensaje de confirmación
      const confirmationMsg = document.createElement('p');
      confirmationMsg.textContent = '¿Está seguro de eliminar el producto seleccionado?';
  
      // Botón de confirmación
      const confirmBtn = document.createElement('button');
      confirmBtn.textContent = 'Eliminar';
      confirmBtn.addEventListener('click', function () {
        const idInventario = selectedRow.cells[0].innerText;
  
        // Enviar solicitud DELETE al servidor
        const settings = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        };
  
        fetch(`http://localhost:5000/eliminando_ventaTienda/${idInventario}`, settings)
          .then(rest => rest.ok ? rest.json() : Promise.reject(rest))
          .then(json => {
            console.log("Producto eliminado:", json);
            tableBody.removeChild(selectedRow);
          })
          .catch(error => {
            console.log("Error al eliminar el producto", error);
          });
  
        closeModal();
      });
  
      // Botón de cancelar
      const cancelBtn = document.createElement('button');
      cancelBtn.textContent = 'Cancelar';
      cancelBtn.addEventListener('click', closeModal);
  
      // Agregar contenido a la ventana modal
      modalContent.appendChild(confirmationMsg);
      modalContent.appendChild(confirmBtn);
      modalContent.appendChild(cancelBtn);
  
      // Agregar contenido a la ventana modal
      modal.appendChild(modalContent);
  
      // Agregar ventana modal al documento
      document.body.appendChild(modal);
  
      // Función para cerrar la ventana modal
      function closeModal() {
        document.body.removeChild(modal);
      }
    } else {
      alert('Por favor, seleccione un producto para eliminar.');
    }
  });

  // Función para obtener la fila seleccionada en la tabla
function getSelectedRowVentas() {
    const selectedRow = document.querySelector('.selected-row');
    return selectedRow;
}

//CONSULTAR PRODUCTO 
consultarVentasBtn.addEventListener('click', function () {
    // Crear la ventana modal para ingresar el ID del producto
    const inputModal = document.createElement('div');
    inputModal.classList.add('modal');

    const inputContent = document.createElement('div');
    inputContent.classList.add('modal-content');

    const inputLabel = document.createElement('label');
    inputLabel.innerText = 'Ingrese el ID del producto:';
    inputContent.appendChild(inputLabel);

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    inputContent.appendChild(input);

    const confirmButton = document.createElement('button');
    confirmButton.innerText = 'Buscar producto';
    confirmButton.addEventListener('click', function () {
      const productId = input.value;
      const productRow = findProductById(productId);

      // Cerrar la ventana modal de entrada del ID
      inputModal.remove();

      if (productRow) {
        const id_usuario = productRow.cells[1].innerText;
        const fecha = productRow.cells[2].innerText;
        const articulo = productRow.cells[3].innerText;
        const cantidad = productRow.cells[4].innerText;
        const costo = productRow.cells[5].innerText;


        // Crear la pantalla modal para mostrar los detalles del producto consultado
        const detailsModal = document.createElement('div');
        detailsModal.classList.add('modal');

        const detailsContent = document.createElement('div');
        detailsContent.classList.add('modal-content');

        // Agregar los detalles del producto a la pantalla modal
        const details = document.createElement('p');
        details.innerHTML = `Detalles del producto:<br>
    Id_usuario: ${id_usuario}<br>
    Fecha: ${fecha}}<br>
    Articulo: ${articulo}<br>
    Cantidad: ${cantidad}<br>
    Costo: ${costo}`;

        detailsContent.appendChild(details);

        // Agregar el botón de cerrar
        const closeButton = document.createElement('button');
        closeButton.innerText = 'Cerrar';
        closeButton.classList.add('close-button');
        closeButton.addEventListener('click', function () {
          detailsModal.remove();
        });
        detailsContent.appendChild(closeButton);

        detailsModal.appendChild(detailsContent);

        // Agregar la pantalla modal al cuerpo del documento
        document.body.appendChild(detailsModal);
      } else {
        // Crear una ventana modal para mostrar el mensaje de error
        const errorModal = document.createElement('div');
        errorModal.classList.add('modal');

        const errorContent = document.createElement('div');
        errorContent.classList.add('modal-content');

        const errorMessage = document.createElement('p');
        errorMessage.innerText = 'El producto con el ID especificado no existe.';

        const closeButton = document.createElement('button');
        closeButton.innerText = 'Cerrar';
        closeButton.classList.add('close-button');
        closeButton.addEventListener('click', function () {
          errorModal.remove();
        });

        errorContent.appendChild(errorMessage);
        errorContent.appendChild(closeButton);

        errorModal.appendChild(errorContent);

        document.body.appendChild(errorModal);
      }
    });

    inputContent.appendChild(confirmButton);
    inputModal.appendChild(inputContent);

    // Agregar la ventana modal de entrada del ID al cuerpo del documento
    document.body.appendChild(inputModal);
  });

  // Función para encontrar un producto por su ID en la tabla
  function findProductById(productId) {
    for (let i = 0; i < rows.length; i++) {
      const idCell = rows[i].cells[0];
      if (idCell.innerText === productId) {
        return rows[i];
      }
    }
    return null; // Producto no encontrado
  }
  modificarVentaTiendaBtn.addEventListener('click', function () {
    const selectedRowVentas = getSelectedRowVentas();
    if (selectedRowVentas) {
      const id_ventaTienda = selectedRowVentas.cells[0].innerText;
      const id_usuario = selectedRowVentas.cells[1].innerText;
      const fecha = selectedRowVentas.cells[2].innerText;
      const articulo = selectedRowVentas.cells[3].innerText;
      const cantidad = selectedRowVentas.cells[4].innerText;
      const costo = selectedRowVentas.cells[5].innerText;

      // Rellenar el formulario modal con los valores del producto seleccionado
      document.getElementById('id_usuario').value = id_usuario;
      document.getElementById('fecha').value = fecha;
      document.getElementById('articulo').value = articulo;
      document.getElementById('cantidad').value = cantidad;
      document.getElementById('costo').value = costo;
      modal.classList.remove('translate'); // Mostrar la ventana modal
    }
  });

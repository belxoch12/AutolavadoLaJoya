let regresarBtn = document.getElementById("regresarBtn");
let BtnGuardar = document.getElementById("BtnGuardar");
let BtnConfirmDelete = document.getElementById("eliminarProductoBtn");
let tipoAuto = document.getElementById('tipoAuto');
let precio = document.getElementById('precio');
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
fetch('http://localhost:5000/consultando_precios', settings)
  .then(rest => rest.ok ? rest.json() : Promise.reject(rest))
  .then(response => {
    console.log("Se conectó con el Servidor", response);

    const tableBody = document.getElementById('filas');
    tableBody.innerHTML = ''; // Limpiar contenido existente en la tabla

    // Iterar sobre los datos y agregar filas a la tabla
    response.data.forEach(producto => {
      const row = document.createElement('tr');
      row.innerHTML = `
                <td>${producto.idAuto}</td>
                <td>${producto.tipoAuto}</td>
                <td>${producto.precio}</td>
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



  // Función para obtener la fila seleccionada en la tabla
function getSelectedRow() {
    const selectedRow = document.querySelector('.selected-row');
    return selectedRow;
  }


//AGREGAR UN NUEVO PRODUCTO A LA BASE DE DATOS
BtnGuardar.addEventListener("click", (e) => {
    const selectedRow = getSelectedRow();
  
  
    if (selectedRow) {
      console.log("MODIFICANDO: ",selectedRow.cells[0].innerText)
      let dataFormat = {
        idAuto:selectedRow.cells[0].innerText,
        tipoAuto: tipoAuto.value,
        precio: precio.value
      };
  
      console.log(dataFormat);
      const settings = {
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataFormat)
      };
      fetch('http://localhost:5000/modificando_precio', settings)
        .then(rest => rest.ok ? rest.json() : Promise.reject(rest))
        .then(json => {
          console.log("Se conecto con el Servidor", json);
          //location.href="/Cliente/Vistas/Inventario.html"
        })
        .catch(error => {
          console.log("Error con el Servidor");
        });
      }else {
        let dataFormat = {
            tipoAuto: tipoAuto.value,
            precio: precio.value
        };
      console.log(dataFormat);
      const settings = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataFormat)
      };
      fetch('http://localhost:5000/agregando_precio', settings)
        .then(rest => rest.ok ? rest.json() : Promise.reject(rest))
        .then(json => {
          console.log("Se conecto con el Servidor", json);
          //location.href="/Cliente/Vistas/Inventario.html"
        })
        .catch(error => {
          console.log("Error con el Servidor");
        });
    }
  });


  eliminarPrecioBtn.addEventListener('click', function () {
    const selectedRow = getSelectedRow();
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
        const idAuto = selectedRow.cells[0].innerText;
  
        // Enviar solicitud DELETE al servidor
        const settings = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        };
  
        fetch(`http://localhost:5000/eliminando_precio/${idAuto}`, settings)
          .then(rest => rest.ok ? rest.json() : Promise.reject(rest))
          .then(json => {
            console.log("Precio eliminado:", json);
            tableBody.removeChild(selectedRow);
          })
          .catch(error => {
            console.log("Error al eliminar el precio", error);
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
      alert('Por favor, seleccione un auto para eliminar.');
    }
  });


  consultarPrecioBtn.addEventListener('click', function () {
    // Crear la ventana modal para ingresar el ID del automovil
    const inputModal = document.createElement('div');
    inputModal.classList.add('modal');
  
    const inputContent = document.createElement('div');
    inputContent.classList.add('modal-content');
  
    const inputLabel = document.createElement('label');
    inputLabel.innerText = 'Ingrese el ID del Automovil:';
    inputContent.appendChild(inputLabel);
  
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    inputContent.appendChild(input);
  
    const confirmButton = document.createElement('button');
    confirmButton.innerText = 'Buscar precio';
    confirmButton.addEventListener('click', function () {
      const productId = input.value;
      const productRow = findProductById(productId);
  
      // Cerrar la ventana modal de entrada del ID
      inputModal.remove();
  
      if (productRow) {
        const tipoAuto = productRow.cells[1].innerText;
        const precio = productRow.cells[2].innerText;
  
        // Crear la pantalla modal para mostrar los detalles del producto consultado
        const detailsModal = document.createElement('div');
        detailsModal.classList.add('modal');
  
        const detailsContent = document.createElement('div');
        detailsContent.classList.add('modal-content');
  
        // Agregar los detalles del producto a la pantalla modal
        const details = document.createElement('p');
        details.innerHTML = `Detalles del precio:<br>
      Tipo de Auto: ${tipoAuto}<br>
      Precio: ${precio}<br>`;
  
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
        errorMessage.innerText = 'El auto con el ID especificado no existe.';
  
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
let gastos = []; // Array para almacenar los gastos
let total = 0; // Total de los gastos
let editandoGasto = null; // Variable para controlar si estamos editando un gasto

// Función para agregar o modificar un gasto
function agregarGasto() {
    const nombre = document.getElementById('nombreGasto').value;
    const valor = parseFloat(document.getElementById('valorGasto').value);
    const descripcion = document.getElementById('descripcionGasto').value;

    if (valor > 150) {
        alert('El gasto supera los 150$.');
    }

    if (editandoGasto === null) {
        // Agregar un nuevo gasto
        const nuevoGasto = { nombre, valor, descripcion };
        gastos.push(nuevoGasto);
    } else {
        // Modificar un gasto existente
        gastos[editandoGasto].nombre = nombre;
        gastos[editandoGasto].valor = valor;
        gastos[editandoGasto].descripcion = descripcion;
        editandoGasto = null; // Reseteamos la variable para indicar que ya no estamos editando
    }

    actualizarGastos();
    limpiarFormulario();
}

// Función para mostrar y actualizar la lista de gastos
function actualizarGastos() {
    const listaDeGastos = document.getElementById('listaDeGastos');
    listaDeGastos.innerHTML = ''; // Limpiar la lista

    total = 0;
    gastos.forEach((gasto, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${gasto.nombre}: US$ ${gasto.valor.toFixed(2)} - ${gasto.descripcion}
                        <button onclick="editarGasto(${index});">Editar</button>
                        <button onclick="eliminarGasto(${index});">Eliminar</button>`;
        listaDeGastos.appendChild(li);
        total += gasto.valor;
    });

    document.getElementById('totalGastos').textContent = total.toFixed(2);
}

// Función para editar un gasto
function editarGasto(index) {
    const gasto = gastos[index];
    document.getElementById('nombreGasto').value = gasto.nombre;
    document.getElementById('valorGasto').value = gasto.valor;
    document.getElementById('descripcionGasto').value = gasto.descripcion;
    editandoGasto = index; // Guardamos el índice del gasto que estamos editando
}

// Función para eliminar un gasto
function eliminarGasto(index) {
    gastos.splice(index, 1); // Elimina el gasto del array
    actualizarGastos();
}

// Función para limpiar el formulario
function limpiarFormulario() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
}

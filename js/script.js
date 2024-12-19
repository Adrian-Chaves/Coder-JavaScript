// Función para pedir 4 números (Desayuno, almuerzo, merienda y cena) de glucemia (diabetes), calcular la suma y el promedio
// Variables y objetos necesarios
let totalNumeros = 4; // Número de entradas requeridas

// Objeto para almacenar los valores y resultados de glucosa
let simuladorGlucosa = {
    valores: [],
    suma: 0,
    promedio: 0,
    agregarValor: function(valor) {
        this.valores.push(valor);
    },
    calcularSuma: function() {
        this.suma = this.valores.reduce((acumulador, valor) => acumulador + valor, 0);
        return this.suma;
    },
    calcularPromedio: function() {
        this.promedio = this.suma / this.valores.length;
        return this.promedio;
    }
};

// Función para pedir los números de glucosa y validar entrada
function pedirNumeros() {
    for (let i = 1; i <= totalNumeros; i++) {
        let mensaje = `Ingrese el ${i === 1 ? "primer" : i === 2 ? "segundo" : i === 3 ? "tercer" : "cuarto"} número de glucemia en sangre (entre 50 y 500 o -1 para salir):`;
        let numero = parseFloat(prompt(mensaje));

        // Opción para salir del programa
        if (numero === -1) {
            alert("Has decidido salir del programa.");
            return;
        }

        // Validación para el rango
        if (isNaN(numero) || numero < 50 || numero > 500) {
            alert("Por favor ingrese un número válido entre 50 y 500.");
            i--; // Repite la entrada si es inválida
            continue;
        }

        simuladorGlucosa.agregarValor(numero); // Agregar número al objeto
    }
}

// Función para mostrar resultados
function mostrarResultados() {
    // Sumar y calcular promedio
    let suma = simuladorGlucosa.calcularSuma();
    let promedio = simuladorGlucosa.calcularPromedio();

    // Mostrar suma y promedio
    alert("La suma de los números es: " + suma);
    alert("El promedio de los números es: " + promedio);

    // Mensaje basado en el promedio de glucosa
    if (promedio < 80) {
        alert("El promedio de glucosa en sangre es menor de lo recomendado.");
    } else if (promedio > 180) {
        alert("El promedio de glucosa en sangre es mayor a lo recomendado.");
    } else {
        alert("El promedio de glucosa en sangre es ideal para una persona diabética.");
    }
}

// Función principal que inicia el simulador
function iniciarSimulador() {
    pedirNumeros(); // Capturar valores
    if (simuladorGlucosa.valores.length === totalNumeros) {
        mostrarResultados(); // Mostrar si se capturaron todos los valores
    }
}

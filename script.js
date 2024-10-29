// Función para pedir 4 números (Desayuno, almuerzo, merienda y cena) de glucemia (diabetes), calcular la suma y el promedio
function pedirNumeros() {
    let suma = 0; // Iniciar suma en 0
    let totalNumeros = 4; // Número total de entradas
    let contador = 0; // Contador para el número de entradas válidas

    // Ciclo para pedir los números de glucemia
    for (let i = 1; i <= totalNumeros; i++) {
        let mensaje = "Ingrese el " + (i === 1 ? "primer" : i === 2 ? "segundo" : i === 3 ? "tercer" : "cuarto") + " número de glucemia en sangre (entre 50 y 500 o -1 para salir):";
        let numero = parseFloat(prompt(mensaje)); // Solicitar número

        // Opción para salir del bucle
        if (numero === -1) {
            alert("Has decidido salir del programa.");
            return; // Salir de la función y del bucle
        }

        // Validación para verificar que sea un número válido y dentro del rango
        if (isNaN(numero) || numero < 50 || numero > 500) {
            alert("Por favor ingrese un número válido entre 50 y 500.");
            i--; // Restar 1 para que vuelva a solicitar el número
            continue; // Continuar con el siguiente ciclo
        }

        suma += numero; // Sumar el número válido a la suma total
        contador++; // Incrementar el contador de entradas válidas
    }

    // Calcular promedio
    let promedio = suma / contador;

    // Mostrar resultados con concatenación
    alert("La suma de los números es: " + suma);
    alert("El promedio de los números es: " + promedio);

    // Condicional para verificar el promedio de glucemia en sangre
    if (promedio < 80) {
        alert("El promedio de glucosa en sangre es menor de lo recomendado");
    } else if (promedio > 180) {
        alert("El promedio de glucosa en sangre es mayor a lo recomendado");
    } else {
        alert("El promedio de glucosa en sangre es ideal para una persona diabética");
    }
}

// Llamar a la función para iniciar el simulador interactivo
pedirNumeros();



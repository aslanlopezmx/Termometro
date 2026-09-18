let escala;

// Objeto que actúa como diccionario de funciones de conversión
const formulasConversion = {
    "1-2": (t) => t * 1.8 + 32,                 // Celsius a Fahrenheit
    "1-3": (t) => t + 273.15,                  // Celsius a Kelvin
    "2-1": (t) => (t - 32) / 1.8,              // Fahrenheit a Celsius
    "2-3": (t) => (t - 32) / 1.8 + 273.15,     // Fahrenheit a Kelvin
    "3-1": (t) => t - 273.15,                  // Kelvin a Celsius
    "3-2": (t) => (t - 273.15) * 1.8 + 32      // Kelvin a Fahrenheit
};

do {
    escala = Number(prompt(
        "¿Qué escala prefieres?\n1. Celsius\n2. Fahrenheit\n3. Kelvin\n4. Salir"
    ));

    if (escala === 4) {
        alert("¡Hasta pronto!");
        break;
    }

    // Validar opción principal
    if (escala < 1 || escala > 3 || isNaN(escala)) {
        alert("Por favor, ingresa una opción válida del 1 al 4.");
        continue;
    }

    let temperatura = Number(prompt("Ingresa la temperatura:"));
    
    // Definir opciones del submenú dinámicamente según la escala elegida
    let opcionesTexto = escala === 1 ? "\n2. Fahrenheit\n3. Kelvin" :
    escala === 2 ? "\n1. Celsius\n3. Kelvin" : 
    "\n1. Celsius\n2. Fahrenheit";

    let conversion = Number(prompt("¿A qué otra escala te gustaría convertirla?" + opcionesTexto));

    // Creamos la clave combinada (ej: "1-2" para Celsius a Fahrenheit)
    let clave = `${escala}-${conversion}`;
    
    // Buscamos si existe la fórmula en el objeto; si existe, ejecutamos la función pasando la temperatura
    let resultado = formulasConversion[clave] ? formulasConversion[clave](temperatura) : undefined;

    if (resultado !== undefined) {
        alert("El resultado es: " + resultado);
    } else {
        alert("Opción de conversión no válida.");
    }

} while (escala !== 4);
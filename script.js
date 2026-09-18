
//todo ============== Escala
let escala = Number(prompt("¿Qué escala prefieres?" + 
    "\n 1. Celcius" + 
    "\n 2. Farenheit" +
     "\n3. Kelvin"));

 let conversion;
 let temperatura;

     switch (escala){
            case 1:
               temperatura = Number(prompt("Ingresa la temperatura:"));
               conversion = Number(prompt("¿A qué otra escala te gustaría convertirla?" +  
               "\n 2. Farenheit" +
               "\n 3. Kelvin"));

               switch (conversion){
                case 2:


                break;
                case 3:

                break;
                default:
                    break;
               }










            break;
            case 2:
                temperatura = Number(prompt("Ingresa la temperatura:"));
                conversion = Number(prompt("¿A qué otra escala te gustaría convertirla?" +  
                "\n 1. Celcius" +
               "\n 3. Kelvin"));
            break;
            case 3:
                temperatura = Number(prompt("Ingresa la temperatura:"));
                conversion = Number(prompt("¿A qué otra escala te gustaría convertirla?" +  
                "\n 1. Celcius" +
               "\n 2. Farenheit"));
            break;
            default:
                escala = Number(prompt("Ingresa una opción válida:" + 
                "\n 1. Celcius" + 
                "\n 2. Farenheit" +
                "\n3. Kelvin")); 
        }



//C a F ---- c * 1.8 +32
let CaF = temperatura * 1.8 + 32;
//F a C ---- (f - 32) / 1.8
let Fac;
//C a K ---- c + 273.15
let CaK;
// K a C --- k - 273.15
let KaC;
//F a K ---- (f - 32) /1.8 + 273.15
let FaK;
//K a F ---- (k - 273.15) * 1.8 + 32
let KaF;





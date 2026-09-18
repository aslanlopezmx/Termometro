

let escala;
do{


//todo ============== Escala
escala = Number(prompt("¿Qué escala prefieres?" + 
    "\n 1. Celcius" + 
    "\n 2. Farenheit" +
     "\n3. Kelvin" +
     "\n4. Salir"));

let temperatura;     
let conversion;
let resultado;

     switch (escala){
//todo ============ Celcius   
            case 1:
               temperatura = Number(prompt("Ingresa la temperatura:"));
               conversion = Number(prompt("¿A qué otra escala te gustaría convertirla?" +  
               "\n 2. Farenheit" +
               "\n 3. Kelvin"));

               switch (conversion){
//Celcius a Farenheit --------------------- c * 1.8 +32
//? temperatura * 1.8 + 32;
                case 2:
                    resultado = temperatura * 1.8 + 32;
                break;
//Celcius a Kelvin ------------------------ c + 273.15
//? temperatura + 273.15;            
                case 3:
                    resultado = temperatura + 273.15;

                break;
                default:
                    conversion = Number(prompt("Ingresa una opción válida:" +  
               "\n 2. Farenheit" +
               "\n 3. Kelvin"));
                    break;
               }
            
            alert(resultado);

            break;
//todo ============ Farenheit            
            case 2:
                temperatura = Number(prompt("Ingresa la temperatura:"));
                conversion = Number(prompt("¿A qué otra escala te gustaría convertirla?" +  
                "\n 1. Celcius" +
               "\n 3. Kelvin"));

                  switch (conversion){
//Farenheit a Celcius --------------------- (f - 32) / 1.8
//? (temperatura - 32) / 1.8                
                case 1:
                    resultado = (temperatura - 32) / 1.8
                break;
//Farenheit a Kelvin  --------------------- (f - 32) /1.8 + 273.15
//? (temperatura - 32) / 1.8 + 273.15
                case 3:
                    resultado = (temperatura - 32) / 1.8 + 273.15

                break;
                default:
                    conversion = Number(prompt("Ingresa una opción válida:" +  
               "\n 1. Celcius" +
               "\n 3. Kelvin"));
                    break;
               }

               alert(resultado);

            break;
//todo ============ Kelvin     
            case 3:
                temperatura = Number(prompt("Ingresa la temperatura:"));
                conversion = Number(prompt("¿A qué otra escala te gustaría convertirla?" +  
                "\n 1. Celcius" +
               "\n 2. Farenheit"));

                 switch (conversion){
//Kelvin a Celcius --------------------- k - 273.15
//? temperatura - 273.15
                case 1:
                    resultado = temperatura - 273.15;
                break;
//Kelvin a Farenheit ------------------- (k - 273.15) * 1.8 + 32
        
                case 2:
                    resultado = (temperatura - 273.15) * 1.8 + 32

                break;
                default:
                    conversion = Number(prompt("Ingresa una opción válida:" +  
               "\n 1. Celcius" +
               "\n 3. Farenheit"));
                    break;
               }

               alert(resultado);

            break;

//todo ============= SALIR
            case 4:
            alert("¡Hasta pronto!")

            break;
            default:
                escala = Number(prompt("Ingresa una opción válida:" + 
                "\n 1. Celcius" + 
                "\n 2. Farenheit" +
                "\n 3. Kelvin")); 
        }

    } while(escala != 4);





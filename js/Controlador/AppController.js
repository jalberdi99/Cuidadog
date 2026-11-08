/* 
================================================================================
  PROYECTO: Cuidadog - Arquitectura MVC Modular (Curso 26/27)
  AUTOR/A: Javier Alberdi
  ARCHIVO: js/Controlador/AppController.js
  
  DESCRIPCIÓN Y PROPÓSITO (EL CONTROLADOR / DIRECTOR DE ORQUESTA):
  Este archivo funciona como el CONTROLADOR de la arquitectura. Su misión es 
  coordinar el flujo de la aplicación: arranca mostrando la Splash Screen y, 
  tras unos segundos, la sustituye por la Pantalla Principal (MainScreen) 
  pasándole un dato dinámico para personalizar su contenido.
================================================================================
*/

// --- IMPORTACIÓN DE LOS MÓDULOS DE VISTAS ---
import { SplashScreen } from '../Vista/SplashScreen.js';
import { MainScreen } from '../Vista/MainScreen.js';
import { NuevaScreen} from '../Vista/NuevaScreen.js';

// --- INSTANCIAS DE LAS VISTAS ---
const splashView = new SplashScreen();
const mainView = new MainScreen();
const nuevaView = new NuevaScreen();

// Contenedor raíz donde se inyectará todo el HTML (definido en el index.html)
const appContainer = document.getElementById('app');

/**
 * Función principal de arranque (punto de entrada).
 */

function iniciarApp() {
    // 1. Muestra la Splash Screen llamando al método render() de su módulo
    appContainer.innerHTML = splashView.render();

    // 2. Tras 3 segundos, salta a la Pantalla Principal (Main Screen)
    setTimeout(() => {
        // Dato que se va a pasar a la vista MainScreen
        // Obtenemos la fecha actual
        const hoy = new Date();

        // Indicamos la fecha final: 28 de febrero de 2027
        const fechaFinal = new Date(2027, 1, 28);

        // Calculamos los días que faltan
        const dias = Math.ceil(
            (fechaFinal - hoy) / (1000 * 60 * 60 * 24)
        );

        // Variable que enviaremos a MainScreen
        let datoCalculado;

        // Comprobamos si todavía faltan días
        if (dias > 0) {

            datoCalculado = + dias + " dias";

        } else {

            datoCalculado = "La fecha ha pasado";

        }
        
        // Renderizamos usando el módulo de la pantalla principal y le pasamos el dato directo
        // Utilizamos el módulo encargado de dibujar la pantalla principal, le entregamos el dato que hemos calculado y este módulo se encarga de generar el contenido HTML para mostrarlo al usuario
        appContainer.innerHTML = mainView.render(datoCalculado);

        // Aqui al hacer click cambiamos de  pantalla
         window.addEventListener('click', () => {
        appContainer.innerHTML = nuevaView.render();
    }, { once: true });

    }, 3000);
   
}

// Ejecución automática al arrancar la aplicación
iniciarApp();

import './main.scss';
import menu from './menu.json';
import './assets/fonts/Marcheile-Bold-Condensed.woff';
import './assets/fonts/Marcheile-Bold-Condensed.woff2';
/* DO NOT EDIT ABOVE THIS LINE. You can start editing here. */
import '../src/components/location.js';
import { initializeMenu } from '../src/components/menu.js';
import '../src/components/scroll.js'; // Importa el archivo scroll.js

/**
 * === CODE HINT ===
 * You can write your own js code here, also you can import other files.
 * If you want to split your code into multiple files, then import them here this way:
 * import ./path/to/your/file.js
 *
 */

document.addEventListener("DOMContentLoaded", () => {
    initializeMenu();
});
// MAPA


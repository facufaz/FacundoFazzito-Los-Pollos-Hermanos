import './main.scss';
import menu from './menu.json';
import './assets/fonts/Marcheile-Bold-Condensed.woff';
import './assets/fonts/Marcheile-Bold-Condensed.woff2';
/* DO NOT EDIT ABOVE THIS LINE. You can start editing here. */
import '../src/components/location.js';
import '../src/components/menu.js';
/**
 * === CODE HINT ===
 * You can write your own js code here, also you can import other files.
 * If you want to split your code into multiple files, then import them here this way:
 * import ./path/to/your/file.js
 *
 */

document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menuContainer");

    function fetchMenu() {
        try {
            renderMenu(menu.menuList);
        } catch (error) {
            console.error("Failed to load menu:", error);
            menuContainer.innerHTML = "<p>Error loading menu. Please try again later.</p>";
        }
    }

    function createMenuItem(item) {
        return `
            <div class="menu-item">
                <img src="${item.menuImage}" 
                     alt="${item.menuName}" 
                     class="menu-item-image">
                <div class="menu-item-content">
                    <h3 class="menu-item-title">${item.menuName}</h3>
                    <p class="menu-item-desc">${item.menuDescription}</p>
                    <p class="menu-item-price">$${item.menuPrice.toFixed(2)}</p>
                </div>
            </div>
        `;
    }

    function renderMenu(menuList) {
        menuContainer.innerHTML = menuList.map(createMenuItem).join("");
    }

    fetchMenu();
});

export const locations = [
    {
        name: "Los Pollos Hermanos - Madrid",
        lat: 40.41956,
        lng: -3.69196,
        description: "¡Visítanos en Puerta de Alcalá!"
    },
    {
        name: "Los Pollos Hermanos - Barcelona",
        lat: 41.3874,
        lng: 2.1686,
        description: "Disfruta de nuestro pollo frito en Barcelona."
    }
];

export default location;
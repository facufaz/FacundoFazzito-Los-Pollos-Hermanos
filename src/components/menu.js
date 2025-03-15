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
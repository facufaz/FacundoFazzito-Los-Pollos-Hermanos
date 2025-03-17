export function initializeMenu() {
    const menuContainer = document.getElementById("menuContainer");
    const cartContainer = document.getElementById("cart-items");
    const subtotalElem = document.getElementById("subtotal");
    const vatElem = document.getElementById("vat");
    const discountElem = document.getElementById("discount");
    const totalElem = document.getElementById("total");

    const cart = {};

    async function fetchMenu() {
        try {
            const response = await fetch('src/menu.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            renderMenu(data.menuList);
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
                    <p class="menu-item-price">${item.menuPrice.toFixed(2)} €</p>
                    <button class="add-to-cart-btn" data-name="${item.menuName}" data-price="${item.menuPrice}">Add to Cart</button>
                </div>
            </div>
        `;
    }

    function renderMenu(menuList) {
        menuContainer.innerHTML = menuList.map(createMenuItem).join("");
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', () => {
                const name = button.getAttribute('data-name');
                const price = parseFloat(button.getAttribute('data-price'));
                addToCart(name, price);
            });
        });
    }

    function addToCart(name, price) {
        if (!cart[name]) {
            cart[name] = { quantity: 1, price };
        } else {
            cart[name].quantity++;
        }
        updateCart();
    }

    function updateCart() {
        cartContainer.innerHTML = "";
        let subtotal = 0;
        let discount = 0;
        const fragment = document.createDocumentFragment();

        Object.keys(cart).forEach(item => {
            const cartItem = document.createElement("li");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <span>${item} x${cart[item].quantity} - ${(cart[item].quantity * cart[item].price).toFixed(2)} €</span>
                <button class="decrease-quantity" data-name="${item}">-</button>
                <button class="increase-quantity" data-name="${item}">+</button>
            `;
            fragment.appendChild(cartItem);
            subtotal += cart[item].quantity * cart[item].price;
            if (item === "Milkshake") {
                discount += cart[item].quantity * cart[item].price * 0.2;
            }
        });

        cartContainer.appendChild(fragment);

        const vat = subtotal * 0.21;
        const total = subtotal + vat - discount;

        subtotalElem.innerText = subtotal.toFixed(2) + " €";
        vatElem.innerText = vat.toFixed(2) + " €";
        discountElem.innerText = discount.toFixed(2) + " €";
        totalElem.innerText = total.toFixed(2) + " €";

        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', () => {
                const name = button.getAttribute('data-name');
                if (cart[name].quantity > 1) {
                    cart[name].quantity--;
                } else {
                    delete cart[name];
                }
                updateCart();
            });
        });

        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', () => {
                const name = button.getAttribute('data-name');
                cart[name].quantity++;
                updateCart();
            });
        });
    }

    fetchMenu();
}
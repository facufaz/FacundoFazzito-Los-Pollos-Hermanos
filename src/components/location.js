document.addEventListener("DOMContentLoaded", () => {
    const location = [40.41956, -3.69196]; // Madrid (Puerta de Alcalá)

    // Crear el mapa
    const map = L.map('map').setView(location, 15);

    // Cargar tiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Añadir un marcador
    L.marker(location)
        .addTo(map)
        .bindPopup("<b>Los Pollos Hermanos - Madrid</b><br>¡Visítanos en Puerta de Alcalá!")
        .openPopup();

    // Botón de direcciones
    document.getElementById("getDirections").addEventListener("click", () => {
        window.open(`https://www.openstreetmap.org/directions?to=${location[0]},${location[1]}`, "_blank");
    });
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
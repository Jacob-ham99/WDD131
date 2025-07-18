const trips = [
  {
    city: "Cannon Beach",
    state: "Oregon",
    image: "images/cannon-beach.jpg",
    description: "A stunning coastal town known for Haystack Rock and relaxing beach walks."
  },
  {
    city: "Gatlinburg",
    state: "Tennessee",
    image: "images/gatlinburg.jpg",
    description: "Nestled in the Smoky Mountains, this place is perfect for nature and adventure."
  },
  {
    city: "Sedona",
    state: "Arizona",
    image: "images/sedona.jpg",
    description: "Famous for its red rock formations, hiking trails, and peaceful vibes."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("all-trip-cards");

  trips.forEach((trip) => {
    const card = document.createElement("div");
    card.className = "trip-card";
    card.innerHTML = `
      <img src="${trip.image}" alt="${trip.city}, ${trip.state}" />
      <div class="content">
        <h3>${trip.city}, ${trip.state}</h3>
        <p>${trip.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
});

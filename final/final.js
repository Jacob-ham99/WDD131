const tips = [
  "Pack light and smart!",
  "Always carry a reusable water bottle.",
  "Plan, but stay flexible.",
  "Explore local food spots.",
  "Start your day early to beat the crowds."
];

const trips = [
  {
    city: "Cannon Beach",
    state: "Oregon",
    image: "images/cannon-beach.jpg",
    description: "Click Trips to see more."
  },
  {
    city: "Gatlinburg",
    state: "Tennessee",
    image: "images/gatlinburg.jpg",
    description: "Click Trips to see more."
  },
  {
    city: "Sedona",
    state: "Arizona",
    image: "images/sedona.jpg",
    description: "Click Trips to see more."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const tipBtn = document.getElementById("tip-btn");
  const tipDisplay = document.getElementById("travel-tip");
  const tripCardsContainer = document.getElementById("trip-cards");

  // Show random tip
  tipBtn.addEventListener("click", () => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipDisplay.textContent = randomTip;
  });

  // Render trip cards
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
    tripCardsContainer.appendChild(card);
  });
});


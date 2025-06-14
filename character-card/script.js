const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
  image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
  attacked() {
    if (this.health >= 20) {
      this.health -= 20;
      return "Snortleblat was attacked!";
    } else {
      this.health = 0;
      alert('Character Died');
      return "Snortleblat has fallen!";
    }
  },
  levelUp() {
    this.level += 1;
    this.health += 20;
    return "Snortleblat leveled up!";
  }
};

const img = document.querySelector('.image');
const nameEl = document.querySelector('.name');
const classEl = document.getElementById('class');
const levelEl = document.getElementById('level');
const healthEl = document.getElementById('health');
const logEl = document.getElementById('log');

function updateCard(logMessage = "") {
  img.src = character.image;
  img.alt = character.name;
  nameEl.textContent = character.name;
  classEl.textContent = character.class;
  levelEl.textContent = character.level;
  healthEl.textContent = character.health;
  logEl.textContent = logMessage;
}

document.getElementById('attacked').addEventListener('click', () => {
  const message = character.attacked();
  updateCard(message);
});

document.getElementById('levelup').addEventListener('click', () => {
  const message = character.levelUp();
  updateCard(message);
});

updateCard();

const button = document.querySelector('.button');

const replies = [
"Please stop.",
"I'm begging you.",
"Why would you?",
"I'm so frustrated.",
"This button design.",
"So important.",
"For my project.",
"It's a big deal.",
"In the park.",
"I was enjoying it.",
"Until you clicked.",
"Now look at me.",
"All stressed out.",
"It's not fair.",
"I didn't ask for this.",
"Random clicks.",
"Ruining my day.",
"Can't you see?",
"I'm trying to work.",
"On a deadline.",
"It's crucial.",
"To my career.",
"I can't afford.",
"To make mistakes.",
"Every click counts.",
"I'm in chatGTP.",
"It's not a game.",
"This is real life.",
"I need focus.",
"Not distractions.",
"Why won't you listen?",
"I'm pleading with you.",
"I can't take it.",
"One more click.",
"And I'll snap.",
"I can't handle it.",
"I'm at my limit.",
"Please have mercy.",
"I'm begging you.",
"Just leave me be.",
"I can't take it.",
"Any more clicks.",
"I'll lose it.",
"I need a break.",
"From all this clicking.",
"Can't you see?",
"I'm struggling here.",
"Just let me work.",
"In peace."
];

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const fonts = ['Georgia', 'Arial', 'Tahoma', 'Verdana', 'Times New Roman', 'system-ui', 'Impact', 'Comic Sans'];

let clicks = 0;

function updateButtonStyle() {
  const button = document.querySelector('.button');

  // Select a random font from the fonts array
  const font = fonts[Math.floor(Math.random() * fonts.length)];

  // Select a random color from the colors array, excluding the current text color
  let color = colors[Math.floor(Math.random() * colors.length)];
  while (color === button.style.color) {
    color = colors[Math.floor(Math.random() * colors.length)];
  }

  button.style.fontFamily = font;
  button.style.backgroundColor = color;
  button.style.userSelect = 'none';
}

function animateButton() {
  const button = document.querySelector('.button');

  button.classList.add('bounce');
  setTimeout(() => {
    button.classList.remove('bounce');
  }, 200);
}

document.querySelector('.button').addEventListener('click', () => {
  document.querySelector('.button').textContent = replies[clicks % replies.length];
  clicks++;

  document.querySelector('.button').style.border = `${Math.floor(Math.random() * 3) + 1}px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
  document.querySelector('.button').style.borderRadius = `${Math.floor(Math.random() * 12) + 4}px`;
  document.querySelector('.button').style.color = colors[Math.floor(Math.random() * colors.length)];
  document.querySelector('.button').style.fontWeight = Math.random() < 0.5 ? 'normal' : 'bold';
  document.querySelector('.button').style.boxShadow = `${Math.floor(Math.random() * 16) - 8}px ${Math.floor(Math.random() * 16) - 8}px ${Math.floor(Math.random() * 16)}px ${colors[Math.floor(Math.random() * colors.length)]}`;
  animateButton();

  updateButtonStyle();
});

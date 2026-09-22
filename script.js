const navButtons = document.querySelectorAll('.nav-item');
const panels = document.querySelectorAll('.panel');
const cards = document.querySelectorAll('.category-card');

function activatePanel(target) {
  navButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.target === target);
  });

  panels.forEach((panel) => {
    const isActive = panel.dataset.panel === target;
    panel.classList.toggle('active', isActive);
  });
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;
    activatePanel(target);
  });
});

cards.forEach((card) => {
  const target = card.dataset.target;

  const openCard = () => {
    activatePanel(target);
  };

  card.addEventListener('click', openCard);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCard();
    }
  });
});

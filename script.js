const optionNao = document.getElementById('optionNao');

optionNao.addEventListener('mouseover', () => {
  const randomLeft = Math.random() * (window.innerWidth - 150);
  const randomTop = Math.random() * (window.innerHeight - 50);
  
  optionNao.style.position = 'absolute';
  optionNao.style.left = `${randomLeft}px`;
  optionNao.style.top = `${randomTop}px`;
});

optionNao.addEventListener('mouseout', () => {
  optionNao.style.position = 'initial';
});

const optionSim = document.getElementById('optionSim');

optionSim.addEventListener('click', () => {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 2000);
});

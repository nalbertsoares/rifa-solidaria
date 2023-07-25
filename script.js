const carouselSlide = document.querySelector('.slides');
const btnAnterior = document.getElementById('seta-esquerda');
const btnProximo = document.getElementById('seta-direita');
let contador = 0;

btnAnterior.addEventListener('click', () => {
  contador--;
  if (contador < 0) {
    contador = carouselSlide.children.length - 1;
  }
  atualizarSlide();
});

btnProximo.addEventListener('click', () => {
  contador++;
  if (contador >= carouselSlide.children.length) {
    contador = 0;
  }
  atualizarSlide();
});

function atualizarSlide() {
  carouselSlide.style.transform = `translateX(${-contador * 102}%)`;
}

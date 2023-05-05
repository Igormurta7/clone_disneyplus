document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-question]");

  const heroSection = document.querySelector(".hero");
  const alturaHero = heroSection.clientHeight;

  window.addEventListener("scroll", function () {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual < alturaHero) {
      ocultaElementosDoHeader();
    } else {
      exibeElementosDoHeader();
    }
  });

  // Seção de atrações, programação das abas
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (botao) {
      const abaAlvo = botao.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      escondeTodasAbas();
      aba.classList.add("galeria__list--is-active");
      removeBotaoAtivo();
      botao.target.classList.add("galeria__tabs__button--is-active");
    });
  }

  // Seção FAQ, accordion
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", abreOuFechaResposta);
  }
});

function removeBotaoAtivo() {
  const buttons = document.querySelectorAll("[data-tab-button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("galeria__tabs__button--is-active");
  }
}

function escondeTodasAbas() {
  const tabsContainer = document.querySelectorAll("[data-tab-id");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("galeria__list--is-active");
  }
}

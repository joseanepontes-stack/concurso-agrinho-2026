// PEGAR AS BARRAS
const barras = document.querySelectorAll('.barra');

// FUNÇÃO DE ANIMAÇÃO
function animarBarras(){

  barras.forEach(barra => {

    // pega largura
    const largura =
      barra.getAttribute('data-largura');

    // aplica largura
    barra.style.width = largura;

  });

}

// EXECUTA AO ABRIR
window.onload = animarBarras;


// -------------------
// SIMULADOR
// -------------------

const slider =
  document.getElementById('slider');

const resultado =
  document.getElementById('resultado');

// EVENTO
slider.addEventListener('input', () => {

  const valor = slider.value;

  // BAIXO
  if(valor <= 30){

    resultado.innerHTML =
      "⚠️ Alto impacto ambiental";

  }

  // MÉDIO
  else if(valor <= 70){

    resultado.innerHTML =
      "🌿 Sustentabilidade Média";

  }

  // ALTO
  else{

    resultado.innerHTML =
      "✅ Fazenda sustentável";

  }

});

// BOTÃO SABER MAIS

const btnSaberMais =
document.getElementById("btnSaberMais");

const conteudoExtra =
document.getElementById("conteudoExtra");

if(btnSaberMais && conteudoExtra){

  btnSaberMais.addEventListener("click", () => {

    if(
      conteudoExtra.style.display === "none" ||
      conteudoExtra.style.display === ""
    ){

      conteudoExtra.style.display = "block";
      btnSaberMais.innerHTML = "❌ Fechar";

    }else{

      conteudoExtra.style.display = "none";
      btnSaberMais.innerHTML = "📖 Saber Mais";

    }

  });

}
console.log("JavaScript carregado!");

// BOTÃO FAZENDA PARANÁ

const btnFazendaParana =
document.getElementById("btnFazendaParana");

const conteudoFazendaParana =
document.getElementById("conteudoFazendaParana");

if(btnFazendaParana && conteudoFazendaParana){

btnFazendaParana.addEventListener("click", () => {

```
if(
  conteudoFazendaParana.style.display === "none" ||
  conteudoFazendaParana.style.display === ""
){

  conteudoFazendaParana.style.display = "block";
  btnFazendaParana.innerHTML =
  "❌ Fechar";

}else{

  conteudoFazendaParana.style.display =
  "none";

  btnFazendaParana.innerHTML =
  "📖 FAZENDA SUSTENTÁVEL NO PARANÁ";

}
```

});

}

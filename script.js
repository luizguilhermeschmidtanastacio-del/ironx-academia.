/* =========================================
   MENU MOBILE
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


/* Fecha o menu quando clicar em algum link */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


/* =========================================
   MODAL DE SERVIÇOS
========================================= */

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");


function mostrarServico(servico) {

    modalTitle.textContent = servico;

    const mensagens = {

        "Musculação":
            "A IRONX possui equipamentos para diferentes objetivos e níveis de treinamento.",

        "Treino Funcional":
            "Treinos funcionais ajudam a desenvolver força, resistência, equilíbrio e mobilidade.",

        "Avaliação Física":
            "A avaliação ajuda a acompanhar sua evolução e estabelecer objetivos.",

        "Personal Trainer":
            "Tenha acompanhamento individual durante seus treinos."
    };

    modalText.textContent =
        mensagens[servico] ||
        "Conheça mais sobre este serviço da IRONX.";

    modal.classList.add("active");
}


function fecharModal() {

    modal.classList.remove("active");

}


/* Fecha o modal clicando fora */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        fecharModal();

    }

});


/* =========================================
   SELEÇÃO DE PLANO
========================================= */

function selecionarPlano(plano) {

    modalTitle.textContent = "Plano " + plano;

    modalText.textContent =
        `Você selecionou o Plano ${plano}. Entre em contato com a IRONX para realizar sua contratação.`;

    modal.classList.add("active");

}


/* =========================================
   FORMULÁRIO
========================================= */

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    modalTitle.textContent = "Mensagem enviada!";

    modalText.textContent =
        `Obrigado, ${nome}! Sua mensagem foi recebida pela IRONX.`;

    modal.classList.add("active");

    form.reset();

});


/* =========================================
   CONTADOR
========================================= */

const counters = document.querySelectorAll(".counter");

let contadorIniciado = false;


function iniciarContadores() {

    if (contadorIniciado) return;

    const stats = document.querySelector(".stats");

    const posicao = stats.getBoundingClientRect().top;

    if (posicao < window.innerHeight) {

        contadorIniciado = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let numero = 0;

            const velocidade = Math.max(
                1,
                Math.floor(target / 100)
            );

            const atualizar = () => {

                numero += velocidade;

                if (numero < target) {

                    counter.textContent = numero;

                    setTimeout(atualizar, 20);

                } else {

                    counter.textContent = target + "+";

                }

            };

            atualizar();

        });

    }

}


window.addEventListener("scroll", iniciarContadores);


/* =========================================
   ANIMAÇÃO AO APARECER
========================================= */

const elementos = document.querySelectorAll(
    ".card, .service-card, .plan, .about-content"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


elementos.forEach(elemento => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(30px)";

    elemento.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(elemento);

});
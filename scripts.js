// Função para rolar suavemente para o topo quando clicar no botão "Voltar ao Topo"
document.getElementById('myBtn').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Controla a visibilidade do botão "Voltar ao Topo" durante o scroll
window.addEventListener('scroll', function () {
    const myBtn = document.getElementById('myBtn');
    myBtn.style.display = window.scrollY > 20 ? 'block' : 'none';
});

// Função para recarregar a página e rolar para o topo
function reloadPage() {
    window.scrollTo(0, 0); // Rolagem para o topo
    location.reload(); // Recarregar a página
}

// Lógica para ocultar/mostrar a barra de navegação ao rolar a página
const nav = document.querySelector('nav');
document.addEventListener("scroll", e => {
    if (scrollY > 100) {
        if (scrollY > window.innerHeight) {
            nav.classList.add('invisible');
        } else {
            nav.classList.add('bg-gray-900');
            nav.classList.remove('invisible');
        }
    } else {
        nav.classList.remove('bg-gray-900');
        nav.classList.remove('invisible');
    }
});

// Lógica para ocultar/mostrar a imagemPerfil ao clicar no botão btnVisualizar
const btnVisualizar = document.getElementById('btnVisualizar');
const imagemPerfil = document.getElementById('imagemPerfil');
btnVisualizar.addEventListener('click', function () {
    imagemPerfil.classList.toggle('hidden');
    imagemPerfil.classList.toggle('fadeIn'); // Adiciona uma classe para um efeito de fadeIn
});

// Função para voltar ao topo quando o botão é clicado
function topFunction() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para outros navegadores
}

// Lógica para mostrar/ocultar o botão de voltar ao topo conforme a posição na página
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const myButton = document.getElementById("myBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.getElementById('imageContainer');
    const images = imageContainer.querySelectorAll('img');
    let currentImageIndex = 0;

    const changeImageButton = document.getElementById('changeImageButton');

    changeImageButton.addEventListener('click', function () {
        images[currentImageIndex].classList.toggle('active-img'); // Remove a classe da imagem atual

        // Incrementa o índice para a próxima imagem ou volta ao início se alcançar o final
        currentImageIndex = (currentImageIndex + 1) % images.length;

        images[currentImageIndex].classList.toggle('active-img'); // Adiciona a classe à próxima imagem
    });
});


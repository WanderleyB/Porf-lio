    var header           = document.getElementById('header');
    var navigationHeader = document.getElementById('navigation_header');
    var content          = document.getElementById('container');
    var showSidebar      = false;

    function toggleSidebar()
    {
        showSidebar = !showSidebar;
        if(showSidebar)
        {
            navigationHeader.style.marginLeft = '-10vw';
            navigationHeader.style.animationName = 'showSidebar';
            content.style.filter = 'blur(2px)';
        }
        else
        {
            navigationHeader.style.marginLeft = '-100vw';
            navigationHeader.style.animationName = '';
            content.style.filter = '';
        }
    }

    function closeSidebar()
    {
        if(showSidebar)
        {
            showSidebar = true;
            toggleSidebar();
        }
    }

    window.addEventListener('resize', function(event) {
        if(window.innerWidth > 768 && showSidebar) 
        {  
            showSidebar = true;
            toggleSidebar();
        }
    });

    function typeWrite(elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = ' ';
        textoArray.forEach(function(letra, i) {
    
            setTimeout(function() {
                elemento.innerHTML += letra;
            }, 150 * i)
    
        });
    }
    const titulo = document.querySelector('span');
    typeWrite(titulo);

    


    // Função para observar os elementos com a classe 'scroll'
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".scroll"); // Seleciona todos os cards que têm a classe 'scroll'

    // Opções do Intersection Observer
    const options = {
        threshold: 0.2 // Define que 20% do card deve estar visível antes de ativar a classe
    };

    // Função callback do observer
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scrolled-in'); // Adiciona a classe 'scrolled-in' quando visível
                observer.unobserve(entry.target); // Para de observar o card quando já estiver visível
            }
        });
    }, options);

    // Adiciona o observer para cada card
    cards.forEach(card => {
        observer.observe(card);
    });
});

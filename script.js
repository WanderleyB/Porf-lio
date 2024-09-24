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

    


document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".scroll"); 

    
    const options = {
        threshold: 0.2 // 
    };


    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scrolled-in'); 
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    
    cards.forEach(card => {
        observer.observe(card);
    });
});

document.querySelectorAll('.hotbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); 

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId); 

        targetElement.scrollIntoView({
            behavior: 'smooth', 
            block: 'start' 
        });
    });
});

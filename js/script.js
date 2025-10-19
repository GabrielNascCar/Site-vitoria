// Menu mobile toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navbar = document.querySelector('.navbar');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Efeito de rolagem suave para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Mudar navbar ao rolar - Efeito melhorado
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.padding = '0.8rem 0';
    }
});

// Adicionar classe inicial
window.addEventListener('load', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }
});

// Formulário de contato
const contactForm = document.getElementById('form-contato');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Coletar dados do formulário
        const nome = document.getElementById('nome').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;
        
        // Validação básica
        if (!nome || !assunto || !mensagem) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Formatar mensagem para WhatsApp (formato simplificado)
        const texto = `Olá! Me chamo ${nome}, assunto: ${assunto}. ${mensagem}`;
        
        // Número de telefone (formato internacional sem espaços ou caracteres especiais)
        const telefone = '558486743782';
        
        // Codificar mensagem para URL
        const mensagemCodificada = encodeURIComponent(texto);
        
        // Criar link do WhatsApp
        const urlWhatsApp = `https://wa.me/${telefone}?text=${mensagemCodificada}`;
        
        // Abrir WhatsApp em nova aba
        window.open(urlWhatsApp, '_blank');
        
        // Limpar formulário
        contactForm.reset();
    });
}

// Animação de elementos ao rolar
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.formacao-card, .destaque, .habilidade-item');
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});
// const menuBtn = document.getElementById("menu-btn")
// const navLinks = document.getElementById("nav-links-mobile")
// const menuBtnIcon = menuBtn.querySelector("i")


// menuBtn.addEventListener("click", (e) =>{
//     navLinks.classList.toggle("open");
//     const isOpen = navLinks.classList.contains("open");
//     menuBtnIcon.setAttribute(
//         "class",
//         isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
//     )
// });



//---------------------------------------------------------------------------------------


const animacao = {
    distance: "50px", 
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".home-img img", {
    ...animacao,
    origin: "right",
    delay: 500,
});

ScrollReveal().reveal(".home-conteudo h1", {
    ...animacao,
    origin: "right",
    delay: 1000,
})

ScrollReveal().reveal(".home-conteudo p", {
    ...animacao,
    delay: 1000,
    interval: 500,
})

ScrollReveal().reveal(".aluguel-passos .passos", {
    ...animacao,
    interval: 500,
})

ScrollReveal().reveal(".servicos-img", {
    ...animacao,
    origin: "left",
    delay: 500,
});

ScrollReveal().reveal(".servicos h3", {
    ...animacao,
    delay: 1000
});

ScrollReveal().reveal(".servicos h2", {
    ...animacao,
    delay: 1500
});

ScrollReveal().reveal(".servicos article", {
    ...animacao,
    delay: 2000,
    interval: 500,
});

ScrollReveal().reveal(".experiencia-conteudo .icons-conteudo", {
    ...animacao,
    duration: 1500,
    interval: 750,
});

ScrollReveal().reveal(".download-img-mobile img", {
    ...animacao,
    delay: 1500
});

ScrollReveal().reveal(".download-conteudo h2", {
    ...animacao,
    delay: 500,
    origin: "right",
});

ScrollReveal().reveal(".download-conteudo p", {
    ...animacao,
    delay: 1000,
});

ScrollReveal().reveal(".download-imagem img", {
    ...animacao,
    delay: 2000,
    origin: "right",
});
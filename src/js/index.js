const perguntas = document.querySelectorAll(".pergunta");
console.log(perguntas);

perguntas.forEach(function (item) {
    item.addEventListener("click", function () {
        const itemAbertoAgora = document.querySelector(".aberto");

        if (itemAbertoAgora) {
            itemAbertoAgora.classList.remove("aberto");
        }

        item.classList.add("aberto");
    });
})
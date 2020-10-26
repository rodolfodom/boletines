//obtener elementos .close
let closes = document.querySelectorAll(".close");
//recorrer elemntos
closes.forEach(function(close) {
    // evadir evento por defecto
    close.addEventListener("click", function(ev) {
        ev.preventDefault();
        //retirar clases de efectos del content
        let content = document.querySelector(".content");
        content.classList.remove("animate__animated");
        content.classList.remove("animate__backInDown");
        //agrgar las nuevas clases de efectos
        content.classList.add("animate__animated");
        content.classList.add("animate__backOutUp");
        //establecemos tiempo de espera para redireccionar
        setTimeout(function() {
            location.href = "/";
        }, 600);

        return false;
    });
});
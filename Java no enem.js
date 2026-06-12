const texto = document.querySelector(".girar");

texto.addEventListener("click", () => {
    texto.classList.add("animar");

    setTimeout(() => {
        texto.classList.remove("animar");
    }, 1000);
});

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("temqueentrarnego").addEventListener("submit",funciton(e)); {
        e.preventDefault();

        let email = document.getElementById("Email");
        let senha = document.getElementById("Senha");
        
        if (email.value !== "" && senha.value !== ""){
            window.location.href = "Enem.html";
        }
        else{
            alert("Preencha com seus dados certo, seu animal");
        }
    }
})
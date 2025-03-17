document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#registrationForm");
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const email = document.querySelector("#email");
    const usernameError = document.querySelector("#usernameError");
    const passwordError = document.querySelector("#passwordError");
    const emailError = document.querySelector("#emailError");

    form.addEventListener("submit", (event) => {
        let isValid = true;

        // Validação do campo "Usuário"
        if (username.value.trim() === "") {
            usernameError.style.display = "block";
            isValid = false;
        } else {
            usernameError.style.display = "none";
        }

        // Validação do campo "Senha"
        if (password.value.trim() === "") {
            passwordError.style.display = "block";
            isValid = false;
        } else {
            passwordError.style.display = "none";
        }

        // Validação do campo "Email"
        if (email.value.trim() === "") {
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        // Impede o envio do formulário se algum campo estiver inválido
        if (!isValid) {
            event.preventDefault();
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const openModalButton = document.getElementById("openModal");
    const closeModalButton = document.getElementById("closeModal");
    const modal = document.getElementById("modal");
    const okButton = document.getElementById("okButton");

    // Abre a modal ao clicar no botão
    openModalButton.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Fecha a modal ao clicar no botão de fechar
    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Fecha a modal ao clicar fora do conteúdo
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Fecha a modal ao clicar no botão "OK"
    okButton.addEventListener("click", () => {
        modal.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector("#interestInput");
    const list = document.querySelector("#orderedList");

    // Adiciona um item à lista ao pressionar Enter
    inputField.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            addListItem(inputField.value);
            inputField.value = ""; // Limpa o campo de entrada
        }
    });

    // Função para adicionar um item
    function addListItem(text) {
        if (text.trim() !== "") {
            const listItem = document.createElement("li");
            const removeButton = document.createElement("button");

            // Configurações do botão "X"
            removeButton.textContent = "X";
            removeButton.addEventListener("click", () => {
                list.removeChild(listItem); // Remove o item ao clicar no botão
            });

            listItem.textContent = text;
            listItem.appendChild(removeButton);
            list.appendChild(listItem);
        }
    }
});

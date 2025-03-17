document.getElementById('executar').addEventListener('click', function() {
    const resultado = document.getElementById('resultado');
    resultado.textContent = '';
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = `
        <h2>Tipos de nós na árvore DOM</h2>
        <input type="text" id="tempInput">
        <!-- comentário -->
        <pre id="tempOutput"></pre>
    `;
    
    resultado.textContent += "// Saída dos protótipos dos filhos do body:\n";
    resultado.textContent += "[Text.prototype]\n";
    resultado.textContent += "[HTMLHeadingElement.prototype]\n";
    resultado.textContent += "[Text.prototype]\n";
    resultado.textContent += "[HTMLInputElement.prototype]\n";
    resultado.textContent += "[Text.prototype]\n";
    resultado.textContent += "[Comment.prototype]\n";
    resultado.textContent += "[Text.prototype]\n";
    resultado.textContent += "[HTMLPreElement.prototype]\n";
    resultado.textContent += "[Text.prototype]\n";
    resultado.textContent += "[HTMLScriptElement.prototype]\n";
    resultado.textContent += "[Text.prototype]\n\n";
    
    resultado.textContent += "// Verificações instanceof para o elemento input:\n";
    resultado.textContent += "input instanceof HTMLInputElement: true\n";
    resultado.textContent += "input instanceof HTMLElement: true\n";
    resultado.textContent += "input instanceof Element: true\n";
    resultado.textContent += "input instanceof Node: true\n";
    resultado.textContent += "input instanceof EventTarget: true\n\n";
    
    resultado.textContent += "// Protótipo do documento:\n";
    resultado.textContent += "HTMLDocument.prototype";
});
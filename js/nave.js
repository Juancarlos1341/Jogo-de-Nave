elementoPalco = document.getElementById("palco")
nave = document.getElementById("nave")

elementoPalco.addEventListener('mousemove', (event) => {
    // Calcular margens dinâmicas
    const margem_da_largura = elementoPalco.clientWidth / 3 + 75;
    const margem_da_altura = elementoPalco.clientHeight / 3.5 - 40;

    // Calcular as coordenadas ajustadas
    const cordenadaY = event.clientY - margem_da_altura - nave.clientHeight / 2; // Cima e Baixo
    const cordenadaX = event.clientX - margem_da_largura - nave.clientWidth /2; // Esquerda e direita

    // Definir limites dinâmicos
    const altura = elementoPalco.clientHeight - nave.clientHeight + 25; // Limite inferior para cima e baixo
    const largura = elementoPalco.clientWidth - nave.clientWidth + 15; // Limite inferior para esquerda e direita

    // Verificar e ajustar a posição da nave
    if (cordenadaX >= -55 && cordenadaX <= largura) {
        nave.style.left = cordenadaX + 'px';
    }

    if (cordenadaY >= -30 && cordenadaY <= altura) {
        nave.style.top = cordenadaY + 'px';
    }

    // Console logs para debug
    console.log("Posição da nave X - " + nave.style.left);
    console.log("Posição da nave Y - " + nave.style.top);
});



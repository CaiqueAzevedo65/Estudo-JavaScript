function iniciar() {
    const slide = document.getElementById("slide");
    const imagens = slide.querySelectorAll("img");
    let indice = 0;

    // Mostra a primeira imagem
    imagens[indice].classList.add("active");

    const texto = document.createElement("p");
    texto.textContent = imagens[indice].getAttribute('alt') // textContent: propriedade que define o texto de um elemento
    slide.prepend(texto); // prepend: método que adiciona um elemento como o primeiro filho de outro elemento

    // Intervalo automático
    setInterval( () => {
        // Remove a classe "active" da imagem atual
        imagens[indice].classList.remove("active")

        // % modulo retorna o resto da divisão
        // indice % 3 -> só pode resultar 0, 1 ou 2 (loop infinito)
        // (indice + 1)    (indice + 1) % 3    Resultado
        // 0 + 1 = 1         1 % 3 = 1         1
        // 1 + 1 = 2         2 % 3 = 2         2
        // 2 + 1 = 3         3 % 3 = 0         0

        // dividir 2 por 3:
        // 2 dividido por 3 = 0
        indice = (indice + 1) % imagens.length; // Atualiza o índice para a próxima imagem

        // Adiciono a classe "active" à nova imagem
        imagens[indice].classList.add("active")

    }, 3000)
}

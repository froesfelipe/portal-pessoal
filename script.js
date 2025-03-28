function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    const img = document.querySelector("#profile img");

    if (html.classList.contains('light')) {
        img.setAttribute('src', 'assets/avatar-light.png');
        img.setAttribute('alt', 'Felipe Froes sorrindo com óculos e camisa preta em fundo amarelo');
    } else {
        img.setAttribute('src', 'assets/avatar1.png');
        img.setAttribute('alt', 'Felipe Froes sorrindo de terno cinza, camisa branca e gravata vermelha em fundo cinza');
    }
}
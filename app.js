const h1 = document.querySelector('h1');
const button = document.querySelector('button');

function randomColor() {
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);

    return `rgb(${R}, ${G}, ${B})`;
}

button.addEventListener("click", () => {
    const color = randomColor();
    h1.innerText = color;
    document.body.style.backgroundColor = color;
});
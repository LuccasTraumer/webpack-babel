import '../css/styles.scss';
import img from '../assets/bg.jpg';

const nome = 'Lucas';

document.querySelector('#nome').innerHTML = nome;
document.querySelector('#nome').classList.add('title');

const imgComponent = () => {
    const elImg = new Image(300, 150);
    elImg.src = img;
    return elImg;
}

document.body.appendChild(imgComponent());

console.warn("Funcionou!!");

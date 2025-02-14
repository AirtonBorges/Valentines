import { Application } from '@splinetool/runtime';
import { DetectDeviceOrientation, Orientation } from "detect-device-orientation";

import './style.css';

const listaShake = [
    { numero: 100, atingiu: false }
    , { numero: 103, atingiu: false }
    , { numero: 105, atingiu: false }
]

let carregou = false;
let mensagem = "Mais um pouco!"

const titulo = document.getElementById('titulo') as HTMLHeadingElement;
const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;

const app = new Application(canvas);

alert("Ei, balança um pouco o celular, que eu vou te dar um presente!");

const detectDeviceOrientation = new DetectDeviceOrientation();
detectDeviceOrientation.init(async (orientation: Orientation) => {
    const numero = listaShake.find(p => p.numero === Math.round(orientation.alpha));
    const antingiuTodos = listaShake.every(p => p.atingiu);

    if (numero && numero.atingiu === false) {
        mensagem += "!";
        titulo.innerText = mensagem
        numero.atingiu = true;
    }

    if (antingiuTodos && !carregou) {
        carregou = true;
        await app.load('https://prod.spline.design/XshLL8MCRiz3Wg-q/scene.splinecode');
        alert("Te amo muito pqena, agora vc tem flores virtuais que duram pra sempre");
        titulo.innerText = "Para: Julia Mariana da Silva";
    }
});

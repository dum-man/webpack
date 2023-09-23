import hello from "./test";
import "./styles/index.scss";
import img from "./assets/woman.jpg";

const image = document.querySelector("img");

image.src = img;
image.width = 300;

console.log(hello());

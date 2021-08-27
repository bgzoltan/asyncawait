import { sequential } from "./sequential.js";
import { concurrent } from "./concurrent.js";
import { parallel } from "./parallel.js";

const list = document.getElementById("list");
const seqButton = document.getElementById("sequentialButton");
const conButton = document.getElementById("concurrentButton");
const parButton = document.getElementById("parallelButton");
const message = document.getElementById("message");

list.style.fontSize = "30px";
list.style.listStyle = "none";

seqButton.addEventListener("click", sequential);
conButton.addEventListener("click", concurrent);
parButton.addEventListener("click", parallel);

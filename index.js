import { sequential } from "./sequential.js";
import { concurrent } from "./concurrent.js";
import { parallel } from "./parallel.js";

const seqButton = document.getElementById("sequentialButton");
const conButton = document.getElementById("concurrentButton");
const parButton = document.getElementById("parallelButton");
const message = document.getElementById("message");
const result = document.getElementById("result");

seqButton.addEventListener("click", () => sequential(message, result));
conButton.addEventListener("click", () => concurrent(message, result));
parButton.addEventListener("click", () => parallel(message, result));

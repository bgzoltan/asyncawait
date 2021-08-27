import { hello1 } from "./hello1.js";
import { hello2 } from "./hello2.js";

export function parallel(message, result) {
  async function parallel() {
    let secondsStart = new Date().getSeconds();
    await Promise.all([
      (async () => console.log(await hello1()))(),
      (async () => console.log(await hello2()))(),
    ]);
    let secondsEnd = new Date().getSeconds();
    console.log(`It has taken: ${secondsEnd - secondsStart}s`);
    result.innerText = `It has taken: ${secondsEnd - secondsStart} s`;
  }
  message.innerHTML = "<h1>The two parallel functions are running...</h1>";
  result.innerText = ``;
  console.log("Parallel function");
  parallel();
}

import { hello1 } from "./hello1.js";
import { hello2 } from "./hello2.js";

export function concurrent(message, result) {
  async function concurrent() {
    let secondsStart = new Date().getSeconds();

    const promise1 = hello1();
    const promise2 = hello2();
    console.log(await promise1);
    console.log(await promise2);

    let secondsEnd = new Date().getSeconds();
    result.innerText = `It has taken: ${secondsEnd - secondsStart} s`;
  }
  message.innerHTML = "<h1>The two concurrent functions are running</h1>";
  result.innerText = ``;
  console.log("Concurrent function");
  concurrent();
}

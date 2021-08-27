import { hello1 } from "./hello1.js";
import { hello2 } from "./hello2.js";

export function sequential(message, result) {
  async function sequent() {
    let secondsStart = new Date().getSeconds();

    const promise1 = await hello1();
    console.log(promise1);
    const promise2 = await hello2();
    console.log(promise2);

    let secondsEnd = new Date().getSeconds();
    console.log(`It has taken: ${secondsEnd - secondsStart} s`);
    result.innerText = `It has taken: ${secondsEnd - secondsStart} s`;
  }
  message.innerHTML = "<h1>The two sequential functions are running...</h1>";
  result.innerText = ``;
  console.log("Sequential function ***");
  sequent();
}

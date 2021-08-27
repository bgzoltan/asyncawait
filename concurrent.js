import { hello1 } from "./hello1.js";
import { hello2 } from "./hello2.js";

export function concurrent() {
  async function concurrent() {
    let secondsStart = new Date().getSeconds();

    const promise1 = hello1();
    const promise2 = hello2();
    console.log(await promise1);
    console.log(await promise2);

    let secondsEnd = new Date().getSeconds();
    console.log(`It has taken: ${secondsEnd - secondsStart} s`);
  }
  console.log("Concurrent function");
  concurrent();
}

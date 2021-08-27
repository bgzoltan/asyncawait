import { hello1 } from "./hello1.js";
import { hello2 } from "./hello2.js";

export function sequential() {
  async function sequent() {
    let secondsStart = new Date().getSeconds();

    const promise1 = await hello1();
    console.log(promise1);
    const promise2 = await hello2();
    console.log(promise2);

    let secondsEnd = new Date().getSeconds();
    console.log(`It has taken: ${secondsEnd - secondsStart} s`);
  }
  console.log("Sequential function");
  sequent();
}

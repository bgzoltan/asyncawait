import { hello1 } from "./hello1.js";
import { hello2 } from "./hello2.js";

export function parallel() {
  async function parallel() {
    let secondsStart = new Date().getSeconds();
    await Promise.all([
      (async () => console.log(await hello1()))(),
      (async () => console.log(await hello2()))(),
    ]);
    let secondsEnd = new Date().getSeconds();
    console.log(`It has taken: ${secondsEnd - secondsStart}s`);
  }
  console.log("Parallel function");
  parallel();
}

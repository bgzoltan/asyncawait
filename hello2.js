export function hello2() {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("Hello 1 secundum!");
    }, 1000);
  });
}

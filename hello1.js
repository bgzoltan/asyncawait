export function hello1() {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("Hello 2 secundum!");
    }, 2000);
  });
}

// SIMPLE GENERIC

function echo(data:any) {
  return data;
}

console.log(echo("Ricardo"));
console.log(echo(40));
console.log(echo({ name: "Richardo", age: 44 }));
// BETTER GENERIC

function betterEcho<z>(data:z) {
  return data;
}

console.log(betterEcho("Chao").length);
console.log(betterEcho<number>(33));
console.log(betterEcho<object>({ name: "Jokic", age:22 }));

// BUILT-IN GENERICS
const testResults: Array<number> = [2.22, 9.09];
testResults.push(8.888);
console.log(testResults);

// Arrays
function printAll<Z>(args:Z[]) {
  args.forEach(el => console.log(el));
}

printAll<any>(["Ferguson", "Holloway", 243]);

// Generic Types
const echo2:<G>(data:G) => G = betterEcho;

console.log(echo2<string>("That's Some Shit!"));

// Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
  baseVal: T;
  multiplyVal: U;
  calculate():number {
    return +this.baseVal * +this.multiplyVal;
  }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseVal = "11";
simpleMath.multiplyVal = 33;
console.log(simpleMath.calculate());
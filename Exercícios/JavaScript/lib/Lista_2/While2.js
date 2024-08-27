const N = 10;
let PA = 0;
let PG = 1;
let i = 0;

while (i <= N) {
  console.log("i:", i);
  PA += 2 * i;
  PG *= 2;
  console.log("PA: ", PA);
  console.log("PG: ", PG);
  console.log("---");
  i++;
}

console.log(PA);
console.log(PG);
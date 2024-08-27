const   N = 10;
let     PA = 0;
let     PG = 1;

for(let i = 0; i<=N; i++) {
    console.log("i:", i);
    PA += 2*i;
    PG *= 2;
    console.log("PA: ", PA);
    console.log("PG: ", PG);
    console.log("---");
}

console.log(PA);
console.log(PG);
const fs = require('fs');
const oscar = fs.readFileSync("./oscar_best_pictures.csv", 'utf8');
console.table(oscar);
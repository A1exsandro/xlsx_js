const xlsx = require("xlsx");

const wb = xlsx.readFile("alunosNow.xlsx");

console.log(wb.SheetNames);

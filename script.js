const xlsx = require("xlsx");

const wb = xlsx.readFile("alunosNow.xlsx");

const ws = wb.Sheets["AlunosNow"];

const data = xlsx.utils.sheet_to_json(ws);

console.log(data);

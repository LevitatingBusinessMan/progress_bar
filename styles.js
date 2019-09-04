const ProgressBar = require("./index.js");

const PB = new ProgressBar(100);

PB.done = 50;

for (let i = 0; i < 4; i++) {
    PB.setStyle(i);
    console.log(`${i}: ${PB.display()}`)
}

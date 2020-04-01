const ProgressBar = require("./index.js")

const PB = new ProgressBar(100)

console.log("Style 0:")
console.log(`${PB.display()} ${PB.percentage()}%`)
PB.add(2)
console.log(`${PB.display()} ${PB.percentage()}%`)
PB.add(59)
console.log(`${PB.display()} ${PB.percentage()}%`)
console.log()

PB.done = 24
PB.setStyle(1)
console.log("Style 1:")
console.log(`${PB.percentage()}% ${PB.display()} \n`)


PB.done = 86
PB.setStyle(2)
console.log("Style 2:")
console.log(`${PB.display()} \n`)

PB.done = 0
PB.setStyle(3)
console.log("Style 3:")
console.log(`${PB.display()}`)
PB.done = 23;
console.log(`${PB.display()}`)
console.log()

PB.done = 57;
//Styles can be functions
customStyle = function () {
    let style = this.styles[0]
    style.indicator = this.done + ">"
    return style
}
PB.setStyle( PB.addStyle(customStyle) )
console.log("Custom function style:")
console.log(`${PB.display()} ${PB.total}\n`)

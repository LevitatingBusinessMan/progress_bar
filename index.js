/*

let PB = new ProgressBar(tasks) //where tasks is an integer

PB.add(int)

*/

class ProgressBar {
    constructor(tasks) {
        this.total = tasks;
        this.done = 0;
        this.style = 0;

        this.styles = [
            {
                openBracket: "[",
                progress: "=",
                indicator: ">",
                left: " ",
                closeBracket: "]"
            },
            {
                progress: "█",
                left: "░",
            },
            {
                progress: "⬜",
                left: "⬛",
            },
            () => ({
                openBracket: "[",
                progress: "=",
                indicator: this.percentage() + "%",
                left: " ",
                closeBracket: "]"
            })
        ]
    }

    add(int) {
        this.done += int;
    }
    
    percentage() {
        return Math.floor( (this.done  / this.total)*100 );
    }

    display(length=50) {

        let style = this.styles[this.style];

        let {openBracket, progress, indicator, left, closeBracket} = (typeof style == "function" ? style.call(this) : style);

        return (openBracket ? openBracket : "")
            + progress.repeat( ((this.done/this.total) * length) - (indicator ? 0:1) )
            + (indicator ? indicator : "")
            + left.repeat( (1 - (this.done/this.total)) * length)
            + (closeBracket ? closeBracket : "");
    }

    setStyle(int) {
        this.style = int;
    }

    addStyle(style) {
        this.styles.push(style);

        //Return index
        return this.styles.length - 1;
    }

}

module.exports = ProgressBar;
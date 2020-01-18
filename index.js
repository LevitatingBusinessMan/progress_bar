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
                indicator: (this.percentage() == 0 ? "00" : this.percentage()) + "%",
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

		let barLength = Math.floor((this.done/this.total) * length);
		let emptyLength = length - barLength;

		//Remove 1 char that'll be replaced by the indicator
		if (barLength > 0 && indicator) {
			barLength -= indicator.length;
		}

		//Make space for indicator char which is present even when no progress is made
		if (barLength == 0 && indicator) {
			emptyLength -= indicator.length;
		}

        return (
        	(openBracket ? openBracket : "")
            + progress.repeat(barLength)
            + (indicator ? indicator : "")
            + left.repeat(emptyLength)
            + (closeBracket ? closeBracket : "")
        );
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
## Rein's progress bar module
This is a module for easily managing progress bars only. It is recommended to use this in combination with [node-draftlog](https://github.com/ivanseidel/node-draftlog).

### Usage:
```JS
const ProgressBar = require("progress_bar");

//Set total tasks needed to fill the bar
const PB = new ProgressBar(7);

//Do tasks

//Add 3 finished tasks to bar
PB.add(3);

//Or set it directly
PB.done = 3

//Log progress bar
console.log(`${PB.display()} ${PB.percentage()}% \n`)

// [=====================>                            ] 42%
```

#### Changing the bar style
Currentlty available styles:
![styles](https://i.imgur.com/Up35kJk.png)

Styles can be set like this:
`PB.setStyle( styleNumber )`

#### Adding a custom style
Object:
```JS
// A style consists of 5 settings
// The settings for this: `[===>   ]` bar are used in the example
// Create an object with the configuration (brackets and indicator may be undefined)
const customStyle = {
    openBracket: "[",
    progress: "=",
    indicator: ">",
    left: " " //space,
    closeBracket: "]"
}

//Add it to the class
let i = PB.addStyle(customStyle);

//Use the returned index to set the style
PB.setStyle( i );
```
Function:
```JS
//Styles don't have to be objects, the can also be functions.
//Here we have a style that shows the finished tasks as an indicator
//Styles can be functions

//Note that "this" will point to the ProgressBar class instance when run
customStyle = function () {
    //Copy style number 0
    let style = this.styles[0];
    
    //Edit the indicator to show the number of finished tasks
    style.indicator = this.done + ">";
    return style
}
//Set the style
PB.setStyle( PB.addStyle(customStyle) );
```

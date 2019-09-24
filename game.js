var newButton = new Button('My Button', click);
var button = new Button('Hello!');

var title = new Title('This is my game');

setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score++;
  scr.edit(score);
}

function click() {
  scr.edit('Clicked!')
}

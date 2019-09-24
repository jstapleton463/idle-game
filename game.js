var newButton = new Button('My Button', click);

setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score++;
  scr.edit(score);
}

function click() {
  scr.edit('Clicked!')
}

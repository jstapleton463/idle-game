var whatever = new Button("I don't know, mister", btn);

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);   // Create a button element
var hidden = new Button('Boo!');
hidden.hide();
var scr = new Text(score);                    // Create a text element

setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score++;
  scr.edit(score);
}

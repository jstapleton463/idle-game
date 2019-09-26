var message = new Text('Welcome!');
var button = new Button('Click Me!', add);
var count = 0;

function add() {
  count++;
  if(count < 10) {
    message.edit('You have clicked ' + count + 'times')
  } else {
    message.edit('You win!');
  }
}

var questions = 3;
var questionsLeft = ' [' + questions + ']';
var adjective = prompt('Name the first adjective that pops into your head' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ']';
var noun = prompt('Worst gift you have recieved' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ']';
var exlamation = prompt('What do you not say on your first date?' + questionsLeft);
var sentence = '<h2> Whenever he took you to a/an ' + adjective + ' restaurant and the waiter brought the ' + noun + ' he would say " ' + exlamation + '! You have ' + adjective + ' taste."</h2>';
document.write(sentence);
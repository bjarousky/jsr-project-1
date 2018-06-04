// add an event listener to the form to submit Dave's message
var classList = ['Bernardo', 'Brandon', 'Courtney', 'Joanna', 'Josh', 'Kaitlyn', 'Kalynne', 'Katie', 'Sonyl', 'Alex', 'Alexis', 'Andrew', 'Colburn', 'Courtney', 'David', 'Diana', 'Ejaz', 'Kevin', 'Myriam', 'Nikki', 'Tenny', 'Timothy'];
var userInput;
var chatInput = document.getElementById('chatInput');
var chatForm = document.getElementById('chatForm');
var userText = document.getElementById('user');
var bertText = document.getElementById('bot1');
var ernieText = document.getElementById('bot2');
var userLog = '';

bertLog = 'Bert here!<br/>';
ernieLog= 'It\'s Ernie!<br/>';
bertText.innerHTML = bertLog;
ernieText.innerHTML = ernieLog;

chatForm.addEventListener('submit', function(e){
  e.preventDefault();
  userInput = chatInput.value;
  userLog += userInput + '<br/>';
  userText.innerHTML = userLog;
  chatInput.value = '';
  botResponse(userInput);
})
// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs
function botResponse(input){
  if (input.match(/\bHey Bert\b/)){
    bertSay(input);
  } else if(input.match(/\bHey Ernie\b/)) {
    ernieSay(input);
  } else {
    var random = Math.floor(Math.random()*2);
    if (random === 0){
      bertLog += 'Are you talking to me?<br/>';
      bertText.innerHTML = bertLog;
    } else {
      ernieLog += 'Are you talking to me?<br/>';
      ernieText.innerHTML = ernieLog;
    }
  }
}

function inClassList(input){
  for (var i = 0; i < classList.length; i++){
    if (input.includes(classList[i])){
      return classList[i];
    }
  }
}

function bertSay(input){
  if (input.includes('what do you think about')){
    var name = inClassList(input);
    if (name === undefined){
      bertLog += 'I don\'t even know who that is! Maybe Ernie knows..';
      ernieSay(input);
    } else {
      bertLog += `I don\'t like anyone in this class! Especially not ${name}! Ernie do you agree?`;
      ernieSay(input);
    }
  } else if (input.includes('do you like JavaScript?')){
    bertLog += 'Meh, I guess it\'s alright.';
  } else if (input.includes('what are your plans this weekend')){
    bertLog += 'I think I\'ll just stay inside.';
  } else {
    bertLog += 'I don\'t know what you\'re trying to tell me.';
  }
  bertLog += '<br/>'
  bertText.innerHTML = bertLog;
}

function ernieSay(input){
  if (input.includes('what do you think about')){
    var name = inClassList(input);
    if (name === undefined){
      ernieLog += 'Hmm, I don\'t know. Are they in this class?';
    } else {
      ernieLog += `Oh ${name}? They\'re my favorite!`;
    }
  } else if (input.includes('do you like JavaScript?')){
    ernieLog += 'JavaScript is great! But I don\'t think Bert likes it very much..';
    bertSay(input);
  } else if (input.includes('what are your plans this weekend')){
    ernieLog += 'I don\'t know yet, maybe I\'ll check with Bert.';
    bertSay(input);
  } else {
    ernieLog += 'Sorry friend, I just don\'t know.';
  }
  ernieLog += '<br/>';
  ernieText.innerHTML = ernieLog;
}

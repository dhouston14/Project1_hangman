
// Javascript (Dom's Hangman)

var playGame = true;
var words = new Array("CHELSEA", "BULLDOG", "PULPFICTION", "ELEPHANT", "JORDANS");
var letters_guessed = "";
var answer = "";
var letters_clicked = "";
var wrongAnswers = 0;

function game(d) {
  if (playGame == false){
    return;
}

  if (letters_clicked.indexOf(d) != -1) {
    return;
}

letters_clicked += d;
document.game.usedLetters.value = letters_clicked;

if (letters_guessed.indexOf(d) != -1) {
 // correct letter guess
position = 0;
temp_mask = answer;

while (letters_guessed.indexOf(d, position) != -1) {
  position = letters_guessed.indexOf(d, position);
  end = position + 1;

  start_text = temp_mask.substring(0, position);
  end_text = temp_mask.substring(end, temp_mask.length);

  temp_mask = start_text + d + end_text;
  position = end;
  }

  answer = temp_mask;
  document.game.displayWord.value = answer;

    if (answer.indexOf("#") == -1) {
      alert("Congrats! You have Won. Drinks on the house!");
      console.log("Game Complete...");
      playGame = false;
    }
    }else{
    // incorrect letter guess
      wrongAnswers += 1;

    if (wrongAnswers == 10) {
      // GAME OVER
      alert("Oh buddy you lost, here's a ribbon on accomplishment");
      console.log("GAME OVER...");
      playGame = false;
    }
  }
}

function selectWord() {
  playGame = true;
  random_number = Math.round(Math.random() * (words.length - 1));
  letters_guessed = words[random_number];
  // display masked word
  masked_word = hideAnswer(letters_guessed);
  document.game.displayWord.value = masked_word;
  answer = masked_word;
}

function hideAnswer(m) {
  hide = "";
  word_length = m.length;

  for (i = 0; i < word_length; i ++) {
    hide += "#";
  }
    return hide;
}

function reset() {
  selectWord();
  document.game.usedLetters.value = "";
  letters_clicked = "";
  wrongAnswers = 0;

}

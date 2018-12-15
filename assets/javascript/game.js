window.onload = function() {

  // Set variables and arrays
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var targetWordList = ["Williamsburg", "Tumblr", "gastropub", "mumblecore", "fashion", "brunch", "vinyl", "tousled", "dreamcatcher", "letterpress", "distillery", "keffiyeh", "banjo", "Kickstarter", "asymmetrical", "denim", "messenger", "fingerstache", "Schlitz", "readymade", "YOLO", "bitters", "aesthetic", "typewriter", "flexitarian", "selfies", "sustainable", "Bushwick", "mixtape", "artisan", "wayfarers", "normcore", "meggings", "salvia", "Pinterest", "skateboard", "Etsy", "hashtag", "retro", "iPhone", "sriracha", "forage", "polaroid", "organic", "locavore", "keytar", "plaid", "authentic", "mustache", "ennui", "quinoa", "umami", "biodiesel", "ugh", "disrupt", "meh", "Banksy", "Pitchfork", "Helvetica", "cliche", "sartorial", "irony", "squid", "actually", "Brooklyn", "gentrify", "Austin", "twee", "DIY", "semiotics", "kitsch", "bespoke", "pickled", "cred", "viral", "Portland", "heirloom", "freegan", "seitan", "hoodie", "whatever", "cardigan", "Thundercats", "PBR", "literally", "pug", "leggings", "scenester", "tofu", "beard", "paleo", "ethical", "chia", "tattooed", "Vice",];

  var lettersGuessed
  var wins = 0;
  

  // setting up variables for html ids
  var wordHTM = document.getElementById("word");
  var lettersGuessedHTM = document.getElementById("lettersGuessed");
  var guessesRemainingHTM = document.getElementById("guessesRemaining");
  var winsHTM = document.getElementById("wins");

  winsHTM.textContent = 0;


  // set random targetWord and array of letters from that word
  var targetWord = targetWordList[Math.floor(Math.random() * targetWordList.length)];
  console.log("Target Word: "+targetWord);
  var targetWordLetters = [];
  for (i=0; i<targetWord.length; i++) {
    targetWordLetters.push(targetWord[i]);
  };
  console.log(targetWordLetters);

  // populating html word spot with underscores
  var temporaryWord = ["_"];
  for (i=0; i<(targetWordLetters.length-1); i++) {
    temporaryWord.push("_");
  }
  console.log (temporaryWord);
    for (i=0; i<temporaryWord.length; i++) {
    wordHTM.append(temporaryWord[i]);
    }
  

  // get user input, record in guess, see if it is in target word.
  document.onkeyup = function (event) {
    var guess = event.key;
    console.log("user guessed " + guess);
    var isInWord = targetWordLetters.includes(guess);
    console.log("guess is in word: "+isInWord);
    var letterCounter = targetWord.length;
    console.log("word is "+letterCounter+" letters");

  // set up if/thens to respond to correct and incorrect guesses
    if (isInWord) {
      console.log("it is in word");
      
      // thank you stack overflow for the following, pulls positions of any guessed word into index array
      var index = [];
      for (var i=0; i<targetWordLetters.length; i++){
        if (targetWordLetters[i] === guess) index.push(i);
      }
      console.log(index);

      // replace underscores with appropriate letters in wordHTM
      for (i=0; i<index.length; i++) {
        l=index[i];
        console.log(l);
        temporaryWord[l] = targetWordLetters[l];
        console.log(temporaryWord);
      }
        var underscoreWord = "";
        for (i=0; i<temporaryWord.length; i++){
          underscoreWord += temporaryWord[i];
        }
      
        wordHTM.innerHTML = underscoreWord;
      
        var wordNotDone = underscoreWord.includes("_");
        console.log("word is not done: "+wordNotDone);
        if (wordNotDone === false) {
          wins++;
          winsHTM.textContent = wins;
        }
        

      }
    }

  }








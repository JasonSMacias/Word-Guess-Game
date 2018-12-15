window.onload = function() {

  // Set variables and arrays
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var targetWordList = ["Williamsburg", "Tumblr", "gastropub", "mumblecore", "fashion", "brunch", "vinyl", "tousled", "dreamcatcher", "letterpress", "distillery", "keffiyeh", "banjo", "Kickstarter", "asymmetrical", "denim", "messenger", "fingerstache", "Schlitz", "readymade", "YOLO", "bitters", "aesthetic", "typewriter", "flexitarian", "selfies", "sustainable", "Bushwick", "mixtape", "artisan", "wayfarers", "normcore", "meggings", "salvia", "Pinterest", "skateboard", "Etsy", "hashtag", "retro", "iPhone", "sriracha", "forage", "polaroid", "organic", "locavore", "keytar", "plaid", "authentic", "mustache", "ennui", "quinoa", "umami", "biodiesel", "ugh", "disrupt", "meh", "Banksy", "Pitchfork", "Helvetica", "cliche", "sartorial", "irony", "squid", "actually", "Brooklyn", "gentrify", "Austin", "twee", "DIY", "semiotics", "kitsch", "bespoke", "pickled", "cred", "viral", "Portland", "heirloom", "freegan", "seitan", "hoodie", "whatever", "cardigan", "Thundercats", "PBR", "literally", "pug", "leggings", "scenester", "tofu", "beard", "paleo", "ethical", "chia", "tattooed", "Vice",];

  var lettersGuessed

  // setting up variables for html ids
  var wordHTM = document.getElementById("word");
  var lettersGuessedHTM = document.getElementById("lettersGuessed");
  var guessesRemainingHTM = document.getElementById("guessesRemaining");
  var winsHTM = document.getElementById("wins");


  // set random targetWord and array of letters from that word
  var targetWord = targetWordList[Math.floor(Math.random() * targetWordList.length)];
  console.log("Target Word: "+targetWord);
  var targetWordLetters = [];
  for (i=0; i<targetWord.length; i++) {
    targetWordLetters.push(targetWord[i]);
  };
  console.log(targetWordLetters);

  // populating html word spot with underscores
  for (i=0; i<targetWordLetters.length; i++) {
    wordHTM.append("_ ");
  }
  

  // get user input, record in guess, see if it is in target word.
  document.onkeyup = function (event) {
    var guess = event.key;
    console.log("user guessed " + guess);
    var isInWord = targetWordLetters.includes(guess);
    console.log("guess is in word: "+isInWord);
  }

  






}
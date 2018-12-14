window.onload = function() {

  // Set variables and arrays

  var targetWordList = ["Williamsburg", "Tumblr", "gastropub", "mumblecore", "fashion", "brunch", "vinyl", "tousled", "dreamcatcher", "letterpress", "distillery", "keffiyeh", "banjo", "Kickstarter", "asymmetrical", "denim", "messenger", "fingerstache", "Schlitz", "readymade", "YOLO", "bitters", "aesthetic", "typewriter", "flexitarian", "selfies", "sustainable", "Bushwick", "mixtape", "artisan", "wayfarers", "normcore", "meggings", "salvia", "Pinterest", "skateboard", "Etsy", "hashtag", "retro", "iPhone", "sriracha", "forage", "polaroid", "organic", "locavore", "keytar", "plaid", "authentic", "mustache", "ennui", "quinoa", "umami", "biodiesel", "ugh", "disrupt", "meh", "Banksy", "Pitchfork", "Helvetica", "cliche", "sartorial", "irony", "squid", "actually", "Brooklyn", "gentrify", "Austin", "twee", "DIY", "semiotics", "kitsch", "bespoke", "pickled", "cred", "viral", "Portland", "heirloom", "freegan", "seitan", "hoodie", "whatever", "cardigan", "Thundercats", "PBR", "literally", "pug", "leggings", "scenester", "tofu", "beard", "paleo", "ethical", "chia", "tattooed", "Vice",];

  var lettersGuessed


  // set random targetWord and array of letters from that word
    var targetWord = targetWordList[Math.floor(Math.random() * targetWordList.length)];
    console.log("Target Word: "+targetWord);
    var targetWordLetters = [];
    for (i=0; i<targetWord.length; i++) {
      targetWordLetters.push(targetWord[i]);
    };
    console.log(targetWordLetters);

  






}
var wordBank1 = ["Chat App", "Dating App", "Website", "Platformer Game", "Shooter Game"];
var wordBank2 = ["for", "and", "but for", "with", "without", "after", "through"];
var wordBank3 = ["Kids", "Teens", "Students", "Grandparents", "Parents"];
var previousSuggestions = [];
var count = 0;

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function generateIdea() {
    var roll1 = randInt(0, wordBank1.length);
    var roll2 = randInt(0,wordBank2.length);
    var roll3 = randInt(0, wordBank3.length);
    document.getElementById("form1").innerHTML = wordBank1[roll1];
    document.getElementById("form2").innerHTML = wordBank2[roll2];
    document.getElementById("form3").innerHTML = wordBank3[roll3];
    var ideaGenerated = wordBank1[roll1] + " " + wordBank2[roll2] + " " + wordBank3[roll3];
    updateArray(previousSuggestions, ideaGenerated);
    print(previousSuggestions);
}

function updateArray(a, gen){  
    a[count % 10]=gen;
    count=count+1;
}

function print(suggestions){
    var printedArray = suggestions.toString().replace(/,/g, '\n');
    printedArray += "\n";
    document.getElementById("previousSuggestions").innerHTML = printedArray;
}
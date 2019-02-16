var wordBank1 = ["Chat App", "Dating App", "Website", "Platformer Game", "Shooter Game"];
var wordBank2 = ["Kids", "Teens", "Students", "Grandparents", "Parents"];
var previousSuggestions = [];
var count = 0;

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function generateIdea() {
    var roll1 = randInt(0, 5);
    var roll2 = randInt(0, 5);
    document.getElementById("form1").innerHTML = wordBank1[roll1];
    document.getElementById("form2").innerHTML = wordBank2[roll2];
    var ideaGenerated = wordBank1[roll1] + " for " + wordBank2[roll2];
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
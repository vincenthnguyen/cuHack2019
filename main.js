var wordBank1 = ["Chat", "Dating", "Social", "Social Media", "Gaming", "Environmental", "Sports", "Tracking"];
var wordBank2 = ["Android App", "Website", "Platform", "Game", "iOS App", "Web App", "Simulator"]
var wordBank3 = ["for", "and", "but for", "with", "without", "after", "through"];
var wordBank4 = ["Kids", "Teens", "Students", "Grandparents", "Parents", "Gamers", "Musicians",
                "Professionals", "Farmers", "Doctors", "Streamers", "YouTubers", "Preschoolers"];
var previousSuggestions = [];
var count = 0;

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function generateIdea() {
    updateArray(previousSuggestions, rollIdeas());

    while (previousSuggestions[count%10] === previousSuggestions[count-1%10]){
        previousSuggestions[count] = rollIdeas()
    }
    print(previousSuggestions);
}

function rollIdeas(){
    var roll1 = randInt(0, wordBank1.length);
    var roll2 = randInt(0, wordBank2.length);
    var roll3 = randInt(0, wordBank3.length);
    var roll4 = randInt(0, wordBank4.length);
    
    document.getElementById("form1").innerHTML = wordBank1[roll1];
    document.getElementById("form2").innerHTML = wordBank2[roll2];
    document.getElementById("form3").innerHTML = wordBank3[roll3];
    document.getElementById("form4").innerHTML = wordBank4[roll4];

    return wordBank1[roll1] + " " + wordBank2[roll2] + " " + wordBank3[roll3] + " " + wordBank4[roll4];
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
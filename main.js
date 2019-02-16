var wordBank1 = ["Chat App", "Dating App", "Website", "Platformer Game", "Shooter Game"]
var wordBank2 = ["Kids", "Teens", "Students", "Grandparents", "Parents"]

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function generateIdea() {
    var roll1 = randInt(0, 5)
    var roll2 = randInt(0, 5)
    document.getElementById("form1").innerHTML = wordBank1[roll1]
    document.getElementById("form2").innerHTML = wordBank2[roll2]
}
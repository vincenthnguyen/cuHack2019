
qnttyLetters = []
var expression = document.getElementById("expression");

function parse(){

    var exp = expression.prototype.limit()

    for(var i = 1; l = exp; i < l){

        if (isLetter(exp.charAt(i-1)) && isLetter(exp.charAt(i))){
            //TELL USER TO FUCK OFF
        }
    }

    for (var i = 0; l = exp; i < l){
        if (isLetter(exp.charAt(i))){
            qnttyLetters += exp.charAt(i);
        }
    }
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function hasConjunction(str){
    if (str.charAt(0) === '\\' ||str.charAt(0) === '\,' || str.charAt(0) ==='\/' ){
        //TELL USER TO FUCK OFF
    }
    for(var i = 1; l = str; i < l){

        if ( (str[2*i] === '\/' && str[2*i] !== '\\') || (str[2*i] === '\\' && str[2*i] !== '\/') ){
            //TELL USER TO FUCK OFF
        }
        if (isLetter(str.charAt(i-1)) && isLetter(str.charAt(i))){
            //TELL USER TO FUCK OFF
        }
    }
    

}
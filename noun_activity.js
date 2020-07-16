class word {

    constructor(text, category){
        this.text=text;
        this.category=category;
    }
};

inini = new word("iNIni(wag) \n man (men)", "animate");
ikwe = new word("ikWE(wag \n woman (women)", "animate");
gwiiwizens = new word("GWIIwizens(ag) \n boy(s)", "animate");
ikwezens = new word("ikWEzens(ag) \n girl(s)", "animate");
abinoojiinh = new word("abiNOOjiinh(yag) \n child(ren)", "animate");
awesii = new word("aWEsii(yag) \n animal(s)", "animate");
mitig = new word("miTIG(oog) \n tree(s)", "animate");
manidoo = new word("maniDOO(g) \n spirit(s)", "animate");
giizhig = new word("giizhig \n day", "animate");
odaabaan = new word("oDAAbaan(ag) \n car(s)", "animate");
bineshiinh = new word("biNEshiinh(yag) \n bird(s)", "animate");
gaazhagens = new word("gaaZHAgens \n cat(s)", "animate");
animosh = new word("aniMOSH(ag) \n dog(s)", "animate");
mitigomizh = new word("mitigoMIZH(iig) \n oak tree(s)", "animate");
wiindigoo = new word("WIINdigoo(g) \n wendigo(s)", "animate");
animikii = new word("animiKII(g) \n thunderbird, thunder", "animate");
anishinaabe = new word("anishiNAAbe(g) \n Ojibwe, Native American", "animate");
bemaadizid = new word("bemaadizid (bemaadiziwaag) \n person (people)", "animate");
anang = new word("aNANG(oog) \n star(s)", "animate");
asin = new word("aSIN(iig) \n stone(s), rock(s)", "animate");
ayiii = new word("ayi'ii(n) \n thing(s), something", "inanimate");
waakaaigan = new word("waaKAA'igan(an) \n house(s), building(s)", "inanimate");
nibi = new word("niBI \n water", "inanimate");
babagiwayaan = new word("baBAgiwayaan(an) \n shirt(s)", "inanimate");
gichioodena = new word("gichi-ooDEna(wan) \n city (cities)", "inanimate");
miiziiwigamig = new word("miiZIIwigamig(oon) \n bathroom(s)", "inanimate");
mazinaateg = new word("mazinaateg(in) \n movie(s)", "inanimate");
makizin = new word("maKIzin(an) \n shoe(s)", "inanimate");
miijim = new word("miiJIM(an) \n food", "inanimate");
mazinaabikiwebinigan = new word("mazinaabikiwebinigan(an) \n computer", "inanimate");
giboodiyegwaazon = new word("GiBOOdiyegwaazon(an) \n pants", "inanimate");
mazinaigan = new word("mazina'igan(an) \n book(s), letter(s), document(s), paper(s)", "inanimate");

var wordList = [inini, ikwe, gwiiwizens, ikwezens, abinoojiinh, awesii, mitig, manidoo, giizhig, odaabaan, bineshiinh, gaazhagens, animosh, 
mitigomizh, wiindigoo, animikii, anishinaabe, bemaadizid, anang, asin, ayiii, waakaaigan, nibi, babagiwayaan, gichioodena, miiziiwigamig, 
mazinaateg, makizin, miijim, mazinaabikiwebinigan, giboodiyegwaazon, mazinaigan];

const attempts=1;
var attemptsLeft=0;
var start = false;
var end = true;
var wins=0;
var randomWord;
var guess = [];

function startGame() {
    attemptsLeft=attempts;
    start = false;
    randomWord= Math.floor(Math.random()*(wordList.length));
    guess = [];
    
    updateDisplay();
};

function updateDisplay(){
    console.log(wordList);
    console.log(randomWord);
    document.getElementById('word').innerText = wordList[randomWord].text;
    document.getElementById('wins').innerText = wins;
    if (attemptsLeft <=0) {
        end=true;
    }
};

document.onkeydown = function(event) {
    if (end) {
        startGame();
        end = false;
    }
    else {
        evaluateGuess(event);
    }
}
function guesses(input) {
    if(attemptsLeft > 0) {
        if (!start) {
            start = true;
        }
        if (guess.indexOf(input) === 65|| 73) {
            evaluateGuess(input);
        }
    }
    updateDisplay();
};

function evaluateGuess(input) {
    console.log(input);
    var selectedWord = wordList[randomWord];
    if(input.keyCode == 73 && selectedWord.category == "inanimate") {
        document.querySelector("#answer").innerHTML = `Correct! ${selectedWord.text} is ${selectedWord.category}!`;
        wins++;
        end = true;
    }

    else if(input.keyCode == 65 && selectedWord.category == "animate") {
        document.querySelector("#answer").innerHTML = `Correct! ${selectedWord.text} is ${selectedWord.category}!`;
        wins++;
        end = true;
    }

    else if(input.keyCode == 73 && selectedWord.category == "animate") {
        document.querySelector("#answer").innerHTML = `Incorrect! ${selectedWord.text} is actually ${selectedWord.category}.`;
        end = true;
    }

    else if(input.keyCode == 65 && selectedWord.category == "inanimate") {
        document.querySelector("#answer").innerHTML = `Incorrect! ${selectedWord.text} is actually ${selectedWord.category}.`;
        end = true;
    }
    updateDisplay();
};

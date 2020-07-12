class translation {
    constructor(english, ojibwe) {
        this.english=english;
        this.ojibwe=ojibwe;
    }
};
//f_ = 1st person, s_ = 2nd person, t_ = 3rd person, _s = singular, _p = plural, _i =inclusive, 0_ = inanimate, o = obviative
fs_ss = new translation("I see you (singular)", "giwaabamin");
ts_fi = new translation("The cat knows us (inclusive)", "gaazhagens gigikenimigonaan");
tp_to = new translation("They love him", "ozaagi'aawan");
sp_0s = new translation("You (plural) want food", "gimisawendanaawaa miijim");
fp_0s = new translation("We (exclusive) clean the house", "nimbiinichigenaan waakaa'igan");
fs_0s = new translation("I know it", "nigikendaan");
ts_to = new translation("The dog licks the boy (obv)", "animosh onooskwaada'aan gwiiwizensan");

var phrases = [fs_ss, ts_fi, tp_to, sp_0s, fp_0s, fs_0s, ts_to];

const attempts = 1;
var attemptsLeft = 0;
var start = false;
var end = true;
var wins = 0;
var randomPhrase;
var guess = [];

function startUp() {
    console.log('start');
    attemptsLeft = attempts;
    start = false;
    randomPhrase = Math.floor(Math.random()*(phrases.length));
    guess = [];

    updateDisplay();
}

function updateDisplay() {
    console.log(phrases);
    console.log(phrases[randomPhrase]);
    document.getElementById('phrase').innerText = phrases[randomPhrase].english;
    document.getElementById('wins').innerText = wins;
    if (attemptsLeft <= 0) {
        end = true;
    }
};

document.onkeydown = function(input) {
    if (end) {
        startUp();
        end = false;
    } else  {
        guesses(input)
    }
};

function guesses(input) {
    if(attemptsLeft > 0) {
        if (!start) {
            start = true;
        }
        if (input.keyCode === 13) {
            evaluateGuess();
        }
    }
    updateDisplay();
};

function evaluateGuess() {
    var selectedPhrase = phrases[randomPhrase];
    if (document.getElementById('input') === selectedPhrase.ojibwe) {
        wins++;
        end = true;
    }
    else {
        alert(`The correct answer is ${selectedPhrase.ojibwe}`);
        end = true;
    }
    updateDisplay();
};
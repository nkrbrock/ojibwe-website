function validate1(input) {
    if (input.value == "nimbimibatoo") {
       document.getElementById("word1").style.border='2px solid green';
    }
    else {
        document.getElementById("word1").style.border='2px solid red';
    }
}

function validate2(input) {
    if (input.value == "gidagindaaso") {
       document.getElementById("word2").style.border='2px solid green';
    }
    else {
        document.getElementById("word2").style.border='2px solid red';
    }
}

function validate3(input) {
    if (input.value == "bagizo") {
       document.getElementById("word3").style.border='2px solid green';
    }
    else {
        document.getElementById("word3").style.border='2px solid red';
    }
}

function validate4(input) {
    if (input.value == "gibabaamosemin") {
       document.getElementById("word4").style.border='2px solid green';
    }
    else {
        document.getElementById("word4").style.border='2px solid red';
    }
}

function validate5(input) {
    if (input.value == "gaagiigidowag") {
       document.getElementById("word5").style.border='2px solid green';
    }
    else {
        document.getElementById("word5").style.border='2px solid red';
    }
}

function validate6(input) {
    if (input.value == "ginibaam") {
       document.getElementById("word6").style.border='2px solid green';
    }
    else {
        document.getElementById("word6").style.border='2px solid red';
    }
}

function validate7(input) {
    if (input.value == "nindagindaasomin") {
       document.getElementById("word7").style.border='2px solid green';
    }
    else {
        document.getElementById("word7").style.border='2px solid red';
    }
}

function validate8(input) {
    if (input.value == "nimbabaamose") {
       document.getElementById("word8").style.border='2px solid green';
    }
    else {
        document.getElementById("word8").style.border='2px solid red';
    }
}

function validate9(input) {
    if (input.value == "nibaawag") {
       document.getElementById("word9").style.border='2px solid green';
    }
    else {
        document.getElementById("word9").style.border='2px solid red';
    }
}

function validate10(input) {
    if (input.value == "gibagizom") {
       document.getElementById("word10").style.border='2px solid green';
    }
    else {
        document.getElementById("word10").style.border='2px solid red';
    }
}

function validate11(input) {
    if (input.value == "gaagiigido") {
       document.getElementById("word11").style.border='2px solid green';
    }
    else {
        document.getElementById("word11").style.border='2px solid red';
    }
}

function validate12(input) {
    if (input.value == "gibimibatoomin") {
       document.getElementById("word12").style.border='2px solid green';
    }
    else {
        document.getElementById("word12").style.border='2px solid red';
    }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
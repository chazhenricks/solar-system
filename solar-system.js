var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];



var suck = "this is bullshit";
console.log(suck.indexOf("e"));

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");
el.innerHTML += "<p> Each item in array </p>"

planets.forEach(function(element){
    el.innerHTML +=
        `<div>
            ${element}
        </div>`;
});


// Use the map method to create a new array where the first letter of each planet is capitalized
el.innerHTML += "<p> Each letter is Capitalized </p>"
var capPlanet = planets.map(function(element){
    var capLetter = element.split("");
    capLetter[0] = capLetter[0].toUpperCase();
    capLetter = capLetter.join("");
    el.innerHTML +=
        `<div>
            ${capLetter}
        </div>`;

});


// Use the filter method to create a new array that contains planets with the letter 'e'

var capE = planets.filter(function(element){
   return element.indexOf("e") >= 0
});
el.innerHTML += "<p> Only With Letter E </p>"
for(var i=0;i<capE.length;i++){
el.innerHTML +=
        `<div>
            ${capE[i]}
        </div>`;
}


// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
el.innerHTML += "<p> Reduced array to a sentence </p>"
var sentence = words.reduce(function(prev, curr){
    return prev + " " + curr;
});


el.innerHTML +=
        `<div>
            ${sentence}
        </div>`










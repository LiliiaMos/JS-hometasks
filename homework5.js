var text = "Wonderful Joyful Happiness Time Task Apple";
var RegEx = /\b[^Aa\s]{6,}\b/g;
var matches = text.match(RegEx);

console.log(matches);
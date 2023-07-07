var john = {
    userName: "John",
    testOne: 10,
    testTwo: 2,
};
var jane = {
    userName: "Jane",
    testOne: 7,
    testTwo: 1,
};
var jairo = {
    userName: "Jairo",
    testOne: 9,
    testTwo: 7,
};
var yu = {
    userName: "Yu",
    testOne: 10,
    testTwo: 9,
};
var chie = {
    userName: "Chie",
    testOne: 7,
    testTwo: 8,
};
var people = [john, jane, jairo, yu, chie];
var getAverage = function (person) {
    var result = (person.testOne + person.testTwo) / 2;
    return result;
};
for (var i = 0; i < people.length; i++) {
    alert("".concat(people[i].userName, ", sua m\u00E9dia foi ").concat(getAverage(people[i]), ", portanto voc\u00EA est\u00E1 ").concat(getAverage(people[i]) >= 7 ? "aprovado" : "reprovado"));
}

interface Person {
  userName: string;
  testOne: number;
  testTwo: number;
}

const john: Person = {
  userName: "John",
  testOne: 10,
  testTwo: 2,
};

const jane: Person = {
  userName: "Jane",
  testOne: 7,
  testTwo: 1,
};

const jairo: Person = {
  userName: "Jairo",
  testOne: 9,
  testTwo: 7,
};

const yu: Person = {
  userName: "Yu",
  testOne: 10,
  testTwo: 9,
};

const chie: Person = {
  userName: "Chie",
  testOne: 7,
  testTwo: 8,
};

const people: Person[] = [john, jane, jairo, yu, chie];

const getAverage = (person: Person) => {
  const result = (person.testOne + person.testTwo) / 2;
  return result;
};

for (let i = 0; i < people.length; i++) {
  alert(
    `${people[i].userName}, sua média foi ${getAverage(
      people[i]
    )}, portanto você está ${
      getAverage(people[i]) >= 7 ? "aprovado" : "reprovado"
    }`
  );
}

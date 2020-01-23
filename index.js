class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        setInterval(() => {
            this.age++;
            console.log(this.age);
        }, 1000);
    }
}

let people = [];
const names = ["Harry", "Ross", "Bruce", "Cook", "Carolyn", "Morgan", "Albert", "Walker", "Randy", "Reed",
    "Larry", "Barnes", "Lois", "Wilson", "Jesse", "Campbell", "Ernest", "Rogers", "Theresa", "Patterson",
    "Henry", "Simmons", "Michelle", "Perry", "Frank", "Butler", "Shirley"
];

let person1 = new Person('Ani', 22);
let person2 = new Person('John', 41);
let person3 = new Person('Eve', 12);
let person4 = new Person('Ben', 55);

people.push(person1, person2, person3, person4);

function checkAge(arr) {
    let result = arr.filter(person => person.age < 40);
    console.log(result);
    return result;
}

function newPerson(num, arr1, arr2) {
    let newPerson = new Person(getRandomName(arr2), getRandomNumber(num));
    arr1.push(newPerson);
    console.log(arr1);
    return arr1;
}

function getRandomNumber(max) {
    return Math.round(Math.random() * max);
}

function getRandomName(arr) {
    return arr[getRandomNumber(arr.length)];
}

setInterval(checkAge, 1000, people);
setInterval(newPerson, 2000, 50, people, names);

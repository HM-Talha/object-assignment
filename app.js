// -----OBJECTS----


// ----Ques # 1
var itemsArray = [
    {
        name: "juice",
        prize: 50,
        quantity: 3
    },
    {
        name: "Cookie",
        prize: 30,
        quantity: 9
    },
    {
        name: "Shirt",
        prize: 880,
        quantity: 1
    },
    {
        name: "Pen",
        prize: 100,
        quantity: 2
    }
];
var calcItem1 = (itemsArray[0].prize) * (itemsArray[0].quantity);
var calcItem2 = (itemsArray[1].prize) * (itemsArray[1].quantity);
var calcItem3 = (itemsArray[2].prize) * (itemsArray[2].quantity);
var calcItem4 = (itemsArray[3].prize) * (itemsArray[3].quantity);
var total = calcItem1 + calcItem2 + calcItem3 + calcItem4
console.log(calcItem1);
console.log(calcItem2);
console.log(calcItem3);
console.log(calcItem4);
console.log(total);


// ----- Qus # 2
var std = {
    Name: "Talha",
    Email: "hmttalha4@gmail.com",
    Password: "talha123",
    Age: 20,
    Gender: "Male",
    City: "Karachi",
    Country: "Pakistan"
}
var checkAge = "Age" in std;
var checkCountry = "Country" in std;
var checkFrstName = std.hasOwnProperty("FirstName")
var checkLastName = std.hasOwnProperty("lastName")
console.log(checkAge);
console.log(checkCountry);
console.log(checkFrstName);
console.log(checkLastName);


// ----- Qus # 3
function Std(name, age, classs, secttion) {
    this.Name = name
    this.Age = age
    this.Class = classs
    this.Section = secttion
}

var std1 = new Std("Talha", 21, "Web And MObile", "Morning")
var std2 = new Std("Ali", 20, "Web And MObile", "Morning")
var std3 = new Std("Ahmed", 22, "Web And MObile", "Morning")
console.log(std1);
console.log(std2);
console.log(std3);


// ----- Qus # 
function Population(name, age, gender, profession) {
    this.Name = name
    this.Age = age
    this.Gender = gender
    this.Profession = profession
}
var person1 = new Population("talha", 21, "male", "teaching")
var person2 = new Population("touseef", 23, "male", "Developer")
var person3 = new Population("Ashraf", 54, "male", "Government Servent")
var person4 = new Population("Maryan", 2, "female", "Tang Krna")

/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane
{
    constructor(name)
    {
        this.name = name;
        this.isFlying = false;
    }
    takeOff()
    {
        this.isFlying = true;
    }
    land()
    {
        this.isFlying = false;
    }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person
{
    constructor(attributes)
    {
        this.name = attributes.name,
            this.age = attributes.age,
            this.stomach = [];
    }

    eat(food)
    {
        if (this.stomach.length < 10)
        {
            this.stomach.push(food);
        }
    }
    poop()
    {
        this.stomach = [];
    }
    toString()
    {
        return `${this.name}, ${this.age}`;
    }

}
const mary = new Person(
    {
        name: 'Mary',
        age: 50
    });

mary.eat('pizza');
mary.eat("pasta");
mary.eat('soup');
mary.eat("sushi");

console.log(mary.stomach);

mary.poop();

console.log(mary.stomach);
console.log(mary.toString());

/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car
{
    constructor(attributes)
    {
        this.model = attributes.model;
        this.milesPerGallon = attributes.milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fillFuel(gallons)
    {
        this.tank = gallons;
        if (this.tank === 0)
        {
            return `${this.model} has ${this.tank} gallon in tank, it is not enough to start! a car`;
        }
        else if (this.tank <= 10)
        {
            return `${this.model} has ${this.tank} gallon in tank, it's enough fuel to run up to 250 miles`;
        }
        else if (this.tank <= 18)
        {
            return `${this.model} has ${this.tank} gallon in tank,  it's enough fuel to run up to ${this.tank * 25} miles`;
        }
    }

    drive(miles)
    {
        let usedFuel = (1 / 500) * miles;

        this.odometer += miles;
        this.tank = usedFuel;

        let tankLevel = this.tank - usedFuel;
        tankLevel = parseFloat(tankLevel.toFixed(3));

        if (this.tank <= 0)
        {
            return `I ran out of fuel at ${this.odometer} miles;`;
        }
        else if (this.tank < 5)
        {
            return `In the tank ${tankLevel} gallons left, ! WARNING ! ${this.model} tank empty!`;
        }
        else if (this.tank < 10)
        {
            return `In the tank ${tankLevel} gallons left, you need ${this.model} tank fill soon!`;
        }
        else if (this.tank < 12)
        {
            return `In the tank ${tankLevel} gallons left, half of tank left `;
        }
        else
        {
            return `In the tank ${tankLevel} gallons left, 2/3 of tank left `;
        }
    }
}

const infinity = new Car
    ({
        model: "Infinity",
        milesPerGallon: 25
    });

console.log(infinity);
console.log(infinity.fillFuel(15));
console.log(infinity.drive(350));

/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/
class Lambdasian
{
    constructor(attributes)
    {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak()
    {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/

class Instructor extends Lambdasian
{
    constructor(instructorAttributes) 
    {
        super(instructorAttributes);

        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject)
    {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject)
    {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

const alex = new Instructor({
    name: "Alex",
    age: 45,
    location: "Los-Angeles",
    specialty: 'redux',
    favLanguage: 'JavaScript',
    catchPhrase: "Don't forget the homies"
});

console.log(alex.demo("coding"));
console.log(alex.grade({ name: "Anna" }, "coding"));
console.log(alex);


/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before Lambda School
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/

class Student extends Lambdasian
{
    constructor(args) 
    {
        super(args);

        this.previousBackground = args.previousBackground;
        this.className = args.className;
        this.favSubjects = args.favSubjects;
    }

    listSubjects(favSubjects)
    {
        return `Loving ${favSubjects}!`;
    }

    PRAssignment(subject)
    {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject)
    {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}


const john = new Student({
    name: "John",
    age: 21,
    location: "Los-Angeles",

});

console.log(john.listSubjects("HTML"));
console.log(john.PRAssignment("CSS"));
console.log(john.sprintChallenge("JavaScript"));

/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/

class ProjectManager extends Instructor
{
    constructor(args) 
    {
        super(args);

        this.gradClassName = args.gradClassName;
        this.favInstructor = args.favInstructor;
    }

    standUp(channel)
    {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject)
    {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }

}


const silva = new ProjectManager
    ({
        name: "Silva",
        age: 47,
        location: "Los-Angeles",
        gradClassName: "SC0001",
        favInstructor: "Sean"

    });

console.log(silva.standUp("Slack"));
console.log(silva.debugsCode("John", "CSS"));


/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/


//End of Challenge
/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo()
{
    return 'bar';
}

module.exports = {
    foo,
    Person,
    Car,
    Lambdasian,
    Instructor,
    Student,
    ProjectManager
};

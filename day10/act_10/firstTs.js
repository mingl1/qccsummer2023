var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function greeter(g) {
    console.log("Welcome to TypeScript " + g);
}
var n = 'Prof. Wu';
greeter(n);
var y = -10;
y = 6;
var isCorrect;
isCorrect = true;
var colors = ['red', 'green', 'blue'];
var myNumbers = [1, 2, 3, 4, 5];
var myTuple = ['TypeScript', 10, true];
// let x: never = 221;
var m = 'Peter';
var mLen = m.length;
console.log("".concat(m, " has ").concat(mLen, " letters."));
var firstName = 'Martha';
var lenFirstName = firstName.length;
console.log("".concat(firstName, " has ").concat(lenFirstName, " letters."));
//Function in typescript
function getHour() {
    return new Date().getHours();
}
console.log("It's ".concat(getHour(), "."));
function greeting() {
    console.log('Welcome to Angular data type');
}
function getSum(num1, num2, name) {
    return "".concat(name, "! The sum is ").concat(num1 + num2, ".");
}
console.log(getSum(6, 10, firstName));
function getAverage() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    return "The average is ".concat(total / count, ".");
}
var Car = /** @class */ (function () {
    function Car(brand, model, yearManufactured) {
        this.brand = brand;
        this.model = model;
        this.yearManufactured = yearManufactured;
    }
    Car.prototype.year = function () {
        console.log("This car is manufactured in ".concat(this.yearManufactured, "."));
    };
    return Car;
}());
var car1 = new Car('Tesla', 'S', 2022);
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.save = function () {
        console.log('Registration Successful!');
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sale = function () {
        console.log('x items sold');
    };
    return Customer;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.salary = function () {
        console.log('Salary paid!');
    };
    return Employee;
}(Customer));
var person1 = new Person;
var customer1 = new Customer;
person1.save();
customer1.sale();
var employee1 = new Employee;
employee1.sale();
employee1.save();

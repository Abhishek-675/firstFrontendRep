// console.log('Hello World');

const product = (a, b) => {
    return console.log(a*b);
};

product(2, 2);

const student = {
    name: 'Bob',
    age: 25,
    greet() {
        console.log('My name is ' + this.name + ' and age = ' + this.age);
    }
}

student.greet();
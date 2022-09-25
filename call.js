/* === 
The JavaScript call() method. 
=== */

const person = {
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};   // Use semi clone ( ; ) because this is a e expression; 


const person1 = {
    firstName: 'Abdullah',
    lastName: 'Al Nomaan'
};

const person2 = {
    firstName: 'Abu',
    lastName: 'hasnat'
};

// use call function and set person1 object in person object.  
const firstPerson = person.fullName.call(person1);

console.log(firstPerson);   // return Abdullah Al Nomaan;


// use call function and set person2 object in person object.  
const secondPerson = person.fullName.call(person2);

console.log(secondPerson);   // return Abu Hasnat;



/* ===
The JavaScript call() method with arguments.
=== */
const total = {
    addition: function (text, num1 = 0, num2 = 0) {
        return text + (this.number1 + this.number2 + num1 + num2);
    }
};


const total1 = {
    number1: 100,
    number2: 300
};


// The call() method can accept arguments; 
const addNumber = total.addition.call(total1, 'Total number is:-', 300, 300);

console.log(addNumber);  // return 'Total number is:- 1000'


/* ------------ function apply() method ------------ */

/* === 
call() method and apply() method is similar type method. 
=== */

// with out function parameter:-
const man = {
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

const man2 = {
    firstName: 'Abul',
    lastName: 'Kalam'
}

// use apply method. Do not use any parameter;
const manData = man.fullName.apply(man2);

console.log(manData);  // return 'Abul Kalam';


/* === 
Use Parameter & arguments. Apply method takes argument as an array. 
But the parameter use normally.
=== */

const women = {

    // use parameter in object function.
    fullName: function (city, country) {
        return this.firstName + ' ' + this.lastName + ' ' + city + ' ' + country;
    }
}

const women1 = {
    firstName: 'Cana',
    lastName: 'Khan'
}

// use argument in apply() method.
const womenData =  women.fullName.apply(women1, ['Feni', 'Bangladesh']);

console.log(womenData);   // return 'Sana Khan Feni Bangaldesh';


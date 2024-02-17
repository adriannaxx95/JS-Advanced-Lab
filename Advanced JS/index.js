// //let globalVariableCat = 'cat';

// //function myFunction(){
//   //  let localVariableDog = 'dog'
//     //return localVariableDog;
// //}

// //let dog = myFunction();
// //console.log(dog);
// //console.log(globalVariableCat)

// //function makeAdder(x) {
//   //  return function adder(y) {
//     //    return x+y
//     //}
// //}

// //const add5 = makeAdder (5)
// //const add6 = makeAdder (6)

// //console.log(add6(10))

// //function makeHeading(hTag){
//   //  return function(title) {
//     //    return '<${htag}>${title}<${hTag}>'
//     //}
// //}

// //const getH1 = makeHeading(h1)
// //console.log( getH1('Heading 1'))

// //const getH1 = makeHeading(h2)
// //console.log( getH2('Heading 2'))

// //function sayHiDefn() {console.log('Hi (function definition');}
// //const sayHiExpn = function() {console.log('Hi (function expression');}
// //const sayHiArrow = () => {console.log('Hi (arrow function');}

// //console.log(sayHiDefn.name)
// //console.log(sayHiExpn.name)
// //console.log(sayHiArrow.name)



// //function oneParam(a) {
//  //   console.log('this function has a single parameter: '+a)
// //}

// //function twoParams(a,b) {
//   //  console.log('this function has two parameters: ${a} and ${b}')
// //}

// //function manyParams(a,b, ...extras) {
//   //  console.log('This function has unlimited parameters: ${a} and ${b} and ${extras}')
// //}

// //console.log(oneParam.length)
// //console.log(twoParams.length)
// //console.log(manyParams.length)

// //function sayHello() {
//   //  console.log('Hello');
//     //sayHello.counter++; // increment the custom counter property every time the function is called
//     //}
//     //sayHello.counter = 1 // initialize the counter to 0 before calling it
//     //sayHello() // Hi - calls the function and increments the counter
//     //sayHello() // Hi - calls the function and increments the counter again
//     //console.log( `Called ${sayHello.name} ${sayHello.counter} times` ) // Called sayHi 2 times

//     //function printMesaage(msg){
//       //  console.log('message: $({msg}');
//     //}

//     //let timerId = setTimeout(printMessage, 1000, 'prints after 1 sec')

//    // let cancelledTimeId = setTimeout (printMessage, 1000)
//     //clearTimeout (cancelledTimerId);

//  //   setTimeout( ( => console.log('log statement inside arrow function'), 500))

//  //setTimeout( () => console.log("first message"), 5000);
//  //setTimeout ( () => console.log("second message"), 3000);
// //setTimeout( () => console.log("third message"), 1000 ); 
// //setTimeout( () => console.log("fourth message"), 0 );

// //let tickID = setInterval( () => console.log('tick'), 2000 )
// //setTimeout( () => clearInterval(tickId), 10000)

// //function repeatInterval(delay, limit)
// //{
//   //  let counter = 1;
//     //letintervalTimer = setInterval(function repeatThis(){
//      //   console.log('repeatInterval: repeated '+counter+' of '+limit+' times' );
//        // if (counter == limit) clearInterval(intervalTimer)
//         //counter++;
//     //}, delay)
// //}

// //repeatInterval(1000, 5)

// ///function repeatTimeout(delay, limit)
// //{
//     //let counter = 1;
//    // setTimeout(function repeatThis(current){
//    //     console.log('repeatTimeout: repeated '+current+' of '+limit+' times')
//    //     if (current < limit) setTimeout(repeatThis, delay, current+1)
//    // }, delay, counter);
// //}


// //repeatTimeout(2000, 10);

// //function printGreeting(name) { // simple undecorated function
//   //  console.log('Hello, ' + name);
//     //}
//     //printGreeting('Undecorated')
//     //function loggingTimingDecorator(originalFunction) { 
//         // decorator takes a function as parameter
//     //return function (name) { 
//         // and returns that function with extra bits - timing/logging
//     //console.time('Function timer'); // start a timer
//     //console.log(`\nExecuting function ...`) // log a message
//     //const result = originalFunction(name); 
//     // execute the original function and store result
//     //console.timeEnd('Function timer'); // stop the timer
//     //return result; // return the result of running the original function
//     //}
//     //}
//     // returns the original function WITH the timing/logging features included
//     //const decoratedPrintGreeting = loggingTimingDecorator(printGreeting);
//     //decoratedPrintGreeting('Decorated')
//      // we can still call the decorated version in the same way


// //     function slow(x) {
//         // there can be a time-consuming job here, like adding up to a large number
//   //      let random = 0, goal = Math.floor(Math.random() * x * 1_000_000); // random large number
//     //    console.log(`slow(${x}): randomly generated goal for ${x * 1_000_000} is ${goal}`);
//       //  for (let i = 0; i < goal; i++) random++;
//         //return random; // return large number after counting to it
//         //}
//         //function cachingDecorator(origFunction) { // decorator takes a function as parameter
//         //const cache = new Map(); // can also include outer environment variables via a closure
//         //return function(x) { // decorator returns same function with extra bits - caching
//         //if (cache.has(x)) { // if the key exists in the cache,
//         //console.log('returned cached value for '+x); return cache.get(x); // read and return the result from it
//         //}
//         //let result = origFunction(x) // otherwise, call the original function and store the result
//        // cache.set(x, result); // then cache (remember) the result for next time
//         //return result;
//         //};
//         //}
//         //const fast = cachingDecorator(slow) // we can decorate the original slow function to use caching and make it fast
//         //const fastTimed = loggingTimingDecorator(fast) // we can decorate the fast version to include timing for testing
//         //fastTimed(8) // first time will still be slow because it's uncached
//         //fastTimed(8) // but every time after this will be much faster because result is cached
        
        
//         //function isOdd(number) { return number % 2; } // returns true if number is odd, false otherwise
//         //function getOddNumbers() {
//         // arguments is not an array, but it 'borrows' the filter function from Array by using call
//         //return [].filter.call(arguments, isOdd); // arguments is context, isOdd is parameter for filter
// //         }
// //         let results = getOddNumbers(10, 1, 3, 4, 8, 9);
// //         console.log(results); // [ 1, 3, 9 ] (array of all odd arguments)


// //         ●let animal = { 
// //             eats: true, 
// //             sleeps: true, 
// //             legs: 4, 
// //             mammal: true }; // inherits from Object prototype
// // let animalPrototype = Object.getPrototypeOf(animal); // recommended way to get prototype
// // console.log(animalPrototype); // BUT printing it via console.log is incomplete
// // console.log(Object.getOw
// //nPropertyNames(animalPrototype)); // prints all prototype (Object) properties

// // function Rabbit(name) { // constructor function, first letter capitalized by convention
// //     this.jumps = true;
// //     this.name = name;
// //     }
// //     Rabbit.prototype = animal; // sets the prototype to inherit from (same animal object as previous)
// //     let whiteRabbit = new Rabbit('White Rabbit')
// //     console.log(whiteRabbit) // { jumps: true, name: 'White Rabbit' } - own properties
// //     for (let prop in whiteRabbit) console.log(`${prop} is ${whiteRabbit[prop]}`) // all properties

// //     const obj = {} // simple empty object
// // console.log( Object.getPrototypeOf(obj) === Object.prototype ) // true: its prototype is Object prototype
// // console.log( Object.getOwnPropertyNames(Object.getPrototypeOf(obj)) ) //inherited properties from prototype

// // const arr = [] // simple empty array
// // console.log( Object.getPrototypeOf(arr) === Array.prototype ) // true: its prototype is Array prototype
// // console.log( Object.getOwnPropertyNames(Object.getPrototypeOf(arr)) ) //inherited properties from prototype

// // String.prototype.show = function() { // creates new 'show' function on built-in String prototype
// //     console.log(this);
// //     };
// //     "BOOM!".show(); // BOOM! - we can now call .show() on any string, since they all inherit from the prototype
// //     // polyfilling for String.prototype
// //     if (!String.prototype.repeat) { // if there's no such function in the prototype already
// //     String.prototype.repeat = function(n) { // define a repeat function to repeat the string n times
// //     return new Array(n).join(this); // uses the string ('this') as glue to join n empty array items
// //     };
// //     }
// //     console.log( "La".repeat(3) ); // LaLaLa


// // // define our own join() function for objects
// // const obj = {
// //     0: "Hello",
// //     1: "world",
// //     length: 2, // needed for join to work
// //     };
// //     obj.join = Array.prototype.join; // adds a join function to THIS object that uses Array.join()
// //     Object.prototype.join = Array.prototype.join; // adds a join function to ALL objects
// //     console.log(obj.join(',')); // Hello,world

// // a class is like a template or blueprint
// // class ExampleClass {
// //     // each instance of the class will have any properties
// //     prop1 = 'value1';
// //     prop2 = 'value2';
// //     constructor() {
// //     // constructor function creates a new instance of this class
// //     }
// //     method1() {
// //     // methods are functions of the class
// //     }
// // }

// // class Animal {
// //     constructor(name) {
// //     this.speed = 0; this.name = name;
// //     }
// //     run(speed) {
// //     this.speed = speed;
// //     console.log(`${this.name} runs with speed ${this.speed} kph.`);
// //     }
// //     stop() {
// //     this.speed = 0;
// //     console.log(`${this.name} stands still.`);
// //     }
// //     }
// //     class Rabbit extends Animal {
// //     hide() { // custom function, also inherits from Animal
// //     console.log(`${this.name} hides!`);
// //     }
// //     }
// //     let bunny = new Rabbit('bunny'); // bunny contains properties and methods from Animal and Rabbit
// //     bunny.run(9); // bunny runs with speed 9 kph.
// //     bunny.hide(); // bunny hides!

// // class Rabbit extends Animal {
// //     stop() { // overrides stop method in parent class
// //     super.stop(); // call parent stop
// //     this.hide(); // and then hide
// //     }
// //     hide() { // custom function, also inherits this.name from Animal
// //     console.log(`${this.name} hides!`);
// //     }
// //     }
// //     let bunny = new Rabbit('bunny'); // bunny contains properties and methods from Animal and Rabbit
// //     bunny.run(9); // bunny runs with speed 9 kph.
// //     bunny.stop(); // bunny stands still. bunny hides!

// // class Rabbit extends Animal {
// //     constructor(name, earLength)
// //     {
// //     super(name); // call the constructor function of the parent, inherited Animal class
// //     this.earLength = earLength; // adds custom properties only for instances of Rabbit
// //     }
// //     stop() { // function overridden from parent class
// //     super.stop(); // call parent stop
// //     this.hide(); // and then hide
// //     }
// //     hide() { // custom child class function
// //     console.log(`${this.name} hides!`);
// //     }
// //     }
// //     let bunny = new Rabbit('bunny', 8); // bunny contains properties and methods from Animal and Rabbit

// //     class Animal {
// //         type = 'animal';
// //         constructor(name) {
// //         this.speed = 0;
// //         this.name = name;
// //         }
// //         describe() {
// //         console.log(`${this.name} is a ${this.type}`)
// //         }
// //         //... previous Animal methods go here
// //         }
// //         class Rabbit extends Animal {
// //         type = 'rabbit';
// //         //... previous Rabbit methods go here
// //         }
// //         new Rabbit('bunny').describe() // bunny is a rabbit
// //         new Animal('fuzzy wuzzy').describe() // fuzzy wuzzy is a animal

// // class Person {
// //     static latin = 'persona'; // static (class) property, belongs to class not any instance
// //     constructor(name) {
// //     this.name = name; // standard property, is unique to each instance of the class
// //     }
// //     getName() { // standard method, belongs to each instance of the class
// //     return this.name;
// //     }
// //     static createAnonymous() { // static (class) method, belongs to class not any instance
// //     return new Person("Unnamed Person");
// //     }
// //     }
// //     let jonas = new Person('Jonas')
// //     console.log( jonas.getName() ) // Jonas - name and getName() belong to an instance of Person
// //     console.log( jonas.latin ) // undefined - latin property doesn't belong to jonas
// //     console.log( Person.latin ) // persona - latin property belongs to Person class
// //     let anon = Person.createAnonymous() // use static (factory) method to create generic Person instance
// // outside of the class itself. This lets us maintain certain data as internal only.
// // Classes: Private methods & properties

// // class Laptop {
// // _hardDiskType = 'HDD'; // protected property, SHOULD only be used by inheriting classes
// // #numCPUFans = 1; // private property, CAN only be used internally by class methods
// // constructor(brand) { // constructors are always public
// // this.brand = brand; // public property
// // }
// // isGaming() { return false; } // public method
// // getHDiskType() { return this._hardDiskType; } // public method to access protected property
// // _increaseCPUFans() { // protected method
// // if (this.isGaming()) this.#numCPUFans++ // can access private properties internally
// // }
// // }
// // const macbook = new Laptop('Macbook Pro');
// // console.log(macbook.#numCPUFans) // error: private property is not accessible

// class Laptop {
//   _hardDiskType = 'HDD'; // protected property, SHOULD only be used by inheriting classes
//   #numCPUFans = 1; // private property, CAN only be used internally by class methods
//   constructor(brand) { // constructors are always public
//   this.brand = brand; // public property
//   }
//   isGaming() { return false; } // public method
//   getHDiskType() { return this._hardDiskType; } // public method to access protected property
//   _increaseCPUFans() { // protected method
//   if (this.isGaming()) this.#numCPUFans++ // can access private properties internally
//   }
//   }
//   const macbook = new Laptop('Macbook Pro');
//   console.log(macbook.#numCPUFans) // error: private property is not accessible

//   class GamingLaptop extends Laptop {
//     constructor(brand) {
//     super(brand); // public property, externally available to instances
//     this._hardDiskType = 'SSD'; // protected props should be accessed by children, not instances
//     this.#numCPUFans = 2; // error: private property is not accessible
//     this._increaseCPUFans(); // use protected method to change #numCPUFans as it's internal
//     }
//     isGaming() { return true; } // public method
//     }
//     const alienware = new GamingLaptop('Alienware');
//     //console.log(alienware.#numCPUFans) // error: private property is not accessible
//     console.log(alienware._hardDiskType) // no error: but protected property SHOULD NOT be accessed
//     console.log(alienware.getHDiskType()) // better: public method for accessing protected property

//     It won’t work if the code is syntactically wrong. try {
//       const error = "mismatched quotes'
//       } catch (error) {
//       console.log('will not catch above error')
//       }
//       // SyntaxError: Invalid or unexpected token - doesn't go to catch block

//       try {
//         noSuchVariable;
//         } catch (error) { // error is just a variable name. 'error', 'err' or 'e' are all commonly used
//         console.log('caught an error: '+ error.message) // all errors have a message property
//         }
//         // caught an error: noSuchVariable is not defined
//         console.log('even though an error occurred above, it was caught so code continues');
        
//         try {
//         setTimeout( () => noSuchVariable, 1000 );
//         } catch (error) { // error is just a variable name. 'error', 'err' or 'e' are all commonly used
//         console.log('only synchronous errors! ' + error.message) // all errors have a message property
//         }
//         console.log('prints synchronous code then throws uncaught asynchronous error after 1 sec');
      
        
        
    
//         function checkJson(json) { // checks json argument for validity and ensures a name property
//         try {
//         const user = JSON.parse(json); // parse string into object
//         if (!user.name) {
//         throw new SyntaxError("Incomplete data: no name"); // we can throw our own custom errors
//         }
//         return true; // returns true (valid json) if no error was thrown above
//         } catch (err) {
//         if (err instanceof SyntaxError) { // once caught, we can do specific things based on error type
//         console.log( "JSON Error: " + err.message );
//         } else {
//         throw err; // rethrow other non-syntax errors; invalid json will still cause a crash
//         }
//         }
//         return false; // returns false if any error occurred


//         function checkJson(json) {
//           try {
//           // ... as above
//           return true;
//           } catch (err) {
//           //... as above
//           }
//           finally {
//           console.log('at the end'); // always prints, even if returning true or throwing an error
//           // used to complete operations and perform cleanup regardless if we hit errors or not,
//           // eg. closing db connections, removing interval timers, cancelling event listeners, etc
//           }
//           return false; // returns false if any error occurred

//           promise.then( (result) => console.log(result), // prints if/when promise resolves successfully
// (error) => console.error(error) ) // optional, prints if/when promises completes with error

// promise.then( (result) => console.log(result) ) // prints if/when promise resolves successfully
// .catch( (error) => console.error(error) ) // prints if/when promises completes with error

// promise
// .finally( () => console.log('promise is settled') ) // prints when promise settles
// .then( (result) => console.log(result) ) // prints if/when promise resolves successfully
// .catch( (error) => console.error(error) ) // prints if/when promises completes with error

// // example promise. settles after 250ms with success or failure depending on random number
// const promise = new Promise((resolve, reject) => { // resolve/reject are callback functions
//   if (Math.random() > 0.5) setTimeout( () => resolve('Random number ok'), 250 ) // success
//   else setTimeout( () => reject('Random number too low'), 250 ) // failure
//   })
//   promise // consume the promise by responding to outcomes when they happen
//   .finally( () => console.log('Wait is over, promise has settled.') ) // always prints
//   .then( (result) => console.log('Success! ' + result ) ) // prints resolve msg
//   .catch( (error) => console.log('Error! ' + error ) ) // prints reject msg

//   © 2023 Institute of Data

// Promises: fetch

// <html> <!-- very basic fetch example demonstrating real-world promises -->
// <body>
// <h2>Check the Dev Inspector Console</h2>
// <script>
// fetch('https://reqres.in/api/users') // request data from this server

// // when it completes, access the JSON from the HTTP response sent by resolved promise

// .then(response => response.json()) // .json() also returns a promise
// .then(json => console.log(json)) // log the returned JSON to the browser console
// .catch(error => console.error(error)) // if there was an error, log that too
// </script>
// </body>
// </html>

// new Promise((resolve, reject) => {
//   resolve(10); // resolve promise successfully with value of 10
//   }).then((result) => { // when resolve is called, it triggers .then()
//   console.log(result); return result + 10; // values returned from .then() are also promises
//   }).then((result) => { // so we can chain them together
//   console.log(result); return result + 10; // increasing result by 10 each time
//   }).then((result) => { // so we can chain them together
//   console.log(result); return result + 10; // increasing result by 10 each time
//   });
//   // prints 10, 20, 30

//   new Promise((resolve, reject) => setTimeout(() => resolve(10), 100)
// ).then((result) => { // promise handler function inside .then()
// console.log(result);
// return new Promise( (resolve, reject) => setTimeout(() => resolve(result + 10), (result + 10) * 10) );
// }).then((result) => { // can explicitly return new promises
// console.log(result);
// return new Promise( (resolve, reject) => setTimeout(() => resolve(result + 10), (result + 10) * 10) );
// }).then((result) => { // which use the results of previously resolved promises in the chain
// console.log(result);
// return new Promise( (resolve, reject) => setTimeout(() => resolve(result + 10), (result + 10) * 10) );
// });
// // prints 10, 20, 30, but with 100, 200 and 300ms delays in between

// const promise = new Promise((resolve) => {
//   setTimeout( () => resolve('Simple successful promise'), 250 )
//   });
//   // using .then to process asynchronously:
//   promise.then(msg => console.log(msg));
//   // using await to process synchronously (if using await in a function it needs to be async):
//   let msg = await promise;
//   console.log(msg);

//   async function asyncFunctionDeclaration() { ... } // function declaration syntax
// const asyncFunctionExpression = async function() { ... } // function expression syntax
// const asyncFunctionArrow = async () => { ... } // arrow function syntax

// catchfunction . waitForPromise() { // async function allows synchronous promise handling internally
//   // since we have synchronous code and no .catch(), we use try ... catch for errors
//   try {
//   let promiseResult = await promise; // waits here as long as promise needs to resolve
//   console.log(`Success: ${promiseResult}`) // then continues executing other code
//   return true;
//   } catch(error) {
//   console.error(`Failure: ${error.message}`)
//   }
//   //only gets here if return true above did NOT happen, ie. there was an error
//   return false;
//   }


// Class Activity - Work through the following exercises to practice some of these advanced JS concepts:
// Mimic a pizza making procedure, by writing code that prints statements in the below order:
// Started preparing pizza ...
// Made the base
// Added the sauce and cheese
// Added the pizza toppings
// Cooked the pizza
// Pizza is ready

// Task 1: Create 6 JS functions which print the pizza processing
// statements and call those functions in sequence. Use a mix of
// function declarations, expressions and arrow functions.
// Task 2: Make the functions asynchronous by using setTimeout with
// different time durations, maintaining the right order.
// Task 3: Modify the asynchronous functions to use Promises and
// achieve the required result.
// Task 4: Modify the functions to use async/await and achieve the
// required result.

// function makePizza(step1) {
//   console.log(step1);
// }
// makePizza('Started preparing pizza...');

// function makeBase() {
//   console.log('made the base');
//   addSauceandCheese();
//   }

//   const addSauceandCheeseconst = function() {
//     console.log('Added the sauce and cheese');
//     addToppings();
//   }

//   let addToppings = () => {
//     console.log('added the pizza to the toppings');
//     pizzaReady();
//   }

//   function pizzaReady(){
//     console.log("pizza is ready")
//   }

//   startPreparing();
 



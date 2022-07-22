// JAVASCRIPT NOTES - THE WEBDEVELOPR BOOTCAMP 2022

//alert("Hello World I'm Alive");
//
//let random = Math.random();
//
//if (random < 0.5) {
//    console.log('you have just won the prize');
//    console.log(random);
//} else {
//    console.log('you lost');
//
//const dayOfWeek = 'Saturday'
//if (dayOfWeek === 'Monday') {
//    alert('Uggggh I hate mondays bruh');
//} else if (dayOfWeek === 'Saturday') {
//   alert('litmun');
//}

//const age = Math.random() * 100;
//
//if (age < 5) {
//    console.log('You get in for free under 5')
//    console.log(age);
//} else if (age < 10) {
//    console.log('10$ as you are a child')
//    console.log(age);
//} else if (age < 65) {
//    console.log('you owe us $20 bruh')
//    console.log(age);
//} else if (age === 65) {
//    console.log('You might die soon, that is $10')
//    console.log(age);
//} else {
//    console.log('invalidated')
//    console.log(age);
//}

//const password = prompt('please enter a new password');
//
//if (password.length >= 6) {
//    console.log('long enough password!')
//} else {
//    console.log('password too short')
//}
//
//if (password.indexOf(' ') === -1) {
//    console.log('no space, great work')
//} else {
//    console.log('You have a space in your password, try again')
//}


//const firstName = prompt('enter your first name');
//if (!firstName) {
//    firstName = prompt('Try Again you fucking loser')
//}

//for (let i = 1; i <= 20; i++) {
//  console.log(i);
//}

//for (let i = 100; i > 0; i -= 10) {
//   console.log(i)
//}

//const animals = ['lions', 'cats', 'bears', 'monty', 'pangolin']
//
//for (let i = animals.legnth - 1; i >= 0; i--) {
//    console.log(animals[i]);
//}

//for (let i = 1; i <= 10; i++) {
//    console.log(`i is: ${i}`)
//    for (let j = 1; j < 4; j++) {
//        console.log(`  j is ${j}`);
//    }
//}

// let i = 0;
// while (i < 10) {
//     i++;
//     console.log(i)
// }

// const secret = 'BabyHippo';
// 
// let guess = prompt('Enter the secret code..');
//while (guess !== secret) {
//   guess = prompt('enter the secret code');
// }
// console.log('Congrats you got the secret')

// let input = prompt('hey say something!')
// while (true) {
//     input = prompt(input);
//     if (input === 'stop copying me') {
//         break;
//     }
// }
// console.log('ok you win');

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }

// GUESSING GAME (WHILE LOOPS, IF STATEMENTS, PARSEINT)

// let max = parseInt(prompt('Enter the maximum number!'));
// while (!max) {
//     max = parseInt(prompt('Enter a valid number!'))
// }
// const targetNum = Math.floor(Math.random() * max) + 1
// console.log(targetNum);
// 
// let guess = parseInt(prompt('enter your first guess!'))
// let attempt = 1;
// 
// while (parseInt(guess) !== targetNum) {
//     if (guess === 'quit') break;
//     attempt++;
//     if (guess > targetNum) {
//         guess = parseInt(prompt('Too high! Enter a new guess:'))
//     } else {
//         guess = parseInt(prompt('too low! enter a new guess!'))
//     }
// }
// console.log(`you got the guess lad! it took you ${attempt} attempts you pussy`);


//  FOR OF LOOPS 
// const reddit = ['melbourne',
//     'ausfinance', 'sales', 'funny', 'soccer', 'pics'
// ];
// 
// // for (let i = 0; i < reddit.length; i++) {
// //    console.log(`visit reddit.com/r/${reddit[i]}`)
// //}
// 
// for (let sub of reddit) {
//     console.log(`visit reddit.com/r/${sub}`)
// }

// const testScores = {
//     peter: 48,
//     delaney: 78,
//     judy: 81,
//     marlon: 21,
//     dwayne: 25,
//     elvira: 97,
//     scarlett: 99,
// }
// 
//  for (let person in testScores) {
//      console.log(`${person} scored ${testScores[person]}`)
//  }
// let total = 0;
// let scores = Object.values(testScores)
// for (let score of scores) {
//     total += score;
// }
// console.log(total / scores.length)


// ASK FOR SOME INPUT

// While the result for the input hasn't entered quit keep looping

// storage of todos into arrays.

// if command = new add to the array

// List will iterate over the array and print them out.

// TO DO LIST APPLICATION - TAKE INPUT, STORE INFORMATION IN AN ARRAY AND OUTPUT INFORMATION FROM ARRAY
// 
//  let input = prompt('What would you like to do?')  // ask for input to add to array
//  const todos = ['Smash pussy', 'eat pussy'];  // Array which you can list, add and delete from
//  while (input !== 'quit' && input !== 'q') {  // while loop 'Quit' & 'Q' aren't listed the app will ask for input
//      if (input === 'list') {  // if the input == 'list' loop through the Todos array and consolelog the array index and values
//          console.log('><><><><><')
//          for (let i = 0; i < todos.length; i++) {
//              console.log(`${i}: ${todos[i]}`);
//          }
//          console.log('><><><><><')
//      } else if (input === 'new') { // else if input == 'new' create a new input 'newTodo' 
//          const newTodo = prompt('please add a new task');
//          todos.push(newTodo);                        // once new input is saved to newTodo push input to const todos variable
//          console.log(`${newTodo} added to the list`); // temeprate literal consolelog that the new input has been added to the array. 
//      } else if (input === 'delete') {        // else if input == 'delete'remove input index from the array. 
//          const index = prompt('Ok, enter the index to delete: ');  // entering the index which will splice from the existing array. 
//          const deleted = todos.splice(index, 1); // index is the starting number on which to splice from, second number is the amount of values we are splicing
//          console.log(`Okay you deleted ${deleted}`); // check with temeprate literal that info as been deleted. 
//      }
//      input = prompt('What would you like to do?') // while loop input
//  }
//  console.log('you quit the application'); // if 'quit' or 'q' have been enetered into input console.log quit the application to stop while loop

// function sing() {
//    console.log('I');
//    console.log('Like to');
//    console.log('Fuck da pussi');
//    console.log('mayn');
// }
// 
// function greet(person, lastName) {
//    console.log(`hello, there ${person} ${lastName}`)
// 
// 
// reet('George', 'Stalin')

// function repeat(str, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result)
// }
// 
// let bird = 'Chicken';
// 
// function birdWatch() {
//     let bird = 'Heron';
//     console.log(bird)
// }
// 
// birdWatch();

// const cat = {
//     name: 'Monty',
//     color: 'black',
//     breed: 'tabby',
//     meow() {
//         console.log(`${this.name} Goes meoeooooeoeoeoeow`)
//     }
// }

// const meow2 = cat.meow;
// 
// 
// const nums = [1, 2, 3, 4, 5, 6, 7]
// 
// FOR EACH - WHICH IS THE SAME AS LOOPING THROUGH AN ARRAY AND APPLYING A FUNCTION
// 
//  nums.forEach(function(el) {
//      if (el % 2 === 0) {
//          console.log(el)
//      }
//  })
//  
//  for (let el of nums) {
//      console.log(el);
//  }

// const timesTwo = nums.map(function(num) {
//     return num * 2
// })


// MAP ACCEPTS A CALL BACK AND RETURNS A VALUE INTO A NEW ARRRAY

//          const movieTitle = movies.map(function(movie) {
//              return movie.title;
//          })

// ORIGINAL FUNCTION VS AN ARROW FUNCTION

//      const add = function(x, y) {
//          return x + y;
//      }
//      
//      const add = (x, y) => {
//          return x + y;
//      }

//      const square = (x) => {
//          return x * x;
//      }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

// IMPLICIT RETURN (ONLY WORKS WITH ARROW FUNCTIONS)

// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )
// 
// const add = (a, b) => a + b


// ARROW FUNCTIONS ON MAP / FOREACH

// NORMAL FUNCTION (MAP)
// const newMovies = movies.map(function(movie) {
//   return `${movie.title} - ${movie.score / 10}`
// })

// ARROW FUNCTION (MAP)
// const newMovies = movies.map((movie) => (
//     `${movie.title} - ${movie.score / 10}`
// ))

// TIME DELAY FUNCTION
// setTimeout(() => {
//     console.log("hello bitch")
// }, 3000)

// setInterval(() => {
//     console.log(Math.random() * 6) + 1
// }, 2000)


//  FILTER FUNCTIONALITY

// const newNum = nums.filter(n => {
//    return n < 4
// })

// function validUserNames(usernames) {
//     let filterU = usernames.filter(function(usernames){
//         return usernames.length < 10; 
//     })
//     return filterU;
//  }

//  SOME, SIMILAR TO EVERY, BUT RETURN TRUE IF ANY OF THE ARRAY
// ELEMENT PASS THE TEST FUNCTION.
// EVERY, TESTS WHETHER ALL ELEMENTS IN THE ARRAY PASS THE PROVIDED
// FUNCTION. 

// const exams = [80, 30, 23, 65, 67, 74, 49]

// const pass = exams.every(score => score >= 50) // FALSE 

// const pass = exams.some(score => score >= 50) // TRUE 

// unction allEvens(arr){
//    const result = arr.every(arr => arr % 2 === 0);
//    return result; 
//    }

// REDUCE - EXECUTES A REDUCER FUNCTION ON EACH ELEMENT OF THE ARRAY RESULTING 
// IN  A SINGLE VALUE. 

// [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }); // Final return value will be 35

// const prices = [9.99, 1.50, 19.99, 49.99, 30.40];

// et total = 0;
// or (let price of prices) {
//    total += price
// 
// console.log()

// REDUCE IS THE SAME AS LOOPING THROUGH AND SUMMING TOGETHER EVERY ELEMENT 
// const total = prices.reduce((total, price) => total + price)

// const minPrice = prices.reduce((min, price) => {
//     if (price < min) {
//         return price;
//     }
//     return min;
// })

// DEFUALT PARAMS 
// function rollDie(numSides = 6) {
//    return Math.floor(Math.random() * numSides) + 1
// }

// SPREAD SYNTAX ALLOWS AN ITERABLE SUCH AS AN ARRAY TO BE EXPANDED IN PLACES WHERE
// ZERO OR MORE ARGUMENTS (FOR FUNCTION CALLS) OR ELEMENTS (FOR ARRAY LITERALS) ARE EXPECT. 

//const nums = [12,3,2,424,412, 14,52]
// Math.max(...nums) // 424 

// SPREAD ITERABLES 

// const cats = ['monty', 'popppy', 'yokko'];
// const dogs = ['maple', 'belle', 'harriet'];
// 
// const allPets = [...cats, ...dogs];

// SPREADS WITH OBJECT LITERALS 

// const feline = { legs: 4, family: 'Felidae' };
// const canine = { isFurry: true, family: 'Caninae' }
// 
// const dataFromForm = {
//     email: 'peterjd94@gmail.com',
//     password: 'Qbeuqe123',
//     username: 'peterjd94',
// }
// 
// const newUser = {...dataFromForm, id: 2345, isAdmin: false };

// REST PARAMS 

// function sum(...nums) {
//     return nums.reduce((total, el) => total + el);
// }

// ONCLICK PROPERTY 

// const btn = document.querySelector('#viz')
// 
// btn.onclick = function() {
//     for (let i = 0; i <= 3; i++) {
//         console.log('You clicked me nigga aahh shiet I aint respectful')
//         console.log('I slapped so many bitches bruh')
//         console.log('SCRAAACKING BRUH')
// }
// }
// 
// const h1 = document.querySelector('h1');

// ADD EVENT LISTENER 

// const btn = document.querySelector('#viz');
// 
// btn.addEventListener('dblclick', function() {
//     alert('Yes it has worked my friend!!!')
// })

// EVENT OBJECT - Passing through the Event window as a param which listens for actions 
// on the keyboard. 

// document.querySelector('button').addEventListener('click', function() {
//     console.log('You pressed the key Nigga');
// })
// 
// const input = document.querySelector('input');
// input.addEventListener('keydown', function(e) {
//     console.log(e.key);
// })
// 
// window.addEventListener('keydown', function(e) {
//     switch (e.code) {
//         case 'ArrowUp':
//             console.log('UP');
//             break;
//         case 'ArrowDown':
//             console.log('DOWN BITCH');
//             break;
//         case 'ArrowRight':
//             console.log('LEFTY!');
//             break;
//         default:
//             console.log('Neiiin Neiiin Neeein')
//     }
// })

// Prevent Default - Still submitting the form but prevent the form moving on to action.
// Submitting a form and appending a comment to a new webpage//
//  const form = document.querySelector('#shelter')
//  const input = document.querySelector('#catName')
//  const list = document.querySelector('#list')
//  
//  form.addEventListener('submit', function(e) {
//      e.preventDefault();
//      console.log('submitting the form maybe...')
//      const catNames = input.value
//      const newLi = document.createElement('li');
//      newLi.innerText = catNames;
//      list.appendChild(newLi)
//      input.value = '';
//  }

// Input & change Events - Live preview for webpage
// const input = document.querySelector('#inputs');
// const h1 = document.querySelector('h1');
// 
// input.addEventListener('input', function(e) {
//     h1.innerText = input.value;
// })

// whatever change in the input will trigger an action in the function

// EVENT BUBBLING

// CALL STACK THE MECHANISM THE JS INTERPRETER USES TO KEEP TRACK OF ITS PLACE IN A SCRIPT THAT CALLS
// MULTIPLE FUNCTIONS

// JS IS SINGLE THREADED - at any given point in time, single JS thread is running
// at most one line of JS Code at any one time. 

// console.log('Sending Data to server')
// 
// setTimeout(() => {
//     console.log('Here is your data')
// }, 3000)
// 
// console.log('I am at the end of the file');

// Browser come with Web APIs that are able to handle certain tasks in the Background 
//(Like making requests or setTimeOut)

// The JS Call Stack recognizes these webAPI functions and passes them off to the browser
// to take care of.

// one the browser finishes those tasks, they return and are pushed onto the stack as a callback

// NESTING CALL BACKS - 
// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext()
//     }, delay)
// }
// 
// delayedColorChange('olive', 500, () => {
//     delayedColorChange('orange', 500, () => {
//         delayedColorChange('Blue', 500, () => {
//             delayedColorChange('Teal', 500, () => {
//                 delayedColorChange('Grey', 500)
//             })
//         })
//     })
// });

//const delayedColorChange = (color, delay) => {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            document.body.style.backgroundColor = color;
//            resolve();
//        }, 800)
//    })
//}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('white', 1000))
//     .then(() => delayedColorChange('teal', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('Green', 1000))

// SETTING UP A PROMISE WITH AN ASYNC FUNCTION AND USING THE KEYWORD 'AWAIT'

// async function rainbow() {
//     await delayedColorChange('red', 1000)
//     console.log('red')
//     await delayedColorChange('yellow', 1000)
//     console.log('yellow')
//     await delayedColorChange('orange', 1000)
//     console.log('orange')
//     await delayedColorChange('green', 1000)
//     console.log('green')
//     await delayedColorChange('blue', 1000)
//     console.log('blue')
//     return 'All Done'
// }

// rainbow().then(() => console.log('END OF RAINBOW BITCH!'))

// YOU CAN ALSO CALL THE ASYNC FUNCTION TO ANOTHER ASYNC FUNCTION '

// async function printRainbow() {
//     await rainbow();
//     console.log('END OF RAINBOW BITCH!')
// }

// OR ALTERNATIVELY YOU CAN USE AN ASYNC FUNCTION LIKE THE ONE BELOW

// searchMoviesAPI('Worldofwarcraft', () => {
//     saveToMyDB(movies, () => {
//         // if it works run this:
//     })
// }, () => {
//     // if it doesn't work, run this:
// }, () => {
//     // if API is down, or request has failed 
// })
// 
// makeRequest(() => {
// 
// }, () => {
// 
// })

// A Promise is a returned object to which you attach callbacks, instead of passing callbacks into a function. 

//fakeRequetPromise('yelp.com/api/coffe');
//.then(() => {
//        console.log('Promise is resolved!');
//        console.log('it Worked!!')
//        fakeRequetPromise('yelp.com/api/coffe');
//        .then(() => {
//            console.log('secondly it worked!')
//            console.log('yeeep 2');
//        })
//    })
//    .catch(() => {
//        console.log('promise rejected!');
//        console.log('oh no it'
//            s an error!)
//    })

// A way of stream lining Promises so that you aren't having to nest them at multiple levels of the code. 

//const fakeRequestPromise = (url) => {
//    return new Promise((resolve, reject) => {
//        const delay = Math.floor(Math.random() * (1000)) + 500;
//        setTimeout(() => {
//            if (delay > 1200) {
//                reject('Connection timeout!')
//            } else {
//                resolve(`here is your fake data from ${url}`)
//            }
//        }, delay)
//    })
// 
// 
// 
// makeRequestPromise('Trustpilot.com')
//    .then((data) => {
//        console.log(data)
//        return fakeRequestPromise('trustpilot.com/page1')
//            .then((data) => {
//                console.log(data)
//                return fakeRequestPromise('trustpilot.com/page2')
//                    .then((data) => {
//                        console.log(data)
//                        return fakeRequestPromise('Finished.com')
//                    })
//                    .catch(() => {
//                        console.log('Oh No There was a Final Error!')
//                    })
//            })
//    })
//    .catch(() => {
//        console.log('On No we have an error!')
//    })

// Promise Examples streamlined

// const fakeRequest = (url) => {
//         return new Promise((resolve, reject) => {
//             const rand = Math.random();
//             setTimeout(() => {
//                 if (rand < 0.7) {
//                     resolve('Trustpilot.com');
//                 }
//                 reject('Request Rejected');
//             }, 1000)
//         })
//     }


// 
// fakeRequest('/page1')
//     .then((data) => {
//         console.log('Done with Request!')
//         console.log('data is:', data)
//     })
//     .catch((err) => {
//         console.log('oh no', err)
//     })

// USAGE OF THE ASYNC KEYWORD - to make promises without having to return new promise within a function

// async function hello() {
// 
// }

// const sing = async() => {
//     throw 'oh no, problem!!'
//     return 'Lallalalalala'
// }
// 
// sing()
//     .then((data) => {
//         console.log('promise resolved with:', data)
//     })
//     .catch(err => {
//         console.log('ohhh no, promise rejected')
//         console.log(err)
//     })

// const login = async(username, password) => {
//     if (!username) throw 'missing credentials'
//     if (password === 'password') return 'Welcome!'
//     throw 'Invalid login details'
// }
// 
// login('Peterjd94', 'password')
//     .then(msg => {
//         console.log('logged in')
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log('Error')
//         console.log(err)
//     })

// ASYNC FUNC TRY AND CATCH
// async function makeTwoRequests() {
//     try {
//         let data1 = await fakeRequest('/page2')
//         let data2 = await fakeRequest('/page3')
//         console.log(data1);
//     } catch (e) {
//         console.log('Caught an error!')
//         console.log(e)
//     }
// }

// USING FETCH TO SEND API REQUESTS AND THEN TRANSFERRING THE DATA TO JSON. 

// fetch('https://swapi.dev/api/people/1')
//     .then(res => {
//         console.log('resolved', res)
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)
//         return fetch('https://swapi.dev/api/people/2/')
//     })
//     .then(res => {
//         console.log('second Request Resolved!')
//         return res.json()
//     })
//     .then(data => {
//         console.log(data, 'Data has displayed ')
//     })
//     .catch(e => {
//         console.log('Error!', res)
//     })

//const loadStarWars = async() => {
//    const res = fetch('https://swapi.dev/api/people/1');
//    const data = await res.json
//    console.log(data)
//};
//
//loadStarWars();

// APPENDING API DATA TO A WEB PAGE EXAMPLE - DAD JOKES WEBPAGE.
// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('#button');
// 
// 
// const addNewJoke = async() => {
//     const jokeText = await getDadJoke();
//     const newLI = document.createElement('LI');
//     newLI.append(jokeText);
//     jokes.append(newLI);
// }
// 
// const getDadJoke = async(joke) => {
//     try {
//         const config = { headers: { Accept: 'application/json' } }
//         const res = await axios.get('https://Icanhazdadjoke.com', config)
//         return res.data.joke;
//     } catch {
//         return ('Error getting dad jokes, too Cringe!')
//     }
// 
// }
// 
// button.addEventListener('click', addNewJoke)

// QUERYING A TV DATABASE AND DISPLAYING SEARCH INFORMATION THROUGH TO A WEBPAGE!! 

// const form = document.querySelector('#searchForm');
// 
// form.addEventListener('submit', async function(e) {
//     e.preventDefault();
//     try {
//         const searchTerm = form.elements.query.value;
//         const config = { params: { q: searchTerm } }
//         const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
//         makeImages(res.data)
//         form.elements.query.value = "";
//     } catch {
//         document.body.append('COULD NOT FIND THE IMAGE');
//     }
// 
// })
// 
// const makeImages = (shows) => {
//     for (let result of shows) {
//         const img = document.createElement('IMG');
//         img.src = result.show.image.medium;
//         document.body.append(img)
//     }
// }

// prototype objects that you can adapt from the window 

// String.prototype.yell = function() {
//     return `OMG ${this.toUpperCase()}!!!!`
// };
// 
// Array.prototype.pop = function() {
//     return 'Sorry I ruined this element!'
// }


//  OBJECT ORIENTATED PROGRAMMING VS PROCEDURAL PROGRAMMING (ENCAPSULATION)
//  GROUP CODE AND REDUCE COMPLEXITY + INCREASE REUSEABILIT// 
//  PROCEDURAL PROGRAMMING (WHAT A FUNCTION LOOKS LIKE)
//  let baseSalary = 30000; 
//  let overtime = 10;
//  let rate = 20; 
//  
//  function getWage(baseSalary, overtime, rate) {
//      return baseSalary + (overTime * rate);
//  // 
//  WITH PROCEDRUAL PROGRAMMIGN YOU DECLARE THE VARIABLE, THEN PUSH IT 
//  INTO THE PARAMETERS OF A FUNCTION.// 
//  OBJECT OREINTATED PROGRAMMING (ENCAPUSALTION)
//  YOU PUSH THE VARIABLES INTO AN OBJECT FIRST AS PROPERTIES THE FUNCTION
//  LIVES INSIDE OF THE OBJECT ITSELF, IT BECOMES ONE UNIT. 
//  THE BEST FUNCTIONS ARE THOSE WITH NO PARAMETERS!
//  THIS IS CALLED ENCAPSULATION.// 
//  let employee = {
//  	baseSalary: 30000,
//  	overtime: 10, 
//  	rate: 20, 
//  	getWage: function() {
//  		return this.baseSalary + (this.overtime * this.rate);
//  	}
//  };
//  employee.GetWage();

// OBJECT ORIENTATED PROGRAMMING (ABSTRACTION)
// PROVIDES A SIMPLER INTERFACE - REDUCES COMPLEXITY 
// REDUCES THE IMPACT OF CHANGE, IF YOU CHANGE THE METHODS WITHIN AN OBJECT BUT IT WILL NOT
// IMPACT THE REST OF YOUR CODE. 

// OBJECT ORIENTATED PROGRAMMING (INHERITENCE)
// IS A MECHANISM THAT ALLOWS YOU TO ELEMINATE REDUNDANT CODE. 

// OBJECT ORIENTATED PROGRAMMING (POLYMORPHISM) - MANY FORMS
// REFACTOR UGLY SWITCH CASE STATEMENTS. 

// CREATING AN OBJECT 

// ORIGINAL OBJECT WITH FUNCTIONALITY
// alert('Hello World!!!')
// 
// let object = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('HERE I AM!');
//     }
// };
// // 
// // object.draw();
// 
// // FACTORING CODE FOR A FUNCTION TO CREATE AN OBJECT
// 

// DEFINE A FACTORY FUNCTION
// function createObject(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('HERE I AM!');
//         }
// 
//     };
// }
// 
// const objects = createObject(23)
// 
// 
// // DEFINE A CONSTRUCTOR FUNCTION
// function Object(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('HERE I AM');
//     }
// }
// 
// const another = new Object(4)


// PRIMITIVES (NUMS,BOOLEAN) ARE COPIED BY THEIR VALUE
// OBJECTS ARE COPIED BY THEIR REFERENCE. 

// let obj = { value: 10 };
// 
// function increase(obj) {
//     obj.value++;
// }
// 
// increase(obj);
// console.log(obj)


// DELETING & ADDING ITEMS OUT OF AN OBJECT

// function Object(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// 
// const object = new Object(12);
// 
// object.location = { x: 1 };
// 
// const propertyName = 'location'
// object[propertyName] = { x: 1 };
// 
// delete object['location'];


// LOOPING THROUGH OBJECTS TO DISPLAY KEYS && VALUES 

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// 
// const circle = new Circle(15);
// 
// for (let key in circle) {
//     if (typeof circle[key] !== 'function') {
//         console.log(key, circle[key]);
//     }
// }
// 
// const keys = Object.keys(circle);
// console.log(keys);
// 
// if ('radius' in circle) {
//     console.log('Circle has a radius')
// }

//ABSTRACTION IN OOP - HIDE THE DETAILS / SHOW THE ESSENTIALS
// DEFINING GETTERS AND SETTERS

// function Circle(radius) {
//     this.radius = radius;
// 
//     let defaultLocation = { x: 0, y: 0 };
// 
//     this.getDefaultLocation = function() {
//         return defaultLocation;
//     }
// 
//     this.draw = function() {
//         console.log('draw');
//     };
// 
//     Object.defineProperty(this, 'defaultLocation', {
//         get: function() {
//             return defaultLocation;
//         },
//         set: function(value) {
//             if (!value.x || !value.y)
//                 throw new Error('Invalid location!!')
// 
//             defaultLocation = value;
//         }
//     });
// }
// 
// const circle = new Circle(15);
// circle.defaultLocation = 0;
// circle.draw();

// SETTING UP AN STOPWWATCH OBJECT - 
// ALLOWS YOU TO START THE WATCH, STOP THE WATCH, RESET THE TIME TO 0 AND PRINT THE DURATION.

// function Stopwatch() {
//     let startTime, stopTime, running, duration = 0;
// 
//     this.start = function() {
//         if (running)
//             throw new Error('Stopwatch has already start. '); // VALIDATION CHECK
// 
//         running = true;
// 
//         startTime = new Date();
//     };
// 
//     this.reset = function() {
//         startTime = null;
//         stopTime = null;
//         running = false;
//         duration = 0;
//     };
// 
//     this.stop = function() {
//         if (!running)
//             throw new Error('Stop watch hasnt started')
// 
//         running = false;
// 
//         stopTime = new Date();
// 
//         const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
//         duration += seconds;
// 
//     };
//     Object.defineProperty(this, 'duration', {
//         get: function() { return duration; }
//     });
// 
// }
// 
// const sw = new Stopwatch;

// CREATES A BLACK, PLAIN JAVASCRIPT  OBJECT
// LINKS (SETS THE CONSTRUCTOR OF) THIS OBJECT TO ANOTHER; 
// RETURNS THIS IF THE FUNCTION DOESN'T RETURN A NEW OBJECT

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     console.log(this)
// }
// 
// Color.prototype.rgb = function() {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
// }
// 
// Color.prototype.rgba = function(a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r},${g},${b},${a})`;
// }
// 
// 
// const color1 = new Color(40, 50, 60);
// const color2 = new Color(120, 150, 170);

// class Color {
//     constructor(r, g, b, name) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//     }
//     greet() {
//         return `Hello from ${this.name}!`;
//     }
//     rgb() {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     }
//     rgba(a = 1.0) {
//         return `rgba(${r}, ${g}, ${b}, ${a})`;
//     }
// 
// }
// 
// const c1 = new Color(255, 67, 12, 'tomato');
// 
// 
// // USING THE EXTEND KEYWORD IN CLASSES TO BE ABLE TO REMOVE DUPLICATE FUNCTIONALITY. 
// // YOU CAN EXTEND CONSTRUCTOR FUNCTIONALITY. 
// 
// class Pet {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating food! He is ${this.age} years old`;
//     }
// }
// 
// class Cat extends Pet {
//     constructor(name, age, livesLeft = 9) {
//         console.log('In Cat Constructor')
//         super(name, age);
//         this.livesLeft = livesLeft;
//     }
//     meow() {
//         return 'Meoooooooooow'
//     }
// }
// 
// class Dog extends Pet {
//     bark() {
//         return 'Wooof Woof mother fucker!'
//     }
// }
// 
// const monty = new Cat('Monty', 9)
// const maple = new Dog('Maple', 19)

// CONSTRUCTORS ARE USED TO SETUP THE OBJECT
// YOU INTIATE A NEW OBJECT BY USING THE 'NEW' KEYWORD SAVED TO A VARIBALE
// 'THIS' KEYWORD REFERS TO THE OBJECT THAT IS BEING CREATED BY THE CLASS
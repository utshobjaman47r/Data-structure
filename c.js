console.log("hello world ")


// 1. Loop over the game.scored array and print each player name to the console,
//  along with the goal number (Example: "Goal 1: Lewandowski")

// 2. Use a loop to calculate the average odd and log it to the console
//  (We already studied how to calculate averages, you can go check if you don't remember)

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw").
//  HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties,
//  and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1, 
//         Lewandowski: 2
//       }
 
// GOOD LUCK 😀
// */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [ 
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
      
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};



for(const values of Object.values(game.odds)){
  console.log(values)
}



for(const [index,elements] of game.scored.entries()){
 console.log(`GOAL ${index+1} : ${elements}`)
};


let sum = 0;
let count = 0;
for (const odd of Object.values(game.odds)) {
  sum+=odd,
  count++
  
}

const avarage = sum / count
console.log(`avarage ${avarage}`)

console.log(Object.values(game.odds));

// const odds = Object.values(game.odds)
//  let avareage = 0;

 
//  for(const odd of odds)
//   avarage +=odd;
//   avarage/=odds.length
//   console.log(avarage);
 
const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) {
  average += odd;
}

average /= odds.length;
console.log(average);


//3 the most importent question 
 for(const [team,odd] of Object.entries(game.odds) ){
  const teamStr =  team === 'x' ? "draw" : `victory ${game[team]}`

  console.log( `odd of ${teamStr} ${odd}`)

 }

// const weekdays = ["mon","twes","wed","thurs","fri","sat","son" ]; 

//   const openingHour ={
//         thurs:{
//             open : 12,
//             close : 22 
//         },
//         fri :{
//             open : 11,
//             close: 23
//         },
//         sat :{
//          open :0 ,
//             close :24
//         }

//     };


// const resturent = {
//     name : 'classico Italino ',
//     locaiton :'via angelo Tavanti 23, firenze , Italy',
//     categories : ['Italian ', 'Pizzeria', 'Vegetarian ', 'organic '],
//     startMenu :['Focaccia ', 'Bruschetta ', 'Garlic', 'Bread ', 'cprese salad '],
//     mainManu : ['Pizza', 'pasta ',"Risoto"], 

// // ES6 enhanced object litarals 
//     openingHour,
  
//     order(starterIndex,mainIndex){
//         return [this.startMenu[starterIndex],this.mainManu[mainIndex]];

//     },
    
//     orderDelevery({starterIndex = 1,mainIndex = 0,address, time= "2:00" }){
//         console.log(`order received ${this.startMenu[starterIndex]} and ${this.mainManu[mainIndex]} 
//             on the place ${address} at ${time}`);

//     },  
     
//     orderPasta(ing1, ing2, ing3){
//         console.log(`here is your delicious pasta with the ingrediant ${ing1}, ${ing2}, ${ing3}`)

//     },
//     orderPizza(mainIngediant , ...otheringrediant){
//         console.log(mainIngediant);
//         console.log(otheringrediant);


//     }

// };




// const menu = [...resturent.startMenu,...resturent.mainManu];

// for(const [index,elements] of menu.entries()){
//     console.log(`${index+1} : ${elements}` )
// }; 







// const days = ["mon","tus " ,"wed","thu","fri","sat", "sun"]

// for(const day of days){
//     console.log(day)
//     const open = resturent.openingHour[day]?.open ?? "closed"
//     console.log(`one the ${day} we open at ${open}`)
// }
 
// const user = [{name :"batman ", email : "batstackoverfllow"}];


// console.log(user[0].name ?? "the user is emty ")
// console.log(user[0]?.name ?? "the user is emty ")









// const fruits =  ["apple ", "banana", "cherry"];

// for(const [index,myFruits] of fruits){
//     console.log(index + 1, myFruits);
// }
// console.log(fruits)

// for(const [index,myFruits] of fruits.entries()){
//     // console.log(` fruit ${index +1} : ${myFruits}`)
// };

 

// const home = ["moutolams ", "wyne maner ", "lost of everyitng "];

// const mHom = home.entries()
// console.log(mHom.next().value);

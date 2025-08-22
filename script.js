"use strict"


const weekdays = ["mon","twes","wed","thurs","fri","sat","son" ]; 

  const openingHour ={
        thurs:{
            open : 12,
            close : 22 
        },
        fri :{
            open : 11,
            close: 23
        },
        sat :{
            open :0 ,
            close :24
        }

    };


const resturent = {
    name : 'classico Italino ',
    locaiton :'via angelo Tavanti 23, firenze , Italy',
    categories : ['Italian ', 'Pizzeria', 'Vegetarian ', 'organic '],
    startMenu :['Focaccia ', 'Bruschetta ', 'Garlic', 'Bread ', 'cprese salad '],
    mainManu : ['Pizza', 'pasta ',"Risoto"], 

// ES6 enhanced object litarals 
    openingHour,
  
    order(starterIndex,mainIndex){
        return [this.startMenu[starterIndex],this.mainManu[mainIndex]];

    },
    
    orderDelevery({starterIndex = 1,mainIndex = 0,address, time= "2:00" }){
        console.log(`order received ${this.startMenu[starterIndex]} and ${this.mainManu[mainIndex]} 
            on the place ${address} at ${time}`);

    },  
     
    orderPasta(ing1, ing2, ing3){
        console.log(`here is your delicious pasta with the ingrediant ${ing1}, ${ing2}, ${ing3}`)

    },
    orderPizza(mainIngediant , ...otheringrediant){
        console.log(mainIngediant);
        console.log(otheringrediant);


    }

};










// silce method 
const airLine = "TAP air Portugal";

const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log("B737"[0]); 

console.log(airLine.length);
console.log("B737".length);

//methods 
console.log(airLine.indexOf("r"));
console.log(airLine.lastIndexOf("r"));

console.log(airLine.indexOf("Portugal"));
console.log(airLine.slice(4));

console.log(airLine.slice(4,7))

console.log(airLine.slice(0 ,airLine. indexOf(" ")));

console.log(airLine.slice(airLine.lastIndexOf(" ")+1));

console.log(airLine.slice(-1));

console.log(airLine.slice( 1,-2));




const cheackMiddleSeat = function(seat){
    const s =  seat.slice(-1);
    if(s === "B"||s ==="E"){
        console.log("You have a seat on middle ");
    }else{
        console.log("you are lucky one ")
    }

}

cheackMiddleSeat("11B");
cheackMiddleSeat("23C"); 
cheackMiddleSeat("3E");


console.log(new String("utshob"));
console.log( typeof  new String("utshob"));

console.log(new String("BATMAN"));
console.log(typeof new String("BATMAN"));









// const restT = new Map();

// restT.set("name", "clacico italiano");

// restT.set(1,"maxican,  NOWWHARE");
// console.log(restT.set(2,"lisbon , portugal"));

// restT
//     .set("catagoris",['Italian ', 'Pizzeria', 'Vegetarian ', 'organic '])
//     .set("open", 11 )
//     .set("close",23)
// .set(true, "we are open :D")
// .set(false,"we are closed :(")

// console.log(restT.get("name"));
// console.log(restT.get(true));
// console.log(restT.get(1));

// const time = 21;

// console.log(restT.get(time>restT.get("open") && time < restT.get("close") ));

// console.log(restT.has("catagoris"));
// restT.delete(2);


// const arrT = [1,2];

// restT.set(arrT, "test");

// restT.set(document.querySelector('h1') , "Heading");

// // restT.clear()
// console.log(restT)

// console.log(restT.size)

// console.log(restT.get(arrT));

// const question = new Map([["question", "what is the best porgramming langugae in the world ? tell me what is "],
//     [1, "c" ],
//     [2,"python"],
//     [3,"javascript"],
//     ['correct',3],
//     [true,'correct'],
//     [false,"try again "]
// ]) ;

// console.log(question);


// // convert object  into  maps 
// console.log(Object.entries(openingHour));

// const hoursMapT  = new Map(Object.entries(openingHour));

// console.log(hoursMapT);


// console.log(question.get("question"))
// for(const [key,value] of question){
//     if(typeof key === "number"){
//         console.log(`answer${key}: ${value}`)
//     }

// }

// // const answer = Number(prompt("your answer")); //  to get the asnwer from the user and make it number becasue we campapre with number  

// const answer =  3
// console.log(answer);
// console.log(question.get(question.get("correct") === answer));



// // convert map inot array 

// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.values()]);
// console.log([...question.keys()]);



// const gameEvent =  new Map([
//     [17,"goal"],
//     [36,"Substitution"],
//     [47,"goal"],
//     [61,"substitution"],
//     [64,"yellow card "],
//     [69,"red card "],
//     [70,"substitution "],
//     [76,"goal"],
//     [80,"goal"],
//     [92,"yellow card"]
// ]); 



// const events = [...new Set(gameEvent.values())];
// console.log(events)

// gameEvent.delete(64);
// console.log(gameEvent)

// let totalEvnt = 0;
// let lastEvent = 0;
// for(const[key,value] of gameEvent.entries()){

// }

// const events = new Set([  
//     [17,"goal"],
//     [36,"Substitution"],
//     [47,"goal"],
//     [61,"substitution"],
//     [64,"yellow card "],
//     [69,"red card "],
//     [70,"substitution "],
//     [76,"goal"],
//     [80,"goal"],
//     [92,"yellow card"]
// ])

// console.log(events)
// const properties = Object.keys(openingHour);
// console.log(openingHour);

// let openStr =`we are open on ${properties.length} days :`;


// for( const days of properties ){
//     openStr += `${days}`
//  }
//  console.log(openStr)

// const properties = Object.keys(openingHour);
// console.log(properties);
// let openstar = `we are open on ${properties.length} days : `
// console.log(openstar);

// for(const day of properties){
//       openstar += `${day}`

// };

// console.log(openstar);


// const values =  Object.values(openingHour);
// console.log(values);


// const entries = Object.entries(openingHour);


// console.log(entries)

// // console.log(entries);

// for(const [key,{open,close}] of entries){
//     console.log(`on ${key}, we open at ${open} and close at ${close}`);
// }



// const orderSet = new Set(["pasta","pizza","risato", "pasta", "pizza","pizza","pasta"]);

// console.log(orderSet);

// console.log(new Set("lutfor jaman uthsob "))
// console.log(orderSet.size);
// console.log(orderSet.has("pasta"));
// console.log(orderSet.has("bread"));

// orderSet.delete("risato")
// orderSet.add("Garlic bread ");
// // orderSet.clear();
// console.log(orderSet);

// for(const x of orderSet){
//     console.log(x)
// }

// const stuff = ["waiter","chef","manager","chef","manager","chef","waiter","manager"];

// const stuffUnique = [...new Set(stuff)];

// console.log(stuffUnique);
// console.log(new Set(["waiter","chef","manager","chef","maneger","chef","waiter","manager"]).size); 




// // most importents maps 

// const rest = new Map();

// rest.set("name" , "clasico itlinio");
// rest.set(1,"Farncize, Italino ");
// console.log(rest.set(2,"liwbon portugal")); 


// rest.
// set("categories", ['Italian ', 'Pizzeria', 'Vegetarian ', 'organic '],) 
// .set("open", "11")
// .set("closed" , "23")
// .set(true,"we are open :D")
// .set(false,"we are clsoed :( ");

// rest.get("name")
// console.log(rest.get("name"));

// console.log(rest.get(true));

// console.log(rest.get(1));

//  const time = 21 ;

//  console.log(rest.get(time >rest.get("open") && time < rest.get("closed")));

    
//  console.log(rest.has("categories"));

//  rest.delete(2);
// //  rest.clear();

// const arr = [1,2]
// rest.set(arr,"test")
// rest.set(document.querySelector("h1"),"heading");
//  console.log(rest);

// console.log(rest.size);

// console.log(rest.get(arr));

// const question = new Map([
//     ["question" , "what is the best programming language in the world ?"],
//     [1, "c"],
//     [2,"java"],
//     [3,"javascirpt"],
//     ["correct",3],
//     [true,"correct "],
//     [false , "try agian ? "]


// ])

// console.log(question);

// // convert object to map 
// console.log(Object.entries(openingHour));


// const HoursMap = new Map(Object.entries(openingHour));

// console.log(HoursMap);

// console.log(question.get("question"))
// for(const [key,value] of question){
//     if (typeof key === "number") {
//         console.log(`Answer ${key} : ${value}  `)
//         }
// }

// // const answer = Number(prompt("your answer "))

// const answer = 3;
// console.log(answer);

 


// console.log (question.get(question.get("correct") === answer));

// console.log(...question);
// // console.log(question.entries());
// console.log([...question.entries()]);
// console.log([...question.values()]);


// const orderiteam = new Set (["pasta","pizza", "risato","pizza","pasta","pizza"]);
// console.log(orderiteam);

// console.log(orderiteam.size);
// console.log(orderiteam.has("pizza"));
// console.log(orderiteam.has("bread"));

// orderiteam.add("garlic pizza");
// console.log(orderiteam)

// orderiteam.delete("risato")

// // orderiteam.clear();
// console.log(orderiteam); 


// for(const order of orderiteam){
//     console.log(order)
// };


// const staff = ["waiter","chef","waiter","meneger","chef"];

// const staffUnique =[...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(["waiter","chef","waiter","meneger","chef"]).size);




// console.log(staffUnique);

// console.log(new Set(["waiter","chef","waiter","meneger","chef"]).size);
// console.log(staffUnique.size);

 




// if(resturent.openingHour.mon){
//     console.log(resturent.openingHour.mon.open);
// };

// if(resturent.openingHour && resturent.openingHour.mon){

//     console.log(resturent.openingHour.mon.open);
// };
// // console.log(resturent.openingHour.mon.open);

// console.log(resturent.openingHour.mon?.open);
// console.log(resturent.openingHour?.mon?.open);




// const days =["mon","twes","wed","thurs","fri","sat","son" ]; 

// for(const day of days){

//     const oepn = resturent.openingHour[day]?.open ?? "closed "
//     console.log(`on ${day}, we open at ${oepn}`)
// }


// // methods 

// console.log(resturent.orderMacMini?.(0,1) ?? "the method is not avialable")


// const users =[{
//     name : "uthsob",
//     email: "uthsobjaman2012@gmail.com"
// }];
// console.log(users[0]?.name ?? "uer arry is emty");






// if(resturent.openingHour.fri){
//     console.log(resturent.openingHour.fri.open);

// }




// if( resturent.openingHour && resturent.openingHour.mon){
//     console.log(resturent.openingHour.mon.open);

// };


// console.log(resturent.openingHour.mon?.open);
// console.log(resturent.openingHour?.mon?.open);

// // Example 
// const days = ["mon","twes","wed","ths","fri","sat","son" ]; 

// for(const day of days ) {

//     const open = resturent.openingHour[day]?.open || "closed";
//     console.log(`on   ${day}, we open at ${open}`);


// }
// //  methods

// console.log(resturent.order?.(0,1) ?? "this method is not exist ") 
// console.log(resturent.orderKalavuna ?.(0,1) ?? "this method is not exist ") 



// if(resturent.openingHour.fri){
//     console.log(resturent.openingHour.fri.open);

// }





// const menu = [...resturent.startMenu,...resturent.mainManu];

//  console.log(menu);


//  for(const item of menu){
//     console.log(item);
//  }
//  for(const [i,el] of menu.entries()){
//     console.log(`${i + 1} : ${el}`);
//  };

//  console.log([...menu.entries()]);








// const resturent1 ={
//     name : "the eting store ",
//     //numGuest : 10,
//     numGuest : 0,
// } ;

// const resturent2 =  {
//     name : "fatisto resturant .23",
//     owner : "barobudos antenio ",
// };

// // resturent1.numGuest =  resturent1.numGuest || 10;  // in this line the or oparator did not find any kind  valuse  means 
// // // false 
// // //  so it sift to the next valuse 
// // resturent2.numGuest = resturent2.numGuest  || 10; // where it  finds the vale 20 so it is turehy so it didnot jump to next 

// // or assignment oppartor 
// //resturent1.numGuest ||= 10;
// // resturent2.numGuest ||= 10 ;

// // nullish assignment oparator 
// resturent1.numGuest ??=10;
// resturent2.numGuest ??=10;

// // and assingment oparator 
// // resturent1.owner = resturent.owner && "<Anoynomious>"
// // resturent2.owner = resturent2.owner && "<Anoynomious>"


// resturent1.owner &&= "<Anoynomious>"
// resturent2.owner &&= "<Anoynomious>"

// console.log(resturent1);
// console.log(resturent2);





// resturent.numGuest = 0;
// const guest = resturent.numGuest || 10 ;

// console.log(guest);


// const correctGuest =  resturent.numGuest ?? 10;

// console.log(correctGuest);





// console.log("ami" || 5);
// console.log("" || "utshob");
// console.log( true || 0);
// console.log(undefined || null);


// console.log( undefined    || 0 || "hello world " || " null" || 23 );


// resturent.numGuest = 250
// const guest1 = resturent.numGuest ? resturent.numGuest : 10

// console.log(guest1);
// const guest2 =resturent.numGuest || 10 ;
   
// console.log(guest2);
 

// console.log("---and---");

// console.log(0 && 250 );

// console.log(null && "utshob");

// console.log("utshob" && "is the villain ");

// console.log(55 && "utshob" && 33); 

// console.log("hello" && 23 && null && "UTSHOB ")

// if(resturent.orderPizza ){
//     resturent.orderPizza("moshoom " , "RC");
// };


// resturent.orderPizza && resturent.orderPizza("moshrom", "RC", "POTETO CHIPSCE ") 

// console.log("utshob" || "Delali park " || null);

// console.log(null|| undefined || "justeen");

// console.log(undefined || null || 0);

// console.log(22 && 22);

// console.log(0 && 2502502 );

// console.log(22 && 0);




// resturent.orderDelevery({
//     time :"22 :30",
//     address :"siru bahiar paher basaye",
//     starterIndex :2,
//     mainIndex:2,
// })

// resturent.orderDelevery({
//      address :"siru bahiar paher basaye",
//      starterIndex :1,
// })


// const {name,openingHour, categories}  = resturent; 
// // console.log(name,openingHour,categories);



// const {name : resturentName  , openingHour : times, categories : tags } = resturent;

// // console.log(resturentName,times,tags);


// // Defoult values 
//  const { menu = [], startMenu : staters =[]} =resturent ;
 
// // console.log(menu,staters);

// // meautating variables 

// let a = 111;
// let b = 999;

// const obj = {a:23,b:45,c:14};
// //  or we can write like this 
// // a = obj.a ;
// // b = obj.b;
// ({a,b} = obj)
// // nested objects 

// const{fri:{open : oM , close :tX}} = openingHour; 

// // console.log(oM,tX );


// const arr = [7,8,9];
// const batArr =[1,2,3,arr[0],arr[1],arr[2]];
// console.log(batArr)

// const newArr =[1,2,3,...arr];
// // console.log(newArr);

// // console.log(...newArr);


// const mainMenuCopy = [...resturent.mainManu];

// // const newItem = [...resturent.mainManu,"allu votta", "dim vaji "]   ;
// // console.log(newItem);
// const manu = [...resturent.mainManu,...resturent.startMenu];

// // console.log(manu)



// resturent.orderPizza("mushroom","onion ", "oliver","sapnish");
// resturent.orderPizza("mushroom")
 

// const nameOf =  "uthsob " ; 
// const letters = [...nameOf];




// // console.log(...nameOf);

// // const ingredinet = [prompt("lets make a pastha with ingredianet 1"),prompt('lets make a pastha with ingredianet 2'), 
// //     prompt("lets make a pastha with ingredianet 3")
// // ];

// // console.log(ingredinet);

// // resturent.orderPasta(ingredinet[0],ingredinet,[1],ingredinet[2]);

// // resturent.orderPasta(...ingredinet);

// const newResturent ={founding:1999,...resturent,funder: "jemes chlonoskie "};

// // console.log(newResturent);

// const resturentCopy = {...resturent};

// resturentCopy.name = "Denali park and restrent ";

// // console.log(resturentCopy.name);
// // console.log(resturent.name); 
// //spred oparator



// const [Pizza, ,Risoto,...otherfood ] = [...resturent.mainManu, ...resturent.startMenu];

// // console.log(Pizza,Risoto,otherfood);

// //objects


// const {sat,...weekdays} = resturent.openingHour;
// // console.log(weekdays) ;


// const porerty = {
//     cars : "mz9",
//     hosue : "bari,gor , and fram hosue ",
//     bikes : "dirt bikes"
// };


// const {cars,...otherProperty} = porerty;
// // console.log( cars,otherProperty); 


// const add  = function(...number){
//     let sum = 0;
//     for(let i = 0; i< number.length; i++ ) sum+=number[i];
//     console.log(sum);

 
// }

// add(5,6,8,);

// add(4,6,8,9,5,3,2,3,);

// add(1,2,3,45,90);

// const x = [50,50,50];
// add(...x);  

// const t =[50,36];
// add(...t);


// const newMenu  =[...resturent.mainManu, "beef kabab "];
// console.log(newMenu);

// let a = 111;
// let b = 999;
// const obj = {a:23, b :7 , c : 14 };

// ({a,b} = obj);
// console.log(a,b) ;
// const arr = [2,3,4];
// const a =arr[0];
// const b =arr[1];
// const c =arr[2];


// // const [x,y,z] = arr;
// // console.log(c)

// // console.log(x,y,z);

// // console.log(arr)
// let  [main, , secoundary ] = resturent.categories;
// // console.log("before swapping ",main ,secoundary);


// // switching varialbles 

// // const temp = main;
// // main = secoundary;
// // secoundary = temp;

// [main,secoundary] = [secoundary, main];

// // console.log(main,secoundary);

// // console.log(resturent.order(2,0));
// // we recive 2 return values form funciton  
// const[stater,mainCourse ]= resturent.order(2,0);
// // console.log(stater,mainCourse);




// // nested desturcturing 

// const nested = [2,4,[5,6]];
// // const [i,,j] = nested;

// // console.log(i,j);

// const [i, ,[j,k]] = nested;

// // console.log(i,j,k); 


// const [p = 1,q = 1,r = 1 ] = [8,9];

// // console.log(p,q,r)



// const user = {
//     name :"Alice" ,
//     age : 22
// }

// let nameZ = user.name ;
// let age   = user.age;

// console.log(nameZ);
// console.log(age);


// const userX ={
//     name :"Alice",
//     age : 22,

// }

// let { name :nameTX, age : ageX }  = userX ; 

// console.log(nameTX,ageX);   

// const user = {
//   name: "Alice",
//   age: 30
// };

// // This one line does the same as the two lines above!
// let { name, age } = user;

// console.log(name); // "Alice"
// console.log(age);  // 30


// const something  = ['cars ', 'mobile', 'cattles ', 'computers ', 'tv', 'tools', 'bike ','house','lands'];

// for(let x = 0; x <something.length; x++ ){
    
//     // console.log(something[x])

// }

//  let [gk,...filedPlayers] = players2;

// console.log("fild player tam 2 :",filedPlayers);

// const allPlayers = [...player1,...player2];

// console.log("ALL PLAYERS AT ONE ",allPlayers);


// const subPlayer = ["thiago ", "couthinho ", "persic "];

// const player1Final = [...allPlayers,...subPlayer];

// console.log(player1Final);


// const {odds={team1,x ,team2}} =game;
// console.log(team1,team2,x);


// const {odds:{team1,x :draw ,team2}} =game;
// console.log(team1,team2,draw);


// const user = {
//   name :'max heachman ', 
//   id   :'20242024' ,
//   age  : 45,  
// }

// const  age = user.age; 

// console.log(age);



// const userTx ={
//   name :"jonathosn ",
//   age : 45,
//   id : "54547852",
//   tx : "the bing one of the best thing that can ",
// };

// const {name , id , tx } = userTx;
// console.log(name, id, tx );

// const  user0 = {
//   name : "gork",
//   age  :  "20",
//   id   : "25045txz20.3", 
//   educaiton : {
//     degree : "masters", 
//     instutituitons : "East west University ",
//   },
// }

// const { educaiton :{degree,instutituitons}} = user0;
// console.log(degree, instutituitons);



// const add = function(...number){
//   let sum =0;
//   for(let i =0; i<number.length; i++) sum += number[i]
//   console.log(sum);



// };

// add(5,5);
// add(40,50,60,20,63,50)
// add(45,42,89,62,12,28);
// add(544,785,96,44);

// const printGoals = function(...players){
  
// }

// const myPets = ["cows","dogs","chikens "];

// const myWish =[...myPets,"horse","birds"];

// console.log(myWish);

// const supGame =[[1,2,3,4,5,6],[7,8,9,10,11,12,13,14]];

// const [batGame,flashGame] =supGame;
// console.log(batGame,flashGame);
// const arr = [["batman","godzilla", "adheera","garuda ","vallal dev "],["deathsotek" ,"kancha"]]

// const [teamA,teamB] = arr;
// console.log(teamA);
// console.log(teamB);


// const fruits = ["apple","banana","cherry"];

// for(let i =0; i<20;i++){
//   console.log(fruits[i % fruits.length]);
// }


// const myApps =["vscode","github","safari","yahoo","twitter"];

// for(const apps of myApps){
//   console.log(apps)
// }


// const women  = {
//   name :"urbashi",
//   age : '22',
//   hight : "5.7",
//   home : "deli "
// };


// for(const womss in women){
//   console.log(women[womss])
// };
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25, 
//     team2: 6.5,
//   },
// };

// // const player1 =[ 
// //       'Neuer',
// //       'Pavard',
// //       'Martinez',
// //       'Alaba',
// //       'Davies',
// //       'Kimmich',
// //       'Goretzka',
// //       'Coman',
// //       'Muller',
// //       'Gnarby',
// //       'Lewandowski',
    
// // ];


// // const player2 = [
// //       'Burki',
// //       'Schulz',
// //       'Hummels',
// //       'Akanji',
// //       'Hakimi',
// //       'Weigl',
// //       'Witsel',
// //       'Hazard',
// //       'Brandt',
// //       'Sancho',
// //       'Gotze',

// // ];

// const [players1 ,players2 ] = game.players;

// console.log(players1,players2);

// // const gk1 = player1[0];
// // const filedPlayers = [player1[1],player1[2],player1[3],player1[4],player1[5],
// // player1[6],player1[7],player1[8],player1[9],player1[10]];

// // console.log("goal keeper team 1 :",gk1);

// const [gk,...filedPlayers] = players1;

// const allPlayers =[...players1,...players2];

// console.log(allPlayers);


// const players1final =[...players1, "thiago","chuthino", "persisic" ];
// console.log(players1final); 


//   // 5
// const {odds :{team1, x :draw,team2}} = game;
// console.log(team1,draw,team2); 


// // 6 

// const printGoals = function(...players){
//   console.log(`${players.length}, goals ware scored `)

// };

// printGoals("Daveis", "mullar","lewandoski","kimich");
// printGoals("Daveis", "mullar");

// printGoals(...game.score);

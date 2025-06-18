"use strict"

const resturent = {
    name : 'classico Italino ',
    locaiton :'via angelo Tavanti 23, firenze , Italy',
    categories : ['Italian ', 'Pizzeria', 'Vegetarian ', 'organic '],
    startMenu :['Focaccia ', 'Bruschetta ', 'Garlic', 'Bread ', 'cprese salad '],
    mainManu : ['Pizza', 'pasta ',"Risoto"], 
    openingHour :{
        thu:{
            open : 12,
            close : 22 
        },
        fri :{
            open : 11,
            close: 23
        },
        sat :{
            open :0,
            close :24
        }

    },
    order :function(starterIndex,mainIndex){
        return [this.startMenu[starterIndex],this.mainManu[mainIndex]];

    },
    
    orderDelevery : function({starterIndex = 1,mainIndex = 0,address, time= "2:00" }){
        console.log(`order received ${this.startMenu[starterIndex]} and ${this.mainManu[mainIndex]} 
            on the place ${address} at ${time}`);

    },  
     
    orderPasta : function(ing1, ing2, ing3){
        console.log(`here is your delicious pasta with the ingrediant ${ing1}, ${ing2}, ${ing3}`)

    },
    orderPizza : function(mainIngediant , ...otheringrediant){
        console.log(mainIngediant);
        console.log(otheringrediant);


    }

}

resturent.numGuest = 0;
const guest = resturent.numGuest || 10 ;

console.log(guest);


const correctGuest =  resturent.numGuest ?? 10;

console.log(correctGuest);





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


const something  = ['cars ', 'mobile', 'cattles ', 'computers ', 'tv', 'tools', 'bike ','house','lands'];

for(let x = 0; x <something.length; x++ ){
    
    // console.log(something[x])

}
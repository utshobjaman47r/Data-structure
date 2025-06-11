"use strict"

const resturent = {
    name : 'classico Italino ',
    locaiton :'via angelo Tavanti 23, firenze , Italy',
    categories : ['Italian ', 'Pizzeria', 'Vegetarian ', 'organic '],
    startMenu :['Focaccia ', 'Bruschetta ', 'Garlic', 'Bread ', 'cprese salad '],
    mainManu : ['Pizza', 'pasta '], 
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
    orderDelevery : function(obj){
        console.log(obj)

    } 

}



const {name,openingHour, categories}  = resturent; 
console.log(name,openingHour,categories);



const {name : resturentName  , openingHour : times, categories : tags } = resturent;

console.log(resturentName,times,tags);


// Defoult values 
 const { menu = [], startMenu : staters =[]} =resturent ;
 
console.log(menu,staters);

// meautating variables 

let a = 111;
let b = 999;

const obj = {a:23,b:45,c:14};
//  or we can write like this 
// a = obj.a ;
// b = obj.b;
({a,b} = obj)
// nested objects 

const{fri:{open : oM , close :tX}} = openingHour; 

console.log(oM,tX );














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
"use strict"

const resturent = {
    name : 'classico Italino ',
    locaiton :'via angelo Tavanti 23, firenze , Italy',
    categories : ['Italian ', 'Pizzeria', 'Vegetarian ', 'organic '],
    startMenu :['Focaccia ', 'Bruschetta ', 'Garlic', 'Bread ', 'cprese salad '],
    mainManu : ['Pizza', 'pasta ']

}



const arr = [2,3,4];
const a =arr[0];
const b =arr[1];
const c =arr[2];


const [x,y,z] = arr;
console.log(c)

console.log(x,y,z);

console.log(arr)
const [frist, , secound ] = resturent.categories;
console.log(frist ,secound);



let guestArray:string[] = ["Shery", "Ali", "shani"];

let canNotAttend:string = "Ali";



let newGuest : string = "Asad";

guestArray[guestArray.indexOf(canNotAttend)]=newGuest;



console.log("Welcome all we found a bigger dinner table!");

guestArray.unshift("Asad");


let middleGuest:string = "hatim";
let middleIndex= guestArray.length/2;
guestArray.splice(middleIndex,0,middleGuest);

guestArray.push("Ali Khan");

guestArray.map((item)=>console.log(`\nDear ${item} You are invited to dinner!`))

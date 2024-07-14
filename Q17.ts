
let guestArray:string[] = ["Shery", "Ali", "shani"];

let canNotAttend:string = "Ali";


let newGuest : string = "Asad";

guestArray[guestArray.indexOf(canNotAttend)]=newGuest;

guestArray.unshift("Asad");

let middleGuest: string = "hatim";
let middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);

guestArray.push("Ali Khan");

console.log(guestArray);
console.log("we can invite only two people for dinner!");

while(guestArray.length>2){
let removeguest = guestArray.pop();
console.log(`Sorry ${removeguest} we cannot invite you to dinner!`);

};

guestArray.map((item)=>console.log (`${item} You are still invited to dinner!`));

guestArray.pop();
guestArray.pop();
console.log(guestArray);



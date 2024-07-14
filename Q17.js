var guestArray = ["Shery", "Ali", "shani"];
var canNotAttend = "Ali";
var newGuest = "Asad";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
guestArray.unshift("Asad");
var middleGuest = "hatim";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
guestArray.push("Ali Khan");
console.log(guestArray);
console.log("we can invite only two people for dinner!");
while (guestArray.length > 2) {
    var removeguest = guestArray.pop();
    console.log("Sorry ".concat(removeguest, " we cannot invite you to dinner!"));
}
;
guestArray.map(function (item) { return console.log("".concat(item, " You are still invited to dinner!")); });
guestArray.pop();
guestArray.pop();
console.log(guestArray);

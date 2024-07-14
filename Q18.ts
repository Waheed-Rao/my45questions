// Define an array of places to visit
let placesToVisit: string[] = ["Islamabad", "Karachi", "Lahore", "Peshawar", "Quetta"];

// Print original order
console.log("Original Order:");
console.log(placesToVisit);

// Print alphabetical order without modifying the original list
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

// Show that the original order is unchanged
console.log("\nOriginal Order:");
console.log(placesToVisit);

// Print reverse alphabetical order without modifying the original list
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

// Show that the original order is still unchanged
console.log("\nOriginal Order:");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reverse the order again to get back to the original order
placesToVisit.reverse();
console.log("\nOriginal Order:");
console.log(placesToVisit);

// Sort the array in alphabetical order
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit.sort());

// Sort the array in reverse alphabetical order
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit.sort().reverse());

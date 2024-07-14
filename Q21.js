// Define an array of country objects
var countries = [
    { name: "USA", capital: "Washington D.C.", population: 331000000 },
    { name: "China", capital: "Beijing", population: 1441000000 },
    { name: "India", capital: "New Delhi", population: 1380000000 },
    { name: "Brazil", capital: "Brasília", population: 212000000 },
    { name: "Russia", capital: "Moscow", population: 146000000 },
    { name: "Japan", capital: "Tokyo", population: 126000000 },
    { name: "Germany", capital: "Berlin", population: 83000000 },
    { name: "United Kingdom", capital: "London", population: 67000000 },
    { name: "France", capital: "Paris", population: 65000000 },
    { name: "Italy", capital: "Rome", population: 60000000 }
];
// Print information about each country
console.log("List of Countries:");
countries.forEach(function (country) {
    console.log("Country: ".concat(country.name, ", Capital: ").concat(country.capital, ", Population: ").concat(country.population));
});

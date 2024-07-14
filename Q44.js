function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order:");
    for (var i = 0; i < items.length; i++) {
        console.log("~ ".concat(items[i]));
    }
}
console.log("enjoy your sandwich Albaik");
sandwich("club", "BBQ Club", "cheese");
sandwich("Beef Club", "Beef Cheese", "BBQ Beef Cheese");
sandwich("Mayo Garlic", "Hot & Spicy", "Vegitable");

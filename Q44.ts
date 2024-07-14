function sandwich(...items: string[]): void {
    console.log("Sandwich order:")
    for (let i=0; i < items.length; i++) {
        console.log(`~ ${items [i]}`)
    }
}

console.log("enjoy your sandwich Albaik")
sandwich( "club", "BBQ Club", "cheese")
sandwich("Beef Club", "Beef Cheese", "BBQ Beef Cheese")
sandwich("Mayo Garlic", "Hot & Spicy", "Vegitable")
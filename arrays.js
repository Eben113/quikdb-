const inventory = [
    { name: 'Apple', price: 2, quantity: 30 },
    { name: 'Banana', price: 1, quantity: 50 },
    { name: 'Orange', price: 3, quantity: 20 }
  ];
  inventory.push({name: "Mango", price: 4, quantity: 15})
  console.log(inventory)
  console.log("\n\n")

  ind = inventory.indexOf(inventory.find((f) => f.name == "Banana"))
  inventory.splice(ind, 1)
  console.log(inventory)
  console.log("\n\n")

  ind = inventory.indexOf(inventory.find((f) => f.name == "Orange"))
  inventory[ind].quantity -= 10
  console.log(inventory)
  console.log("\n\n")

let a = inventory.find((f) => f.name == "Apple")
console.log(a? a: "Item not found")
console.log("\n\n")

console.log(inventory.filter((f) => f.price <= 4))
console.log("\n\n")

console.log(`Total inventory value: ${inventory.map((f) => f.price*f.quantity).reduce((curr, val) => curr+val, 0)}`)
console.log("\n\n")

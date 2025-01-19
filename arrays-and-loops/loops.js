const inventory = [
    { name: 'Apple', price: 2, quantity: 30 },
    { name: 'Banana', price: 1, quantity: 50 },
    { name: 'Orange', price: 3, quantity: 20 },
    { name: 'Mango', price: 4, quantity: 15 }
  ];

  for(let item of inventory){
    item.price *= 2
  }
  console.log(inventory)
  console.log("\n")

i = 0
while(i < inventory.length && inventory[i].quantity >= 5){
    inventory[i].quantity -= 5
    i++
}
console.log(inventory)
console.log("\n")

cheap = []
for(let item of inventory){
    if(item.price < 5){
        cheap.push(item)
    }
}
console.log(cheap)
console.log("\n")

total_quantity = 0
for(let item of inventory){
    total_quantity += item.quantity
}
console.log(`Total Quantity: ${total_quantity}\n`)

new_ = []
for(let item of inventory){
    item_ = item
    item_.name = "new "  + item_.name
    item_.price *= 1.1
    new_.push(item_)
}
console.log(new_)

const items = [
    {
        id: 1,
        name: "Milk",
        price: 3
    },
    {
        id: 2,
        name: "Eggs",
        price: 8
    },
    {
        id: 3,
        name: "Pizza rolls",
        price: 12
    },
    {
        id: 4,
        name: "Protein powder",
        price: 22
    },
    {
        id: 5,
        name: "Oranges",
        price: 4
    },
    {
        id: 6,
        name: "Sandwhich buns",
        price: 9
    },
    {
        id: 7,
        name: "Ketchup",
        price: 4
    },
    {
        id: 8,
        name: "Ranch",
        price: 4
    }
]

const mustard = {
    name: "mustard",
    price: 4
}

const pickles = {
    name: "pickles",
    price: 7
}

const hamburgers = {
    name: "hamburgers",
    price: 16
}

const chicken = {
    name: "chicken",
    price: 14
}

const frozenPizza = {
    name: "frozen pizza",
    price: 12
}

function addToShoppingList (array, item, price) {
    item = {
        id: array.length + 1,
        name: item, 
        price: price,
        dateCreated: Date()
    }

    array.push(item)
    return item
}

addToShoppingList(items, "mustard", 4)
addToShoppingList(items, "pickles", 7)
addToShoppingList(items, "hamburgers", 16)
addToShoppingList(items, "chicken", 14)
addToShoppingList(items, "frozen pizza", 12)

console.log(items)

for  (const item of items) {
    console.log(`The price of ${item.name} is $${item.price}.`)
}

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

for  (const item of items) {
    console.log(`The price of ${item.name} is $${item.price}.`)
}


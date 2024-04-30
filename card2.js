/*
* Crear tarjeta
* Crear secciones para tarjeta
* Img
* Nombre, desc, edad, lista de algo
* Insertar en la tarjeta
* Mostrar dentro de div.container
*/


const USER = [
    {
    id: 1,
    username: "User Name",
    desc: "Sobre mi",
    age: 27,
    fav_books: {
        books: ["Hush Hush", "Mírame y dispara", "After", "El principito", "La chica del tren",
        ],
    },
},
    {
    id: 2,
    username:"booklover123",
    desc:"Avid reader and coffee enthusiast.",
    age:29,
    fav_books: {
    books: ["To Kill a Mockingbird", "1984", "Pride and Prejudice"]
    }
},
    {
    id: 3,
    username: "literature_junkie",
    description: "Poetry lover and amateur writer.",
    age: 35,
    fav_books: {
    books: ["The Great Gatsby", "Invisible Man", "Beloved"]
    }
    }
]

const CARDS_CONTAINER = document.querySelector("#card-container");

USER.forEach(USER => {
    const tarjeta = document.createElement("div")
    tarjeta.innerHTML=
    CARDS_CONTAINER.appendChild(tarjeta)
}
);



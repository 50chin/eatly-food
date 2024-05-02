const dishes = require("./dishes"); // Импортируйте массив блюд, если он вам нужен для связывания

const restaurants = [
  {
    name: "KFC",
    type: "Healthy",
    duration: "20",
    price: "12.99",
    image: "http://localhost:7777/images/restaurants/KFC.webp",
    dishes: [
      dishes[2],
      dishes[1],
      dishes[5],
      dishes[3],
      dishes[4],
      dishes[8],
      dishes[13],
    ],
  },
  {
    name: "Burger King",
    type: "Trending",
    duration: "15",
    price: "11.99",
    image: "http://localhost:7777/images/restaurants/BurgerKing.webp",
    dishes: [
      dishes[8],
      dishes[9],
      dishes[10],
      dishes[2],
      dishes[6],
      dishes[11],
      dishes[5],
    ],
  },
  {
    name: "Вкусно и точка",
    type: "Healthy",
    duration: "10",
    price: "2.99",
    image: "http://localhost:7777/images/restaurants/vkusochka.png",
    dishes: [
      dishes[12],
      dishes[8],
      dishes[7],
      dishes[15],
      dishes[2],
      dishes[4],
      dishes[9],
    ],
  },
  {
    name: "Шаурма дяди Ашота",
    type: "Healthy",
    duration: "1",
    price: "109.99",
    image: "http://localhost:7777/images/restaurants/shaverma.png",
    dishes: [
      dishes[10],
      dishes[11],
      dishes[6],
      dishes[3],
      dishes[14],
      dishes[4],
      dishes[7],
    ],
  },
];

module.exports = restaurants;

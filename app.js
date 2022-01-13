// Variable
// 하나의 entity에 대한 설명들이 나누어져 있다.
const playerName = "Kang";
const playerPoint = 12;
const playerHandsome = true;
const playerFat = "little bit";

// Array
// 각각의 값이 어떤 의미인지 알 수 없다.
// 각각에 대한 설명이 필요
const playerArray = ["Kang", 12, true, "little bit"];

// Object
// Object 내부에는 = 대신 : 사용
const player = {
    name: "Kang",
    points: 10,
    handsome: false,
};

console.log(player);
console.log(player.name);
console.log(player["points"]);
player.handsome = true;
player.fat = true;
console.log(player);
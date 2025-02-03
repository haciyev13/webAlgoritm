//! 1. Sonu 0 ilə bitən bütün 3 rəqəmli ədədləri konsola
//! çıxaran proqram yazın.

//? 1-ci usul

// for (let i = 100; i < 999; i++) {
//      if (i % 10 == 0) {
// console.log(i);
//      }
// }

//? 2-ci usul

// let key = [];
// for (let j = 100; j <= 990; j += 10) {
//      key.push(j);
// }

// for (const element in key) {
//      console.log(key[element]);
// }


//! 2. Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran
//! proqram yazın.

//? 1-ci usul
// let sum = 0;
// for (let i = 10; i <= 99; i++) {
//      if (i % 2 == 1) sum += i;
// }
// console.log(sum);


//? 2-ci usul
// let sum = 0,
//      i = 11

// while (i <= 99) {
//      sum += i;
//      i += 2;
// }
// console.log(sum);


//? 3-cu usul
// const sum = Array.from({ length: 45 }, (_, i) => 11 + i * 2).reduce((acc, num) => acc + num, 0);
// console.log(sum);



//! 3. İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün
//! üçrəqəmli ədədlərin cəmini hesablayan proqram yazın.

// let num = prompt("Eded Daxil Edin", "Misal 22"),
//      sum = 0


// for (let i = 100; i <= 999; i++) {
//      if (i % num == 0) sum += i
// }
// console.log(sum);


//! 4. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın

//? 1-ci usul 
// for (let i = 100; i <= 999; i++) {
//      if (i % 7 == 0 && i % 8 == 0) console.log(i);
// }


//? 2-ci usul 
// let i = 100,
//      sum = []

// while (i < 999) {
//      if (i % 7 == 0 && i % 8 == 0) sum.push(i)
//      i += 1
// }
// console.log(sum);


//! 5. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin
//! cəmini tapın 

//? 1-ci usul

// let sum = 0;
// for (let i = 100; i <= 999; i++) {
//      if (i % 7 == 0 && i % 8 == 0) sum += i
// }
// console.log(sum);


//? 2-ci usul


// let i = 100,
//      sum = 0;

// while (i < 999) {
//      if (i % 7 == 0 && i % 8 == 0) sum += i
//      i += 1
// }
// console.log(sum);
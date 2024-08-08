// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array1 = [1,2,3,4,5,6,7,8,9,0]
console.log(array1[0],array1[1],array1[2],array1[3],array1[4],array1[5],array1[6],array1[7],array1[8],array1[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1 = {
//     title: 'Love',
//     pageCount: 40,
//     genre : 'horror'
// };
// let book2 = {
//     title: 'Okten',
//     pageCount: 64,
//     genre : 'romantic'
// };
// let book3 = {
//     title: 'school',
//     pageCount: 127,
//     genre : 'fantastic'
// };

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: 'Love',
    pageCount: 40,
    genre : 'horror',
    author : [name = 'Harper Lee',age = 55]
};
let book2 = {
    title: 'Okten',
    pageCount: 64,
    genre : 'romantic',
    author : [name  ='George Orwell',age = 72]

};
let book3 = {
    title: 'school',
    pageCount: 127,
    genre : 'fantastic',
    author : [name  ='J.R.R. Tolkien',age = 61]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {
        name:'Kolya',username:'KolyaCiferblat',password: 123456724245
    },
    {
        name:'Ira',username:'AnalniySpazm',password: 893475923495
    },
    {
        name:'Yura',username:'Raptura',password: 402109487124
    }
]

users.forEach(element=>{
    console.log(element.username + ' - ' + element.password)
})

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let weeklyTemperature = [
    {morning:12,afternoon:14,evening:8},
    {morning:15,afternoon:17,evening:11},
    {morning:13,afternoon:22,evening:13},
    {morning:16,afternoon:26,evening:12},
    {morning:14,afternoon:21,evening:10},
    {morning:12,afternoon:16,evening:6},
    {morning:8,afternoon:12,evening:4},
];
console.log(weeklyTemperature)

// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3

if (x !== 0){
    console.log('Virno')
}else {
    console.log('Ne virno')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 52
if (time >= 0 && time <= 15 ){
    console.log('перша частина години')
} else if (time >= 16 && time <= 30){
    console.log('друга частина години')
}else if (time >= 31 && time <= 45){
    console.log('третя частина години')
}else if (time >= 46 && time <= 60){
    console.log('четверта частина години')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 25
if (day >= 1 && day <= 7){
    console.log('persha')
}else if (day >= 8 && day <= 14){
    console.log('druga')
}else if (day >= 15 && day <= 21){
    console.log('tretya')
}else if (day >= 22 && day <= 31){
    console.log('chetverta')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let weeklyDay = 6
switch (weeklyDay){
    case 1:
        console.log('English')
        break;
    case 2:
        console.log('Math')
        break;
    case 3:
        console.log('IT')
        break;
    case 4:
        console.log('Biologic')
        break;
    case 5:
        console.log('Hight math')
        break;
    case 6:
        console.log('Physics')
        break;
    case 7:
        console.log('Weekend')
        break;
}

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох . Також потрібно врахувати коли введені рівні числа.
// let number1 = prompt('enter the first number - ')
// let number2 = prompt('enter the second number - ')
// if (number1 > number2){
//     console.log(number1)
// } else if (number1 < number2){
//     console.log(number2)
// }else if (number1 === number2){
//     console.log('Rivni znachenya')
// }else {
//     console.log('??????????')
// }

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let a = undefined
a = a ? a:'default'
console.log(a)

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Super')
}

let uname = prompt('Как тебя зовут?', "Имя");
let age = prompt('Сколько тебе лет?', 0);
alert(`Привет ${uname}! Тебе ${age} лет!`); // Тебе 100 лет!


greeting = `<h1>Привет ${uname}! Тебе ${age} лет!</h1>`;


if (age < 18) {alert(`Извините, ${uname}, вход возможен только с 18 лет :( `); 
document.write(`<h1>Доступ запрещен!</h1>`);
};

if (age >= 18) { alert (`Добро пожаловать на сайт, ${uname}!`) 
document.write(`<h1>Доступ разрешен!</h1>`);
};


document.close();
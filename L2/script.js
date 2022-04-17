let uname = prompt('Как тебя зовут?', "Имя");

let age = prompt('Сколько тебе лет?', 0);

alert(`Привет ${uname}! Тебе ${age} лет!`); // Тебе 100 лет!

greeting = `<h1>Привет ${uname}! Тебе ${age} лет!</h1>`

document.open();
document.write(greeting);
document.close();
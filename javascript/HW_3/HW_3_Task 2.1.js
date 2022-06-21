// Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs.
// для дальнейшего использования в функции, описанной в задании Task 2*

'use strict'; 
 
 const fs = require('fs'); 
 // считываем данные из task2.json и присваиваем в items
 let rawdata = fs.readFileSync('task2.json'); 
 let items = JSON.parse(rawdata); 

// Функция 
const uniqueItemsFunc = function()
{
    // передаем в массив itemsEmail значения email из массива items
    let itemsEmail = items.map(person => {
        return person.email;
    })
    // передаем в массив emails только уникальные значения email из массива itemsName
    let emails = Array.from(new Set(itemsEmail))

    // передаем в массив uniqueItems только уникальные элементы массива items
    let uniqueItems = []
    for(let i=0;i<emails.length;i++){
        for(let j=0;j<items.length;j++){
            if(emails[i] == items[j].email)
            {
                uniqueItems.push(items[j])
                break;
            }
        }
    }
    //Изменяем наш первоначальный массив(items), чтобы он хранил только уникальные значения
    items = uniqueItems

}
uniqueItemsFunc()
console.log("Уникальные значения массива items: ")
items.forEach(item => {
    console.log(item)
});
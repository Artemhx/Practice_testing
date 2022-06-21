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
    // передаем в массив itemsName значения name из массива items
    let itemsName = items.map(person => {
        return person.name;
    })
    // передаем в массив uniqueNames только уникальные значения name из массива itemsName
    let uniqueNames = Array.from(new Set(itemsName))

    // передаем в массив uniqueItems только уникальные элементы массива items
    let uniqueItems = []
    for(let i=0;i<uniqueNames.length;i++){
        for(let j=0;j<items.length;j++){
            if(uniqueNames[i] == items[j].name)
            {
                uniqueItems.push(items[j])
                break;
            }
        }
    }
    //Изменяем наш первоначальный массив(items), чтобы он хранил только уникальные значения
    items = uniqueItems
    console.log("Уникальные значения массива items: ")
    items.forEach(item => {
        console.log(item)
    });
}
uniqueItemsFunc()
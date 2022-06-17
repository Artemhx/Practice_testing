
//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
let num = 2;
power = 10;
let result
for(let i = 1;i <= power;i++)
{
    result = num ** i
    console.log(num + "^" + i + " = " + result) 
}

//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const exponentiation = function(power)
{
    if(typeof power == 'number'){
        let num = 2;
        let result
        for(let i = 1;i <= power;i++)
        {
            result = num ** i
            console.log(num + "^" + i + " = " + result) 
        }
    }else console.log("Ошибка! Введены неопознанные значения")

}

exponentiation(15)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let str = ""
let strCount = 5
for(let i=0;i < strCount;i++)
{
    console.log(str+=":)")
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

const printStr = function(stroka,numberOfRows)
{
    if(typeof stroka == 'string' && typeof numberOfRows == 'number'){
        let str = ""
        for(let i=0;i < numberOfRows;i++)
    {
        console.log(str+=stroka)
    }
    }else console.log("Ошибка! Введены неопознанные значения")

}

printStr('#',6)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'

const getWordStructure = function(word)
{
    if (typeof word == 'string'){
        let vowels = ["a","e","i","o","u","y"]
        let consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"]
        let vowelsCount = 0;
        let consonantsCount = 0;
        let wordlc = word.toLowerCase()
        for(let i = 0; i < wordlc.length;i++)
        {
            for(let j=0;j<vowels.length;j++)
            {
                if(wordlc[i] == vowels[j]) vowelsCount++
            }
            for(let j=0;j<consonants.length;j++)
            {
                if(wordlc[i] == consonants[j]) consonantsCount++
            }
        
        }
        console.log("Слово " + word + " состоит из "+ vowelsCount + " гласных и " + consonantsCount + " согласных букв" )
    }else console.log("Вы ввели неверное значение!")


}

getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

const isPalindrom = function(word)
{
    if (typeof word == 'string'){
        let word2
        let wordlc = word.toLowerCase()
        word2 = wordlc.split('').reverse().join('') /*разбиваем строку на массив символов, 
                                                      затем меняем расположение символов в массиве
                                                      задом наперёд и объединяем их обратно в строку -
                                                      получается строка задом наперёд */
                                                                                           
        if(wordlc == word2)
        {
            console.log("Слово " + word + " - является палиндромом")
        }else{
            console.log("Слово " + word + " - не является палиндромом")
        }
    }else console.log("Вы ввели неверное значение!")


}

isPalindrom('abba')
isPalindrom('Abba')



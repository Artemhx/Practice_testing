#### Git commands HW_1
***
_1. Локально cоздать файл “new.json”._
```
touch new.json
```
_2. Добавить файл под гит._
```
git add new.json
```
_3. Закоммитить файл._
```
git commit -m "add new.json file"
```

_4. Отправить файл на внешний GitHub репозиторий._
```
git push -u origin main
```

_5. Отредактировать содержание файла “new.json” - написать информацию о себе
(ФИО, возраст, количество домашних животных, будущая желаемая зарплата).
Всё написать в формате JSON._
```
vim new.json
```
```json
{
  "Name": "Artem",
  "Age" : 24,
  "Pets": 1,
  "Salary": 1000 
}
```
```
Esc
:wq
```
_6. Отправить изменения на внешний репозиторий._
```
git add new.json
git commit -m "update new.json"
git push
```

_7. Создать файл preferences.json_
```
touch preferences.json
```
_8. В файл preferences.json добавить информацию о своих предпочтениях
(Любимый фильм, любимый сериал, любимая еда, любимое время года, сторона которую хотели бы посетить)
в формате JSON._
```
vim preferences.json
```
```json
{
  "Movie": "Inception",
  "Ser": "Breaking Bad",
  "Food": "Pancakes", 
  "Season": "Summer",
  "Country": "Canada"    
}
```
```
Esc
:wq
```
_9. Создать файл sklls.json добавить информацию о скиллах которые будут изучены на курсе в формате JSON_
```
touch sklls.json
vim sklls.json
```
```json
{
  "Skill1": "Terminal",
  "Skill2": "Git",
  "Skill3": "js",
  "Skill4": "Postman",
  "Skill5": "SQL",
  "Skill6": "Dev Tools"
}
```
```
Esc
:wq
```
_10. Отправить сразу 2 файла на внешний репозиторий._
```
git add .
git commit -m "add 2 files"
git push
```
_11. На веб интерфейсе создать файл bug_report.json._
[ссылка на файл в репозитории](https://github.com/Artemhx/Practice_testing/blob/main/Git/HW_1/bug_report.json) 

_12. Сделать Commit changes (сохранить) изменения на веб интерфейсе._
[ссылка на репозиторий](https://github.com/Artemhx/Practice_testing) 

_13. На веб интерфейсе модифицировать файл bug_report.json, добавить баг репорт в формате JSON._
[ссылка на файл в репозитории](https://github.com/Artemhx/Practice_testing/blob/main/Git/HW_1/bug_report.json) 

_14.  Сделать Commit changes (сохранить) изменения на веб интерфейсе._
[ссылка на репозиторий](https://github.com/Artemhx/Practice_testing) 

_15. Синхронизировать внешний и локальный репозиторий JSON_
```
git pull
```
_16. Локально создать файл “new.xml”._
```
touch new.xml
```
_17. Добавить файл под гит._
```
git add new.xml
```
_18. Закоммитить файл._
```
git commit -m "add new.xml"
```
_19. Отправить файл на внешний GitHub репозиторий_
```
git push -u origin main
```
_20. Отредактировать содержание файла “new.xml” - написать информацию о себе
(ФИО, возраст, количество домашних животных, будущая желаемая зарплата).
Всё написать в формате XML._
```xml
vim new.xml
<?xml version="1.0" encoding="utf-8"?>
<person>
	<Name>Artem</Name>
	<Age>24</Age>
	<Pets>1</Pets>
	<Salary>1000</Salary>
</person>
Esc
:wq
```
_21. Отправить изменения на внешний репозиторий._
```
git add new.xml
git commit -m "update new.xml"
git push
```
_22. Создать файл preferences.xml_
```
touch preferences.xml
```
_23. В файл preferences.xml добавить информацию о своих предпочтениях
(Любимый фильм, любимый сериал, любимая еда, любимое время года, сторона которую хотели бы посетить)
в формате XML._
```xml
vim preferences.xml
<?xml version="1.0" encoding="utf-8"?>
<preferences>
 	<Movie>Inception</Movie>
 	<Ser>Breaking Bad</Ser>
	<Food>Pancakes</Food>
	<Season>Summer</Season>
	<Country>Canada</Country>	
</preferences>
Esc
:wq
```
_24. Cоздать файл sklls.xml добавить информацию о скиллах которые будут изучены на курсе в формате XML_
```xml
touch sklls.xml
vim sklls.xml
<?xml version="1.0" encoding="utf-8"?>
<skills>
	<Skill1>Terminal</Skill1>
	<Skill2>Git</Skill2>
	<Skill3>js</Skill3>
	<Skill4>Postman</Skill4>
	<Skill5>SQL</Skill5>
	<Skill5>Dev Tools</Skill5>
</skills>
```
_25. Сделать коммит в одну строку._
```
git add . && git commit -m "add 2 files"
```
_26. Отправить сразу 2 файла на внешний репозиторий._
```
git push
```
_27. На веб интерфейсе создать файл bug_report.xml._
[ссылка на файл в репозитории](https://github.com/Artemhx/Practice_testing/blob/main/Git/HW_1/bug_report.xml)

_28. Сделать Commit changes (сохранить) изменения на веб интерфейсе._
[ссылка на репозиторий](https://github.com/Artemhx/Practice_testing) 

_29. На веб интерфейсе модифицировать файл bug_report.xml, добавить баг репорт в формате XML._
[ссылка на файл в репозитории](https://github.com/Artemhx/Practice_testing/blob/main/Git/HW_1/bug_report.xml)

_30. Сделать Commit changes (сохранить) изменения на веб интерфейсе._
[ссылка на репозиторий](https://github.com/Artemhx/Practice_testing) 

_31. Синхронизировать внешний и локальный репозиторий XML_
```
git pull
```
_32. Локально создать файл “new.txt”_
```
touch new.txt
```
_33. Добавить файл под гит._
```
git add new.txt
```
_34. Закоммитить файл._
```
git commit -m "add new.txt"
```
_35. Отправить файл на внешний GitHub репозиторий._
```
git push -u origin main
```
_36. Отредактировать содержание файла “new.txt” - написать информацию о себе 
(ФИО, возраст, количество домашних животных, будущая желаемая зарплата).
Всё написать в формате TXT._
```
vim new.txt
Name Artem
Age 24
Pets 1
Salary 1000
Esc
:wq
```
_37. Отправить изменения на внешний репозиторий._
```
git add new.txt
git commit -m "update new.txt"
git push
```
_38. Создать файл preferences.txt_
```
touch preferences.txt
```
_39. В файл preferences.txt” добавить информацию о своих предпочтениях 
(Любимый фильм, любимый сериал, любимая еда, любимое время года, сторона которую хотели бы посетить) 
в формате TXT._
```
vim preferences.txt
Movie Inception
Ser Breaking Bad
Food Pancakes
Season Summer
Country Canada
Esc
:wq
```
_40. Создать файл sklls.txt добавить информацию о скиллах которые будут изучены на курсе в формате TXT_
```
touch sklls.txt
vim sklls.txt
Skill1 Terminal
Skill2 Git
Skill3 js
Skill4 Postman
Skill5 SQL
Skill6 Dev Tools
Esc
:wq
```
_41. Сделать коммит в одну строку._
```
git add . && git commit -m "add 2 files"
```
_42. Отправить сразу 2 файла на внешний репозиторий._
```
git push
```
_43. На веб интерфейсе создать файл bug_report.txt._
[ссылка на файл в репозитории](https://github.com/Artemhx/Practice_testing/blob/main/Git/HW_1/bug_report.txt)

_44. Сделать Commit changes (сохранить) изменения на веб интерфейсе._
[ссылка на репозиторий](https://github.com/Artemhx/Practice_testing) 

_45. На веб интерфейсе модифицировать файл bug_report.txt, добавить баг репорт в формате TXT._
[ссылка на файл в репозитории](https://github.com/Artemhx/Practice_testing/blob/main/Git/HW_1/bug_report.txt)

_46. Сделать Commit changes (сохранить) изменения на веб интерфейсе._
[ссылка на репозиторий](https://github.com/Artemhx/Practice_testing)

_47. Синхронизировать внешний и локальный репозиторий TXT_
```
git pull
```
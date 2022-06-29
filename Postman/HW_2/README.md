### Postman_HW_2
 **Вся информация по эндпоинтам, параметрам и типам данных в [HW_1](https://github.com/Artemhx/Practice_testing/tree/main/Postman/HW_1)**


_http://162.55.220.72:5005/first_
_**1.** Отправить запрос._
_**2.** Статус код 200_
_**3.** Проверить, что в body приходит правильный string._
***
_http://162.55.220.72:5005/user_info_3_
_**1.** Отправить запрос._
_**2.** Статус код 200_
_**3.** Спарсить response body в json._
_**4.** Проверить, что name в ответе равно name s request (name вбить руками.)_
_**5.** Проверить, что age в ответе равно age s request (age вбить руками.)_
_**6.** Проверить, что salary в ответе равно salary s request (salary вбить руками.)_
_**7.** Спарсить request._
_**8.** Проверить, что name в ответе равно name s request (name забрать из request.)_
_**9.** Проверить, что age в ответе равно age s request (age забрать из request.)_
_**10.** Проверить, что salary в ответе равно salary s request (salary забрать из request.)_
_**11.** Вывести в консоль параметр family из response._
_**12.** Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)_
***
_http://162.55.220.72:5005/object_info_3_
_**1.** Отправить запрос._
_**2.** Статус код 200_
_**3.** Спарсить response body в json._
_**4.** Спарсить request._
_**5.** Проверить, что name в ответе равно name s request (name забрать из request.)_
_**6.** Проверить, что age в ответе равно age s request (age забрать из request.)_
_**7.** Проверить, что salary в ответе равно salary s request (salary забрать из request.)_
_**8.** Вывести в консоль параметр family из response._
_**9.** Проверить, что у параметра dog есть параметры name._
_**10.** Проверить, что у параметра dog есть параметры age._
_**11.** Проверить, что параметр name имеет значение Luky._
_**12.** Проверить, что параметр age имеет значение 4._
***
_http://162.55.220.72:5005/object_info_4_
_**1.** Отправить запрос._
_**2.** Статус код 200_
_**3.** Спарсить response body в json._
_**4.** Спарсить request._
_**5.** Проверить, что name в ответе равно name s request (name забрать из request.)_
_**6.** Проверить, что age в ответе равно age из request (age забрать из request.)_
_**7.** Вывести в консоль параметр salary из request._
_**8.** Вывести в консоль параметр salary из response._
_**9.** Вывести в консоль 0-й элемент параметра salary из response._
_**10.** Вывести в консоль 1-й элемент параметра salary параметр salary из response._
_**11.** Вывести в консоль 2-й элемент параметра salary параметр salary из response._
_**12.** Проверить, что 0-й элемент параметра salary равен salary из request (salary забрать из request.)_
_**13.** Проверить, что 1-й элемент параметра salary равен salary*2 из request (salary забрать из request.)_
_**14.** Проверить, что 2-й элемент параметра salary равен salary*3 из request (salary забрать из request.)_
_**15.** Создать в окружении переменную name_
_**16.** Создать в окружении переменную age_
_**17.** Создать в окружении переменную salary_
_**18.** Передать в окружение переменную name_
_**19.** Передать в окружение переменную age_
_**20.** Передать в окружение переменную salary_
_**21.** Написать цикл который выведет в консоль по порядку элементы списка из параметра salary._
***
_http://162.55.220.72:5005/user_info_2_
_**1.** Вставить параметр salary из окружения в request_
_**2.** Вставить параметр age из окружения в age_
_**3.** Вставить параметр name из окружения в name_
_**4.** Отправить запрос._
_**5.** Статус код 200_
_**6.** Спарсить response body в json._
_**7.** Спарсить request._
_**8.** Проверить, что json response имеет параметр start_qa_salary_
_**9.** Проверить, что json response имеет параметр qa_salary_after_6_months_
_**10.** Проверить, что json response имеет параметр qa_salary_after_12_months_
_**11.** Проверить, что json response имеет параметр qa_salary_after_1.5_year_
_**12.** Проверить, что json response имеет параметр qa_salary_after_3.5_years_
_**13.** Проверить, что json response имеет параметр person_
_**14.** Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request.)_
_**15.** Проверить, что параметр qa_salary_after_6_months равен salary*2 из request (salary забрать из request.)_
_**16.** Проверить, что параметр qa_salary_after_12_months равен salary*2.7 из request (salary забрать из request.)_
_**17.** Проверить, что параметр qa_salary_after_1.5_year равен salary*3.3 из request (salary забрать из request.)_
_**18.** Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request (salary забрать из request.)_
_**19.** Проверить, что в параметре person, 1-й элемент из u_name равен salary из request (salary забрать из request.)_
_**20.** Проверить, что что параметр u_age равен age из request (age забрать из request.)_
_**21.** Проверить, что параметр u_salary_5_years равен salary*4.2 из request (salary забрать из request.)_
_**22.** ***Написать цикл который выведет в консоль по порядку элементы списка из параметра person._
***
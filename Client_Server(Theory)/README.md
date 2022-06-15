### Client_Server questions HW

#### 1) Клиент-серверная архитектура
#### 2) Что ткое HTTP и HTTPS?
#### 3) HTTP методы
#### 4) HTTP статус коды сервера
#### 5) Что такое ядро браузера?
#### 6) Какие браузеры какие ядра используют?
#### 7) Что такое API?
#### 8) Что такое ендпоинты?
#### 9) URL (URI, URL, URN)
#### 10) Идемпотентные HTTP методы
#### 11) Безопасные HTTP методы
#### 12) Иденфикация, Аутентификация, Авторизация
#### 13) Что такое IP?
#### 14) Что такое октеты в DNS?
#### 15) Что такое порт? Сколько портов у Linux сервера?
#### 16) Уровни OSI
#### 17) Хедеры http запросов
***

#### 1) Клиент-серверная архитектура

_Это архитектура взаимодействия клиента с сервером, где клиент отправляет request(запрос) на сервер, сервер в свою очередь принимает этот запрос,
обрабатывает его и посылает response(ответ) обратно на клиент.
Клиентом может быть любое устройство на котором установлено ПО, с которого пользователь может отсылать запросы серверу.
Сервером может быть любое устройство, на котором установленно специализированное ПО,
споcобное принимать запрос и отправлять ответ. В основном сервер может принимать запросы сразу от нескольких клиентов и отправлять ответы. 
Сервер так же может быть и клиентом, если он взаимодействует с другими серверами,
отправляя на них запросы. Фактически клиент и сервер - это программное обеспечение.
У каждого сервера есть свой API. Это составляющая сервера, которая получает запросы и отправляет ответы.
Клиент взаимодействует с API с помощью http-методов, для получения нужного ему энд-поинта.
Клиент-серверную архитектуру можно разделить на три уровня:
**Двухуровневая:** В системе есть клиент и сервер, которые взаимодействуют между собой.
**Трёхуровневая:** В системе помимо клиента и сервера так же есть сервер базы данных.
**Многоуровневая:** В системе есть клиент и несколько различных видов серверов, которые взаимодействуют между собой_

#### 2) Что такое HTTP и HTTPS?

_**Http(HyperText Transfer Protocol)** - это протокол прикладного уровня передачи данных в интернете.
По умолчанию данный протокол использует 80-ый порт. В общем, HTTP представляет из себя
набор правил передачи информации между браузером пользователя и сервером сайта.
**Https(HyperText Transfer Protocol Secure)** - это защищённый протокол передачи данных в интернете - продвинутая и безопасная версия HTTP c использованием TLS протокола.
Для коммуникации данных используется 443-ий порт.При использовании HTTPS создаётся защищённое - 
зашифрованное соединение между сервером и браузером с помощью ключа шифрования. Это позволяет пользователям в интернете осуществлять
безопасные транзакции электронной коммерции и не беспокоится за кражу личных данных. Так же веб-сайты работающие по протоколу HTTPS выше ранжируются
в поисковой выдаче, так как поисковые системы больше доверяют веб-сайтам с защищённым соединением._

#### 3) HTTP методы

_**HTTP методы** - методы запроса, которые указывают какое действие выполнить с ресурсом.
Каждый метод реализует свою семантику и может быть безопасным или идемпотентным.
**Основные методы:**
**GET** - запрашивает представление ресурса. Запросы с использованием этого метода могут только извлекать данные._

_**HEAD** -  запрашивает ресурс так же, как и метод GET, но без тела ответа._

_**POST**-  используется для отправки сущностей к определённому ресурсу. Часто вызывает изменение состояния или какие-то побочные эффекты на сервере._

_**PUT** - заменяет все текущие представления ресурса данными запроса._

_**DELETE** - удаляет указанный ресурс._

_**CONNECT** -  устанавливает "туннель" к серверу, определённому по ресурсу._

_**OPTIONS** -  используется для описания параметров соединения с ресурсом._

_**TRACE** - выполняет вызов возвращаемого тестового сообщения с ресурса._

_**PATCH**- используется для частичного изменения ресурса._

#### 4) HTTP статус коды сервера

_**Коды ответа HTTP** показывают - был ли успешно выполнен определённый HTTP запрос.
Коды сгруппированы в 5 классов:_

- **Информационные 100 - 199**
- **Успешные 200 - 299**
- **Перенаправления 300 - 399**
- **Клиентские ошибки 400 - 499**
- **Серверные ошибки 500 - 599**

_**100(Continue)** - запрос успешно принят и клиент может продолжать присылать запросы   
**101(Switching Protocol)** - Переключение протокола  
**102(Processing)** - В обработке. Этот код указывает, что сервер получил запрос и обрабатывает его, но обработка ещё не завершена._  

_**200(OK)** - Успешно. Запрос успешно обработан  
**201(Created)** - 	Создано Запрос успешно выполнен и в результате был создан ресурс  
**202(Accepted)** - Принято Запрос принят, но ещё не обработан  
**203(Non-Authoritative Information)** - Информация не авторитетна. Информация, которая возвращена, была предоставлена не от исходного сервера, а из какого-нибудь другого источника  
**204(No Content)** - Нет содержимого. Нет содержимого для ответа на запрос_  

_**300(Multiple Choice)** - Множественный выбор. Запрос имеет более чем один из возможных ответов  
**301(Moved Permanently)** - Перемещён на постоянной основе. URI запрашиваемого ресурса был изменён  
**302(Found)** - Найдено. Запрошенный ресурс временно изменён  
**304(Not Modified)** - Не модифицировано. Запрошенный ресурс не был изменён_  

_**400(Bad Request)** - Плохой запрос. Сервер не понимает запрос из-за неверного синтаксиса.  
**401(Unauthorized)** - Неавторизованно. Для получения запрашиваемого ответа нужна аутентификация  
**403(Forbidden)** - Запрещено. У клиента нет прав доступа к содержимому, поэтому сервер отказывается дать надлежащий ответ  
**404(Not Found)** - Не найден. Сервер не может найти запрашиваемый ресурс.  
**405(Method Not Allowed)** - Метод не разрешён. Сервер знает о запрашиваемом методе, но он был деактивирован и не может быть использован  
**407(Proxy Authentication Required)** - Этот код ответа аналогичен коду 401, только аутентификация требуется для прокси сервера._  

_**500(Internal Server Error)** - Внутренняя ошибка сервера. Сервер столкнулся с ситуацией, которую он не знает как обработать  
**501(Not Implemented)** - Не выполнено. Метод запроса не поддерживается сервером и не может быть обработан  
**502(Bad Gateway)** - Плохой шлюз. Cервер, во время работы в качестве шлюза для получения ответа, нужного для обработки запроса, получил недействительный (недопустимый) ответ.  
**503(Service Unavailable)** - Сервис недоступен. Сервер не готов обрабатывать запрос. Зачастую причинами являются отключение сервера или то, что он перегружен.  
**504(Gateway Timeout)** - Этот ответ об ошибке предоставляется, когда сервер действует как шлюз и не может получить ответ вовремя.  
**505(HTTP Version Not Supported)** - HTTP-версия не поддерживается. HTTP-версия, используемая в запросе, не поддерживается сервером._  

#### 5) Что такое ядро браузера?
 
_**Ядро браузера** - это программа или модуль, который отображает контент на основе языка разметки.
Ядро браузера можно разделить на две части: **движок рендеринга** (инженер макета или движок рендеринга) и **движок JS**.
Он отвечает за получение содержимого веб-страницы (HTML, XML, изображения и т. Д.),
организацию информации (например, добавление CSS и т. Д.) и расчет режима отображения веб-страницы,
а затем вывод её на монитор или принтер. Разница в ядре браузера будет по-разному интерпретировать синтаксис веб-страницы,
поэтому эффект рендеринга будет другим. Все веб-браузеры, почтовые клиенты и другие приложения,
которым необходимо редактировать и отображать сетевой контент, требуют ядра._

#### 6) Какие браузеры какие ядра используют?

_IE = Trident + Jscript
360=Trident+Blink 
Firefox=Gecko+JagerMonkey 
Safari=webkit=webcore+jscore 
Chrome=Blink+v8 
Opera=Blink+v8
Yandex.browser=Blink+v8_

#### 7) Что такое API?

_**API** - это интерфейс или же контракт, который предоставляет программа для получения у неё данных или некоторых функций
и использования их внутри другой программы, не залезая при этом в реализацию этих предоставляемых функций.
Например мы можем встроить на свою главную страницу сайта маленький виджет прогноза погоды,
который будет отправлять определенный правилами запрос к API некоего сервиса погоды и получать определенный правилами ответ,
содержащий посылку с данными. Или другой пример — быстрая регистрация с помощью аккаунта в соцсетях.
Приложение может использовать API социальной сети, чтобы предоставить пользователю упрощённый доступ._

#### 8) Что такое ендпоинты?

_**Endpoint(Конечная точка)** - определённый URL адрес, который принимает параметры и возвращает данные клиенту._

#### 9) URL (URI, URL, URN)

_**URI(Uniform Resource Identifier)** - это строка символов, которая используется для идентификации какого-либо ресурса по его адресу или по его названию,
либо по тому и тому вместе._

_**URL(Uniform Resource Locator)** - это строка символов, которая используется для идентификации какого-либо ресурса на сервере,
но только по его адресу, по его местоположению._

_**URN(Uniform Resource Name)** - это строка символов, которая используется для идентификации какого-либо ресурса, но только по его имени._

####10) Идемпотентные HTTP методы

_Метод считается **идемпотентным**, если многократное повторение одних и тех же запросов возвращает одинаковые результаты._
 - Методы GET, HEAD, PUT, DELETE, OPTIONS, TRACE - **идемпотентны**
 - Методы POST, CONNECT - **не идемпотентны**
**Так же все безопасные методы являются идемпотентными**

#### 11) Безопасные HTTP методы

_Метод HTTP является **безопасным**, если он не меняет состояние сервера.
Другими словами, безопасный метод проводит операции "только чтение" (read-only).
Все безопасные методы являются также идемпотентными, но не все идемпотентные методы безопасны._
 - Методы GET, HEAD, OPTIONS, TRACE - **безопасные**.
 - Методы POST, PUT, DELETE, CONNECT - **не безопасные**.
 - Методы PUT, DELETE - **не безопасные, но идемпотентные**.

#### 12) Идентификация, Аутентификация, Авторизация

_**Идентификация** - Процесс распознования пользователя по специальному идентификатору или же логину в системе._

_**Аутентификация** - процедура проверки подлинности,
например проверка подлинности пользователя путем сравнения введенного им пароля с паролем, сохраненным в базе данных._

_**Авторизация** - предоставление определенному лицу или группе лиц прав на выполнение определенных действий._

_Допустим пользователь хочет войти в свой аккаунт Google. Для начала система запрашивает логин и распознаёт его как существующий - **это идентификация.**
Затем Google просит ввести пароль, чтобы удостоверится действительно ли пользователю принадлежит этот аккаунт.
Пользователь вводит пароль и если он совпал с установленным в системе - **это аутентификация.**
Затем Google дополнительно попросит пользователя ввести код из смс и если пользователь его введёт, то система окончательно убедится, что он настоящий владелец аккаунта - **это двухфакторная аутентификация.**
После этого система предоставит пользователю функции для использования аккаунта - **это авторизация.**_

#### 13) Что такое IP?

_**IP-адрес** – это уникальный адрес, идентифицирующий устройство в интернете или локальной сети. Так же это строка чисел, разделённых точками, например - 192.168.1.38
Каждое число в этом наборе принадлежит интервалу от 0 до 255.
IP-адреса бывают двух видов: **динамические и статические:**
**Динамические** назначаются автоматически при подключении устройства к сети и используется в течение ограниченного промежутка времени,
как правило, до завершения сеанса подключения
**Статические** в отличие от динамических IP-адресов остаются неизменными.
После того, как сеть назначает IP-адрес, он остается неизменным_

#### 14) Что такое октеты в DNS?

_**Октет** - это 8-битное значение одной из 4-х частей IP-адреса_

#### 15) Что такое порт? Сколько портов у Linux сервера?

_**Порт** - это «виртуальный разъём» в программе, через которую она может обмениваться данными с системой и другими программами.
На компьютере может быть от 0 до 65 535 портов.
Чтобы при работе в сети программы и сервисы не путали данные между собой, разработчики придумали порты — они определяют,
к какой программе относятся те данные, которые получает сетевая плата.
У Linux сервера от 0 до 65 535 портов. Все порты разделены на три диапазона — общеизвестные (или системные, 0—1023),
зарегистрированные (или пользовательские, 1024—49151) и динамические (или частные, 49152—65535)._

#### 16) Уровни OSI

**Сетевая модель OSI имеет семь уровней, иерархически расположенных от большего к меньшему:**
 - **1 уровень.** _Физический (physical). На этом уровне работают провода, патч панели, сетевые адаптеры._
 - **2 уровень.** _Канальный (data link). На этом уровне появляется адресация. Адресом является MAC адрес. Канальный уровень ответственен за доставку кадров адресату и их целостность._
 - **3 уровень.** _Сетевой (network). Наиболее распространенным протоколом тут является IP. Адресация происходит по IP-адресам, которые состоят из 32 битов._
 - **4 уровень.** _Транспортный (transport). На этом уровне появляются понятия портов. Тут трудятся TCP и UDP. Протоколы этого уровня отвечают за прямую связь между приложениями и за надежность доставки информации._
 - **5 уровень.** _Сеансовый (session). Управляет сеансом связи, обменом информации, правами._
 - **6 уровень.** _Представительский (presentation). Преставление и шифрование данных JPEG, ASCII, MPEG._
 - **7 уровень.** _Прикладной (application). Самый многочисленный и разнообразный уровень. На нем выполняются все высокоуровненвые протоколы, такие как POP, SMTP, RDP, HTTP, HTTPS. На этом уровне происходит лишь реализация конкретных действий,
например получение html-кода или email-сообщения конкретному адресату._

#### 17) Хедеры http запросов

_**Заголовки HTTP** позволяют клиенту и серверу отправлять дополнительную информацию с HTTP запросом или ответом. Это специальные параметры,
которые несут определенную служебную информацию о соединении по HTTP.
Некоторые заголовки имеют лишь информационный характер для пользователя или для компьютера,
другие передают определенные команды, исходя из которых, сервер или клиент будет выполнять какие-то действия.
HTTP-заголовки сопровождают обмен данными по протоколу HTTP. Они могут содержать описание данных и информацию,
необходимую для взаимодействия между клиентом и сервером._

_Пример заголовка http:_
```
Host: google.com
User-Agent: Mozilla/5.0 (Windows NT 6.1; rv:18.0) Gecko/20100101 Firefox/18.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3
```
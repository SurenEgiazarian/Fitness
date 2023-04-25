# Импорт

По дефолту импорт возвращает объект методов бэк-энда, которые можно вызывать по одному.

Пример импорта:

`import { createUser, signIn } from 'backEnd'`

P.S.: импорт производится именно по адресу 'backEnd' (дополнительный путь по папкам не требуется).

# Общий принцип использования (подробные инструкции по каждой функции отдельно описаны в разделах ниже)

В общем случае доступные функции для их вызова требуют передачи следующих аргументов:

1. `responseFunc`
   Функция, которая будет вызвана после возварата данных от сервера (почти каждая функция делает запрос на сервер, а потому - асинхронная).
   Причем данные ответа от сервера система передаст в `responseFunc` в качестве единственного аргумента.

2. `requestData`
   Данные запроса, которые требуются серверу для исполнения запроса.
   `requestData` имеет формат объекта, с определенными свойствами для каждого запроса
   (подробные инструкции по каждой функции отдельно описаны в разделах ниже).

# Пример использования

1. function onClickBtn() {
   const responseFunc = (responseData) => console.log(responseData) <!-- допустим, хотим вывести ответ сервера в консоль -->
   const requestData = `ДАННЫЕ ЗАПРОСА` <!-- в данном случае: { email: 'XXX@google.ru', password: 'XXX' } -->
   createUser( responseFunc, requestData); <!-- выдаст в консоль данные ответа, которые вернет сервер -->
   }

# Список всех доступных функций

<!-- управление данными пользователей -->

createUser - `РЕГИСТРАЦИЯ`
signIn - `АВТОРИЗАЦИЯ`
signOut - `ВЫХОД ИЗ АККАУНТА`
getCurrentUser - `ПОЛУЧИТЬ ДАННЫЕ АВТОИЗОВАННОГО ПОЛЬЗОВАТЕЛЯ`
updatePassword - `ОБНОВИТЬ ПАРОЛЬ`

<!-- управление БД -->

getAllData - `ПОЛУЧИТЬ ВСЕ ДАННЫЕ ИЗ БД`
getDataByRef - `ПОЛУЧИТЬ ДАННЫЕ ПО ССЫЛКЕ (REF)`
postDataByRef - `ДОБАВИТЬ ДАННЫЕ ПО ССЫЛКЕ (REF)`
updateDataByRef- `ОБНОВИТЬ ДАННЫЕ ПО ССЫЛКЕ (REF)`
removeDataByRef- `УДАЛИТЬ ДАННЫЕ ПО ССЫЛКЕ (REF)`

# Примечание к REF

Функция ref - внутренняя переменная `Firebase`, используемая для навигации по БД (ref - не API адрес!).
Она содержит в себе информацию о положении данных и позволяет их получать и изменять.

Чтобы получить ссылку коллекции достаточно добавить импорт `import { ref } from 'backEnd'`
И вызвать функцию ref с аргументом названия коллекции. Например: `coursesRef = ref('courses')`.
И дальше производить навигацию по дереву коллекции. Наиболее частые методы указаны ниже.

1. `Навигация по объекту (.child и .parent)`
   const usersRef = ref('users')
   const jamesRef = usersRef.child("james"); // объект james - дитя коллекции users
   const jamesParentRef = jamesRef.parent; // объект users - родитель объекта james (т.е. jamesParentRef === usersRef)

2. `Поиск и филтрация (не навигация)`
   `(позволяет найти нужный элемент в массиве по его внутренним данным)`
   jamesRefs = usersRef.orderByChild("name").equalTo("James") // вернет всех дитей со свойством {name: "James"}

   `ВАЖНО: REF, полученный через фильтр применим только для get-запросов, но не применим для post, update или remove`

3. `Проверка равенства объектов`
   usersRef.isEqual(jamesRef); // false
   usersRef.isEqual(jamesParentRef); // true
   jamesRef.parent.isEqual(usersRef); // true

4. `Адрес к данным`
   const jamesFirstNameRef = jamesRef.child('name/first');
   const path = jamesFirstNameRef.toString(); // вернет 'https://sample-app.firebaseio.com/users/james/name/first'

# Подробные инструкции к функциям управления БД

В общем случае доступные функции для их вызова требуют передачи следующих аргументов:

1. getAllData - `ПОЛУЧИТЬ ВСЕ ДАННЫЕ ИЗ БД`

    Аргументы -> ( responseFunc, requestData).
        requestData = { collection: `КОЛЛЕКЦИЯ ДАННЫХ`, path: `ПУТЬ ПО КООЛЛЕКЦИИ` }
        collection - коллекция данных;
        path - путь по дереву коллекции (если не указать, вернет всю коллекцию).

    Примеры.
    a.  getAllData(responseFunc, { collection: `courses` }); // вернет данные из courses
    b.  getAllData(responseFunc, { collection: `users`, path: `/james/name`  }); // вернет данные из users/james/name

2. getDataByRef - `ПОЛУЧИТЬ ДАННЫЕ ПО ССЫЛКЕ (REF)`

    Аргументы -> ( responseFunc, requestData).
        requestData = { ref: `ССЫЛКА НА ДАННЫЕ` }

    Примеры.
    a.  getDataByRef (responseFunc, { ref: jamesRef }); // вернет данные из users/james

3. postDataByRef - `ДОБАВИТЬ ДАННЫЕ ПО ССЫЛКЕ (REF)`

    Аргументы -> ( responseFunc, requestData).
        requestData = { ref: `ССЫЛКА НА ДАННЫЕ`, newData: `ДОБАВЛЯЕМЫЕ ДАННЫЕ` }

    Примеры.
    a.  const postData = {lastname: "Bond"}
        getDataByRef (responseFunc, { ref: jamesRef, newData: postData}); // добавит в объект james ключ-значение {lastname: "Bond"}

4. updateDataByRef- `ОБНОВИТЬ ДАННЫЕ ПО ССЫЛКЕ (REF)`

    Аргументы -> ( responseFunc, requestData).
        requestData = { ref: `ССЫЛКА НА ДАННЫЕ`, newData: `ОБНОВЛЯЕМЫЕ ДАННЫЕ` }

    Примеры.
    a.  const newData = {lastname: "007"}
        updateDataByRef (responseFunc, { ref: jamesRef, newData}); // заменит ключ-значение в объекте james на  {lastname: "007"} 

5. removeDataByRef - `УДАЛИТЬ ДАННЫЕ ПО ССЫЛКЕ (REF)`

    Аргументы -> ( responseFunc, requestData).
        requestData = { ref: `ССЫЛКА НА ДАННЫЕ` }

    Примеры.
    a.  removeDataByRef (responseFunc, { ref: jamesRef }); // удалит объект james из users

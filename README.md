
1. create folder on your desktop and open it VS code
   (1.1. Создайте папку на рабочем столе и откройте ее в VS Code)
2. open the terminal and run the cmd "git clone https://github.com/Wambong/weatherApp.git"
   (2.2. Откройте терминал и выполните команду "git clone https://github.com/Wambong/weatherApp.git".)
3. then navigate using cd weatherApp
   (3.3. Затем перейдите в папку с помощью команды cd weatherApp.)
4. You can instead download the Zip file from "https://github.com/Wambong/weatherApp" and unzip and open it in vs code rather than clone it.
  ( 4.4. Вы также можете скачать Zip-файл из "https://github.com/Wambong/weatherApp", распаковать его и открыть в VS Code, а не клонировать репозиторий)
5. run the cmd "docker build -t weather-app ." to build the docker
    (5.5. Запустите команду "docker build -t weather-app ." для создания Docker-образа.)
6. run the docker container using cmd "docker run -d -p 8080:80 --name weather-app-container weather-app"
    (6.6. Запустите контейнер Docker с помощью команды "docker run -d -p 8080:80 --name weather-app-container weather-app")
7. go to the url "http://localhost:8080/"
   initially there will be no weather data to display here the page will be some like this
   (7.7. Перейдите по ссылке "http://localhost:8080/".
  Изначально здесь не будет данных о погоде, страница будет выглядеть примерно так:)
![empty_data](https://github.com/Wambong/weatherApp/assets/64046698/54ec1045-8ab2-4b26-ad6f-68737485aa55)

8. next in order for the app to work you need to request a temporary access so click on the button above that says "You must click Here" as indicated in the picture below
   (8.8. Затем, чтобы приложение работало, вам нужно запросить временный доступ, поэтому нажмите на кнопку выше, которая говорит "You must click Here", как показано на картинке ниже:)
![empty_data_directions](https://github.com/Wambong/weatherApp/assets/64046698/d5bc3b17-1312-419a-8862-e19b3ccdb76c)

You will be redirected to another page as shown below
  ( Вы будете перенаправлены на другую страницу, как показано ниже:)
![cors demo](https://github.com/Wambong/weatherApp/assets/64046698/721c20f4-008d-4e2a-816f-df9a19b6d1fc)
9. next click on the link that says "Reguest temporary access to the demo server" as shown in the picture below
   (9.9. Затем нажмите на ссылку "Reguest temporary access to the demo server", как показано на картинке ниже:)
 ![cors demo click](https://github.com/Wambong/weatherApp/assets/64046698/83169090-dd2a-4839-a1b9-460608e2f779)
 after clicking you will see a message saying "You currently have temporary access to the demo server." as shown in the picture below
     (После нажатия вы увидите сообщение "You currently have temporary access to the demo server.", как показано на картинке ниже:)
![cors request granted](https://github.com/Wambong/weatherApp/assets/64046698/8f0f1685-153f-4bce-82ae-0bb6b5944804)

10. then return back to the weather application tab and refresh the page and you will see the weather forecast for the next 5 days for Moscow, London, New York, and Saint Petersburg as shown below
    (10.10. Затем вернитесь на вкладку с погодным приложением и обновите страницу, вы увидите прогноз погоды на следующие 5 дней для Москвы, Лондона, Нью-Йорка и Санкт-Петербурга, как показано ниже:)
![forecast for moscow and london](https://github.com/Wambong/weatherApp/assets/64046698/9afb6796-0753-4164-be4e-87028799c09c)
![forecast for new york and saint petersburg](https://github.com/Wambong/weatherApp/assets/64046698/9a5abc9a-13e1-4c74-ae3f-ba95f743b012)

11. you can also search for the forecast of a particular by city name by entering the city then click the submit button the weather forecast for that city will be displayed as shown below with Kazan city
    (11.11. Вы также можете искать прогноз погоды для конкретного города, введя его название и нажав кнопку "Submit". Прогноз погоды для этого города будет отображаться, как показано ниже с городом Казань)

![kazan](https://github.com/Wambong/weatherApp/assets/64046698/825bfb5c-fc6b-46cc-b904-4714e4ff78a9)

and the result will be displayed as shown below
   (и результат будет отображаться, как показано ниже)
![kazan1](https://github.com/Wambong/weatherApp/assets/64046698/438e3e75-a116-4525-9d42-f842ce7dd8b4)




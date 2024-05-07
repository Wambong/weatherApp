1. create folder on your desktop and open it VS code
2. git clone https://github.com/Wambong/weatherApp.git

3. cd weatherApp

4. docker build -t weather-app .

5.docker run -d -p 8080:80 --name weather-app-container weather-app

5. http://localhost:8080/

initially there will be no weather data to display here the page will be some like this

![empty_data](https://github.com/Wambong/weatherApp/assets/64046698/54ec1045-8ab2-4b26-ad6f-68737485aa55)

6. next in order for the app to work you need to request a temporary access so click on the button above that says "You must click Here" as indicated in the picture below
![empty_data_directions](https://github.com/Wambong/weatherApp/assets/64046698/d5bc3b17-1312-419a-8862-e19b3ccdb76c)

You will be redirected to another page as shown below
![cors demo](https://github.com/Wambong/weatherApp/assets/64046698/721c20f4-008d-4e2a-816f-df9a19b6d1fc)
7. next click on the link that says "Reguest temporary access to the demo server" as shown in the picture below
 ![cors demo click](https://github.com/Wambong/weatherApp/assets/64046698/83169090-dd2a-4839-a1b9-460608e2f779)
 after clicking you will see a message saying "You currently have temporary access to the demo server." as shown in the picture below
 
![cors request granted](https://github.com/Wambong/weatherApp/assets/64046698/8f0f1685-153f-4bce-82ae-0bb6b5944804)

8. then return back to the weather application tab and refresh the page and you will see the weather forecast for the next 5 days for Moscow, London, New York, and Saint Petersburg as shown below
![forecast for moscow and london](https://github.com/Wambong/weatherApp/assets/64046698/9afb6796-0753-4164-be4e-87028799c09c)
![forecast for new york and saint petersburg](https://github.com/Wambong/weatherApp/assets/64046698/9a5abc9a-13e1-4c74-ae3f-ba95f743b012)

9. you can also search for the forecast of a particular by city name by entering the city then click the submit button the weather forecast for that city will be displayed as shown below with Kazan city

![kazan](https://github.com/Wambong/weatherApp/assets/64046698/825bfb5c-fc6b-46cc-b904-4714e4ff78a9)

and the result will be displayed as shown below
![kazan1](https://github.com/Wambong/weatherApp/assets/64046698/438e3e75-a116-4525-9d42-f842ce7dd8b4)




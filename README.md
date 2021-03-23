# Weather-Journal

### Project Description
> Weather Journal App with Asynchronous JavaScript
> This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI in a Weather Journal application.

This is the second project in Udacity's Web Development-Professional nanodegree that is offered as a scholarship sponsored by ITIDA of Egypt. It was built using Javascript, HTML, and CSS. The fetch api was used to link between server-side and client-side code that is present in the folder named website. This web application application allows users to keep a brief online diary in with entries for the weather forecast each day. The weather forecast is made available by querying the OpenWeatherMap api, where this querying is performed by entering zipcodes for the desired location.

### Application Structure
- server.js
- website
-  |--> app.js
-  |--> index.html
-  |--> style.css

#### Note:
To run this project locally, Node.js is required and the following lines of code need to be modified:
```
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=" 
const apiKey = ""; /*&appid=secret_token*/
const units = "&units=metric";
```

const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=" 
const apiKey = ""; /*&appid=secret_token*/
const units = "&units=metric";

let feelings = 0;
let zipcode = 0;

function performAction(e) {
    e.preventDefault();
    feelings = document.getElementById('feelings').value;
    zipcode = document.getElementById('zip').value;
    queryAPI(baseURL+zipcode+units+apiKey);
}
document.getElementById('generate').addEventListener('click', performAction);

const getData = async(url='') => {
    const response = await fetch(url);
    try {
        const newData = await response.json();
        document.getElementById('date').innerHTML = "Date: " + newData[zipcode]['date'];
        document.getElementById('temp').innerHTML = "Temperature: " + newData[zipcode]['temp'] + '\u00B0C';
        document.getElementById('feels').innerHTML = "Feels like: " + newData[zipcode]['feels'];
        document.getElementById('content').innerHTML = "Notes: " + newData[zipcode]['content'];
    } catch (error) {
        console.log(error);
    }
    
}

const postData = async(url='', data={}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

const queryAPI = async(url='') => {
    const request = fetch(url);
    try {
        const object = (await request).json()
        .then(data => {
            if (data['cod'] == 200) {
                document.getElementById('message').innerHTML = '';
                const contents = {
                    zip: zipcode,
                    date: new Date(), 
                    temp: data['main']['temp'], 
                    feels: data['main']['feels_like'], 
                    feelings: feelings
                };
                console.log(contents);
                postData('/endpoint', contents);
                getData('/logs');
            } else if (data['cod'] == 404) {
                document.getElementById('message').innerHTML = "This city was not found :(<br>Make sure you are entering a valid zip code and we'll do our best to find the city you requested.";
            }
        });
    } catch (error) {
        console.log(error);
    }
}

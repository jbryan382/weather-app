const appIDKey = '9ea962feec97cdeba54e78a4f4408b88'

const requestLink =
  'https://api.openweathermap.org/data/2.5/weather?q=Tampa&appid=9ea962feec97cdeba54e78a4f4408b88'

let currentWeather = {}

const getWeather = () => {
  const searchTerm = document.querySelector('.search-term').value
  console.log(searchTerm)
  const requestLink =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    searchTerm +
    '&appid=9ea962feec97cdeba54e78a4f4408b88'
  console.log(requestLink)
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=9ea962feec97cdeba54e78a4f4408b88&units=imperial`
  )
    .then(resp => {
      return resp.json()
    })
    .then(weatherData => {
      console.log(weatherData)
      currentWeather = weatherData
      document.querySelector('.weather-description').textContent = weatherData(
        0
      ).description
      document.querySelector('.weather-temp').textContent = weatherData(1).temp
    })
  // Parse Results
  // add current weather to HTML
  // Add in additional fetch for Zipcode search.
  // Make If Else Statement to determine if the value inserted is NaN (not a number) or text
}

// Other way to concat strings is with back ticks `` and ${}
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=9ea962feec97cdeba54e78a4f4408b88`

document.querySelector('.search').addEventListener('click', getWeather)

// document.addEventListener('DOMContentLoaded', main)

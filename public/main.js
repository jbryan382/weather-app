const appIDKey = '9ea962feec97cdeba54e78a4f4408b88'

const requestLink =
  'https://api.openweathermap.org/data/2.5/weather?q=Tampa&appid=9ea962feec97cdeba54e78a4f4408b88'

let currentWeather = {}

const getWeather = () => {
  const searchTerm = document.querySelector('.search-term').value
  console.log(searchTerm)
  // Creates a parameter to swap the q with zip for either search
  let parameter = 'zip'
  // Determine is the searchTerm is a number or not and if not swap parameter to q
  if (isNaN(searchTerm)) {
    parameter = 'q'
  }
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?${parameter}=${searchTerm}&appid=9ea962feec97cdeba54e78a4f4408b88&units=imperial`
  )
    .then(resp => {
      return resp.json()
    })
    .then(weatherData => {
      console.log(weatherData)
      currentWeather = weatherData
      const _h2Weather = document.createElement('h2')
      const _h2Name = document.createElement('h2')
      _h2Name.textContent = weatherData.name + ':'
      document.querySelector('.weather-data').appendChild(_h2Name)
      _h2Weather.textContent = weatherData.weather[0].description
      document.querySelector('.weather-data').appendChild(_h2Weather)
      const _h2Temp = document.createElement('h2')
      _h2Temp.textContent = weatherData.main.temp + '°F'
      document.querySelector('.weather-data').appendChild(_h2Temp)
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

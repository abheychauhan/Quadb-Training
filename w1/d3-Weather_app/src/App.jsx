import React, { useEffect, useState } from 'react'

function App() {

  const [city, setcity] = useState('')
  const [weather, setweather] = useState({})
  const[error, seterror] = useState('')
  const apiKey = 'e7a2e37bb0cf042d33d08391800e655a'

  // function to fetch weather data on load
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=${apiKey}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        setweather(data)
        console.log(data)
      })
      .catch((error) => console.error('Error fetching weather data:', error))
  }, [])


  // function to fetch weather data on search 
  const getWeatherOnsearch = async (e) => {
    e.preventDefault()
    if (!city) {
      alert('Please enter a city name')
      return
    }

    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
    const data = await response.json()
    setweather(data)
    console.log(data)


    if (data.cod !== '200') {
      seterror(data.message)
      alert('City not found')
      window.location.reload(true)
      return
    }

  }

  return  weather.list && weather.list.length > 0  ? (
    <div className='h-fit w-full bg-blue-300 p-4  flex items-center justify-center'>
      <div className=' h-fit p-10 bg-white rounded-lg '>

        <div className='flex flex-col items-center justify-center h-full'>
          <div>

          <h1 className='text-2xl font-bold text-gray-800 mb-4'>Weather App</h1>

          {/* search form */}
          <form className='flex gap-2 items-center justify-center' action="" onSubmit={(e) => getWeatherOnsearch(e)}>
            <input
              type='text'
              placeholder='Enter city name'
              className='border border-gray-300 rounded-lg p-2'
              onChange={(e) => setcity(e.target.value)}
              value={city}
            />
            <button
              className='bg-blue-500 text-white rounded-lg p-2'
            >
              Search
            </button>
          </form>
          </div>
          <div className='flex flex-col items-center justify-center mt-4  bg-[#9DD2FD] p-4 rounded-lg shadow-[#9DD2FD] shadow-lg'>
           {/* weather forcast */}
            {weather.list && weather.list.length > 0 && (
              <div className='mt-4'>
                <h2 className='text-xl font-bold'>{`Today's Weather in ${weather.city.name}`}</h2>
                <p>{`Temperature: ${weather.list[0].main.temp}°C`}</p>
                <p>{`Humidity: ${weather.list[0].main.humidity}%`}</p>
                <p>{`Wind Speed: ${weather.list[0].wind.speed} Km/h`}</p>
                <img src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}.png`} alt='Weather Icon' />
              </div>
            )}
          </div>
          {/*next 5 days forcast */}
          <div className='flex flex-col items-center justify-center mt-8'>
            <h2 className='text-xl font-bold mb-4'>{`5-Day Forecast for ${weather.city ? weather.city.name : ''}`}</h2>

            {weather.list && weather.list.length > 0 && (
              <div className='flex flex-wrap justify-center gap-4'>
                {weather.list.map((item, index) => {
                  if (index % 8 === 0) {
                    return (
                      <div key={index} className=' bg-[#9DD2FD] p-4 rounded-lg shadow-[#9DD2FD] shadow-lg'>
                        <h3>{`Date: ${item.dt_txt}`}</h3>
                        <p>{`Temperature: ${item.main.temp}°C`}</p>
                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt='Weather Icon' />
                      </div>
                    )
                  }

                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : <h1 className='text-2xl font-bold text-gray-800 mb-4'>Loading...</h1>

}

export default App
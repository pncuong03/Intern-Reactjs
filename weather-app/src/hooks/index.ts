import { useState, ChangeEvent } from 'react'
import axios from 'axios'
import { weatherType } from './../types/index'


const useWeather = () => {
  const [term, setTerm] = useState<string>('')
  const [forecast, setForecast] = useState<weatherType | null>(null)


  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
  }

  const onSubmit = () => {
    getForecast()
  }

  const getForecast = async () => {
    try {
      const res = await axios.get( `http://api.openweathermap.org/data/2.5/weather?`,{
        params: {
          q: term.trim(),
          appid: '8fc774d06aff69e11cb7b4bd006a772c',
        },
      })
      setForecast(res.data)
      console.log(forecast);
      
    } catch (error) {
      
    }
  }

  return {
    forecast,
    term,
    onSubmit,
    onInputChange,
  }
}

export default useWeather

import { useState, useContext } from 'react'
import axios from 'axios'
import { WeatherContext } from '../Context/WeatherContext'
  
const useWeather = () => {
  const [term, setTerm] = useState<string>('')
  const { dispatch } = useContext(WeatherContext);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
  };

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
      dispatch({ type: 'SET_FORECAST', payload: res.data });
      
    } catch (error) {
      alert("Please enter again city!")
    }
  }

  return {
    term,
    onSubmit,
    onInputChange,
  };
}

export default useWeather

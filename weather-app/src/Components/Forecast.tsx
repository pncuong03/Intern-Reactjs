import React, { useContext } from "react";
import Weather from "./Weather";
import Search from "./Search";
import useWeather from "../hooks";
import { WeatherContext } from "../Context/WeatherContext";

export default function Forecast() {
  const { term, onSubmit, onInputChange } = useWeather();
  const { state } = useContext(WeatherContext);
  return (
    <main className="flex justify-center items-center h-[100vh] w-full">
      {state.forecast ? (
        <Weather data={state.forecast} />
      ) : (
        <Search term={term} onInputChange={onInputChange} onSubmit={onSubmit} />
      )}
    </main>
  );
}

import React from "react";
import Search from "./Components/Search";
import useWeather from "./hooks";
import Weather from "./Components/Weather";

const App: React.FC = () => {
  const { forecast, term, onSubmit, onInputChange } = useWeather();

  return (
    <main className="flex justify-center items-center h-[100vh] w-full">
      {forecast ? (
        <Weather data={forecast} />
      ) : (
        <Search term={term} onInputChange={onInputChange} onSubmit={onSubmit} />
      )}
    </main>
  );
};

export default App;

import React from "react";
import { WeatherProvider } from "./Context/WeatherContext";
import Forecast from "./Components/Forecast";

const App: React.FC = () => {
  return (
    <WeatherProvider>
      <Forecast />
    </WeatherProvider>
  );
};

export default App;

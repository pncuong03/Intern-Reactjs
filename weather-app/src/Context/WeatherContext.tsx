import React, { createContext, ReactNode, useReducer, Dispatch } from "react";
import {
  WeatherAction,
  WeatherState,
  initialState,
  weatherReducer,
} from "../Reducer/WeatherReducer";

const WeatherContext = createContext<{
  state: WeatherState;
  dispatch: Dispatch<WeatherAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };

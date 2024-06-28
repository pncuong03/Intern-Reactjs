import { weatherType } from "../types";

export interface WeatherState {
  forecast: weatherType | null;
}

export interface WeatherAction {
  type: "SET_FORECAST";
  payload: weatherType;
}

const initialState: WeatherState = {
  forecast: null,
};

const weatherReducer = (
  state: WeatherState = initialState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case "SET_FORECAST":
      return { ...state, forecast: action.payload };
    default:
      return state;
  }
};

export { weatherReducer, initialState };

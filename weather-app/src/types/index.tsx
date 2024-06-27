export type weatherType = {
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: [
    {
      main: string;
      icon: string;
      description: string;
    }
  ];
  wind: {
    speed: number;
    gust: number;
    deg: number;
  };
  clouds: {
    all: number;
  };

  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  visibility: number;
};

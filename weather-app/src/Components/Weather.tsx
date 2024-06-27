import { weatherType } from "../types";
import { convertCelsius, convertDistance, convertTime, feels } from "../utils";

type Props = {
  data: weatherType;
};

const Weather = ({ data }: Props) => {
  return (
    <div className="w-full max-w-[500px] py-4 px-24 h-auto bg-orange-400  bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg">
      <div className="mx-auto w-[300px]">
        <section className="text-center">
          <h2 className="text-2xl font-black">
            {data.name} <span className="font-thin">{data.sys.country}</span>
          </h2>
          <h1 className="text-4xl font-extrabold">
            Temperture {convertCelsius(data.main.temp)} <sup>o</sup>C
          </h1>
          <p className="text-sm">
            {data.weather[0].main} ({data.weather[0].description})
          </p>
          <p className="text-sm">
            H: {convertCelsius(data.main.temp_max)} <sup>o</sup>C L:{" "}
            {convertCelsius(data.main.temp_min)} <sup>o</sup>C
          </p>
        </section>

        <section className="flex flex-wrap justify-between text-zinc-700">
          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5">
            <div className="text-xl font-thin">Sunrise</div>

            <span className="mt-2">{convertTime(data.sys.sunrise)}</span>
          </div>
          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5">
            <div className="text-xl font-thin">Sunset</div>
            <span className="mt-2">{convertTime(data.sys.sunset)}</span>
          </div>

          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5">
            <div className="text-xl font-thin">Humidity</div>
            <span className="mt-2">{data.main.humidity} %</span>
          </div>

          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5">
            <div className="text-xl font-thin">Pressure</div>
            <span className="mt-2">{data.main.pressure} hPa</span>
          </div>

          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5">
            <div className="text-xl font-thin">Visibility</div>
            <span className="mt-2">{convertDistance(data.visibility)} km</span>
          </div>
          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5">
            <div className="text-xl font-thin">Wind</div>
            <span className="mt-2">{data.wind.speed} km/h</span>
          </div>
          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5">
            <div className="text-xl font-thin">Feels like</div>
            <span className="mt-2">
              {convertCelsius(data.main.feels_like)} <sup>o</sup>C -{" "}
              {feels(data.main.feels_like, data.main.temp)}
            </span>
          </div>
          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5">
            <div className="text-xl font-thin">Cloud</div>
            <span className="mt-2">{data.clouds.all} %</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Weather;

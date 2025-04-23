
import { useState, useEffect } from 'react';
import { CloudSun, CloudMoonRain, CloudRain, CloudSnow, Sun, Thermometer, Wind } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

const API_KEY = "d5575cbb5d50c6c5fc85fd37bb65761e"; // OpenWeather public API key
const CITY = "Nuweiba";
const COUNTRY_CODE = "EG";

const WeatherWidget = () => {
  const fetchWeather = async (): Promise<WeatherData> => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY_CODE}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error('Weather data fetch failed');
    }
    return response.json();
  };

  const { data: weather, isLoading, error } = useQuery({
    queryKey: ['weather'],
    queryFn: fetchWeather,
    refetchInterval: 1800000, // Refetch every 30 minutes
  });

  const getWeatherIcon = (weatherMain: string) => {
    switch (weatherMain.toLowerCase()) {
      case 'clear':
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'rain':
        return <CloudRain className="h-8 w-8 text-blue-500" />;
      case 'snow':
        return <CloudSnow className="h-8 w-8 text-gray-300" />;
      case 'thunderstorm':
        return <CloudMoonRain className="h-8 w-8 text-gray-600" />;
      default:
        return <CloudSun className="h-8 w-8 text-gray-500" />;
    }
  };

  if (isLoading) {
    return (
      <Card className="p-4 w-full max-w-sm mx-auto bg-white/80 backdrop-blur-sm">
        <div className="animate-pulse flex flex-col items-center gap-2">
          <div className="h-8 w-8 bg-gray-200 rounded-full" />
          <div className="h-4 w-24 bg-gray-200 rounded" />
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-4 w-full max-w-sm mx-auto bg-white/80 backdrop-blur-sm">
        <p className="text-red-500 text-center">Unable to load weather data</p>
      </Card>
    );
  }

  return (
    <Card className="p-6 w-full max-w-sm mx-auto bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          {weather && getWeatherIcon(weather.weather[0].main)}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">{CITY}</h3>
            <p className="text-sm text-gray-600 capitalize">{weather?.weather[0].description}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex items-center gap-2">
            <Thermometer className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-lg font-medium">{Math.round(weather?.main.temp ?? 0)}°C</p>
              <p className="text-xs text-gray-500">Feels like {Math.round(weather?.main.feels_like ?? 0)}°C</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Wind className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-lg font-medium">{Math.round(weather?.wind.speed ?? 0)} m/s</p>
              <p className="text-xs text-gray-500">Wind speed</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WeatherWidget;

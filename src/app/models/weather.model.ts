export class WeatherView {
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }
    main: {
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
    }
  }
import { WeatherProvider } from "./context/WeatherContext";
import Current from "./current/Current";

function App() {
  return (
    <WeatherProvider>
      <Current/>
    </WeatherProvider>
  );
}

export default App;

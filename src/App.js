import React from "react";
import useFetch from "./hooks/useFetch";
import useDark from "./hooks/useDark";
import usePositionYX from "./hooks/usePositionYX";
import useCountDown from "./hooks/useCountDown";
import ScrollDirections from "./components/scroll-directions";
import ThemeButton from "./components/theme-button";
import Countdown from "./components/countdown";
import FetchData from "./components/fetch-data";
import "./App.css";

const App = () => {
  const { data, loading } = useFetch("https://randomuser.me/api/");
  const [theme, toggleTheme] = useDark();
  const position = usePositionYX();
  const { countdownLoading, countdown } = useCountDown(
    "2021-12-31T00:00:00.889Z"
  );

  return (
    <div className={`App ${theme}`}>
      <ScrollDirections position={position} />
      <ThemeButton toggleTheme={toggleTheme} />
      <Countdown countdownLoading={countdownLoading} countdown={countdown} />
      <FetchData loading={loading} data={data} />
    </div>
  );
};

export default App;

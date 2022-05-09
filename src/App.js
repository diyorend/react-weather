import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyled from "./GlobalStyles";

function App() {
  //state
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
  //Effect
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=48a6506bf912416ba7a64309220305&q=tashkent&aqi=yes`
      )
      .then((data) => {
        setWeather(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //Event
  const weatherInput = (e) => {
    setInput(e.target.value);
  };
  const search = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${input}&aqi=yes`
      )
      .then((data) => {
        setWeather(data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <GlobalStyled />
      {weather && (
        <>
          <Search>
            <input onChange={weatherInput} type="text" />
            <button onClick={search}>Search</button>
          </Search>
          <CondLoca>
            <Cond>
              <img src={weather.current.condition.icon} alt="" />

              <Temp>{weather.current.temp_c} °C</Temp>
            </Cond>
            <div className="location">
              <h1>{weather.location.name}</h1>
              <h3>{weather.current.condition.text}</h3>
            </div>
          </CondLoca>
        </>
      )}
    </div>
  );
}

const Search = styled.form`
  @media (max-width: 900px) {
    input {
      width: 70%;
    }
  }

  min-height: 10vh;
  padding: 1rem 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  button,
  input {
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    border: none;
  }

  input {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    padding: 0.5rem 1rem;
  }

  button {
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 0.5rem 1rem;
    color: #fff;
    background: #415984;
  }
`;

const CondLoca = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 15vh;
  padding: 2rem 5%;
`;
const Cond = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Temp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export default App;

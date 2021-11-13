import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { weatherChart } from "../../../redux/weather/weatherActionst";
import ChartWeather from "./ChartWeather";
import { ModalStyled } from "./ModalStyled";

const Modal = ({ city, closeModal, showModal, weatherChart }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    addtime();
  }, []);
  const addtime = () => {
    const date = new Date();

    const weatherToday = city.list.filter(item => item.dt_txt.substr(0, 10) === date.toISOString().substr(0, 10));
    const weather = weatherToday.map(item => ({
      name: item.dt_txt.substr(10, 15),
      temp: item.main.temp,
      humidity: item.main.humidity,
      windSpeed: item.wind.speed,
      pressure: item.main.pressure
    }));

    setState({
      weather
    });
  };

  return (
    <>
      <ModalStyled>
        <div className="Overlay">
          <div className="Modal">
            <div className="optional_container">
              {" "}
              <button className="optional" onClick={weatherChart}>
                Chart
              </button>
            </div>
            <p>{city.population}</p>
            {showModal ? (
              <ChartWeather today={state.weather} />
            ) : (
              <ul>
                <h2 className="modal__title">all information about city </h2>

                <li className="modal__text">
                  <p>Country:{city.city.country}</p>
                  <p>Population:{city.city.population}</p>
                  <p>Timezone:{city.city.timezone}</p>
                  <p>
                    Сoordinates:<span>latitude:{city.city.coord.lat}</span>,<span>longitude:{city.city.coord.lon}</span>
                  </p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </ModalStyled>
    </>
  );
};
const mapStateToProps = (state, ownProps) => ({
  city: state.city,
  showModal: state.showModal
});
const mapDispatchToProps = {
  weatherChart: weatherChart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

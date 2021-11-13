import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewCart, delateNewCart } from "../../redux/weather/weatherActionst";
// import Modal from "../DetailPage/Modal";
import CartList from "./CartList/CartList";
import { MainStyled } from "./MainStyled";
const APIKEY = "84b5504ed7c5877d7d9a17faefca48bd";
class MainPage extends Component {
  state = { input: "" };

  changeInput = e => {
    const { name, value } = e.target;
    this.setState(prev => ({ ...prev, [name]: value }));
  };

  addCountry = e => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.input}&appid=${APIKEY}`)
      .then(res => this.props.addNewCart(res.data));
    this.reset();
  };

  reset = () => {
    this.setState(prev => ({
      ...prev,
      input: ""
    }));
  };
  update = (name, id) => {
    this.props.delateNewCart(id);
    axios
      .get(`http://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${APIKEY}`)
      .then(res => this.props.addNewCart(res.data));
  };
  render() {
    const { input } = this.state;
    return (
      <>
        <MainStyled>
          <div>
            <form>
              <input className="main__input" type="text" name="input" value={input} onChange={this.changeInput} />
              <button className="main__button" onClick={this.addCountry} type="button">
                add country
              </button>
            </form>

            <CartList update={this.update} weather={this.props.weather} />
          </div>
        </MainStyled>
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  weather: state.weather,
  showModal: state.showModal
});
const mapDispatchToProps = {
  addNewCart: addNewCart,
  delateNewCart: delateNewCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

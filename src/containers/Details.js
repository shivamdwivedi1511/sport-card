import React, { Component } from "react";
import CardViewer from "../components/CardViewer";

class Details extends Component {
  state = {
    email: "",
    phone: "",
    favorite_sport: "",
    showCard: false,
    card_number: null
  };

  submitHandler = e => {
    e.preventDefault();
    if (
      this.state.email !== "" &&
      this.state.phone !== "" &&
      this.state.favorite_sport !== ""
    ) {
      this.setState({
        showCard: true,
        card_number: Math.floor(Math.random() * 10000000)
      });
    }
  };

  render() {
    return this.state.showCard === false ? (
      <div>
        <div className="window ">
          <div className="overlay" />
          <div className="box header">
            <img src={this.props.photoURL} alt="proifle" />
            <h2>{this.props.name}</h2>
          </div>
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  placeholder="Enter Email no."
                  onChange={e => {
                    if (e.target.value !== "") {
                      this.setState({
                        email: e.target.value
                      });
                    }
                  }}
                />
              </div>
              <div className="input-field col s12">
                <input
                  id="phone"
                  type="tel"
                  className="validate"
                  placeholder="enter phone no."
                  onChange={e => {
                    if (e.target.value !== "") {
                      this.setState({
                        phone: e.target.value
                      });
                    }
                  }}
                />
              </div>
              <div className="input-field col s12">
                <input
                  id="favorite_sport"
                  type="text"
                  className="validate"
                  placeholder="enter Favorite Sport"
                  onChange={e => {
                    if (e.target.value !== "") {
                      this.setState({
                        favorite_sport: e.target.value
                      });
                    }
                  }}
                />
              </div>
              <button className="btn red" onClick={this.submitHandler}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    ) : (
      <div>
        <CardViewer
          photoURL={this.props.photoURL}
          name={this.props.name}
          email={this.state.email}
          phone={this.state.phone}
          favorite_sport={this.state.favorite_sport}
          card_number={this.state.card_number}
        />
      </div>
    );
  }
}

export default Details;

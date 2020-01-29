import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contacts extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              <strong>Our Location</strong>
            </h3>
          </div>

          <div className="row">
            <div className="col-md-7">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1h9PyWJ9-uAFIIilnpaebyJB00bZ8EhqT"
                style={{
                  border: 0,
                  width: "100%",
                  height: 315,
                  frameborder: 0
                }}
                allowFullScreen
              />
            </div>
            <div className="col-md-5">
              <h4>
                <strong>Contact Us</strong>
              </h4>

              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E-mail"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>

                <textarea
                  className="form-control"
                  cols="30"
                  rows="3"
                  placeholder="Your message.."
                />
                <Link className="btn btn-outline-primary text-uppercase mt-1">
                  <i className="fa-paper-plane-o" aria-hidden="true" />
                  <i className="fab fa-telegram-plane" />
                  <span className="ml-2">Send</span>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;

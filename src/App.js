import React, { Component } from "react";
import authors from "./data.js";

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <div id="sidebar">
              <img src="theindex.svg" className="logo" alt="the index logo" />
              <section>
                <h4 className="menu-item active">
                  <button>AUTHORS</button>
                </h4>
              </section>
            </div>
          </div>
          <div className="content col-10">
            <div className="authors">
              <h3>Authors</h3>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <div className="image">
                      <img
                        className="card-img-top img-fluid"
                        src={authors[0].imageUrl}
                        alt="J.K. Rowling"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        <span>
                          {authors[0].first_name + " " + authors[0].last_name}
                        </span>
                      </h5>
                      <small className="card-text">
                        {authors[0].books.length + " " + "books"}
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <div className="image">
                      <img
                        className="card-img-top img-fluid"
                        src={authors[1].imageUrl}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        <span>
                          {authors[1].first_name + " " + authors[1].last_name}
                        </span>
                      </h5>
                      <small className="card-text">
                        {authors[1].books.length + " " + "books"}
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <div className="image">
                      <img
                        className="card-img-top img-fluid"
                        src={authors[2].imageUrl}
                        alt="J.R.R Tolkein"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        <span>
                          {" "}
                          {authors[1].first_name + " " + authors[1].last_name}
                        </span>
                      </h5>
                      <small className="card-text">
                        {authors[2].books.length + " " + "books"}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

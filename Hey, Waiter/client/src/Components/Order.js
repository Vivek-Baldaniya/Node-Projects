import React from "react";
import "./order.css";

export const Order = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="banner container-fluid d-flex flex-column">
        <div className="navigation d-flex mt-3 justify-content-between">
          <div className="search">
            <input
              type="text"
              className="itemSearch form-control"
              name=""
              id=""
            />
          </div>
          <div className="cart">
            <span>&#xF239;</span>
          </div>
        </div>
        <div className="hotelName fs-1 mt-5 text-white">
          <span>
            Welcome To,<br></br>
          </span>
          Sher-E-Panjab
        </div>
      </div>
      {/* All Items */}
      <div className="container my-3" id="items">
        <div className="d-flex bd-highlight flex-wrap justify-content-around">
          <div
            className="card mb-4 rounded-3"
            style={{ width: "10rem", height: "15rem" }}
          >
            <img
              src="./img/burger.jpg"
              height="100px"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <h4>Burger</h4>
              <h5>50</h5>
              <button className="btn btn-danger">Add Item</button>
            </div>
          </div>
          <div
            className="card mb-4 rounded-3"
            style={{ width: "10rem", height: "15rem" }}
          >
            <img
              src="./img/cocacola.jpg"
              height="100px"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <h4>Coca Cola</h4>
              <h5>50</h5>
              <button className="btn btn-danger">Add Item</button>
            </div>
          </div>
          <div
            className="card mb-4 rounded-3"
            style={{ width: "10rem", height: "15rem" }}
          >
            <img
              src="./img/pizza.jpg"
              height="100px"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <h4>Coca Cola</h4>
              <h5>50</h5>
              <button className="btn btn-danger">Add Item</button>
            </div>
          </div>
          <div
            className="card mb-4 rounded-3"
            style={{ width: "10rem", height: "15rem" }}
          >
            <img
              src="./img/burger.jpg"
              height="100px"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <h4>Burger</h4>
              <h5>50</h5>
              <button className="btn btn-danger">Add Item</button>
            </div>
          </div>
          <div
            className="card mb-4 rounded-3"
            style={{ width: "10rem", height: "15rem" }}
          >
            <img
              src="./img/cocacola.jpg"
              height="100px"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <h4>Coca Cola</h4>
              <h5>50</h5>
              <button className="btn btn-danger">Add Item</button>
            </div>
          </div>
          <div
            className="card mb-4 rounded-3"
            style={{ width: "10rem", height: "15rem" }}
          >
            <img
              src="./img/pizza.jpg"
              height="100px"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <h4>Coca Cola</h4>
              <h5>50</h5>
              <button className="btn btn-danger">Add Item</button>
            </div>
          </div>
          <div
            className="card mb-4 rounded-3"
            style={{ width: "10rem", height: "15rem" }}
          >
            <img
              src="./img/coldCoffee.jpg"
              height="100px"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <h4>Cold Coffee</h4>
              <h5>50</h5>
              <button className="btn btn-danger">Add Item</button>
            </div>
          </div>
        </div>
      </div>
      {/* Small Cart  */}

      <div
        id="smallCart"
        className="d-flex justify-content-around align-content-center p-2"
      >
        <h4>Item:5</h4>
        <button className="btn btn-light">
          <h5 className="p-0 m-0">Order Now!</h5>
        </button>
        <h4>Bill:500</h4>
      </div>
    </>
  );
};

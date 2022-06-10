import React from "react";
import "./order.css";

export const ProductDetail = () => {
  return (
    <>
      {/* Product Detail */}
      <div className="productDetail">
        <div class="position-absolute top-0 start-0">
          <span>&#xF12F;</span>
        </div>
        <div className="position-absolute top-0 end-0">
          <span>&#xF239;</span>
        </div>
        {/* Product Image */}
        <img
          src="./img/pizza.jpg"
          height="300px"
          className="card-img-top"
          alt="..."
        />
      </div>
      {/* Product name and description */}
      <div className="container-fluid mt-3">
        <div className="productName ">
          <h1>Pizza</h1>
        </div>
        <div className="productDesc">
          <h5>
            Distinctio sint esse nisi nihil molestiae, perspiciatis dolore omnis
            consectetur in quisquam!
          </h5>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="productPrice mt-3">
            <h1>65/-</h1>
          </div>
          <div className="addItem">
            <button className="btn btn-danger btn-lg mt-2">
              <h2 className="m-0 p-0">Add Item</h2>
            </button>
          </div>
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

import React, { Component } from "react";
import Link from "next/link";

class CategoryTypes extends Component {
  render() {
    return (
      <section className="category-boxes-area pt-60">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-category-boxes">
                <img
                  src={require("../../images/new/firearm1.png")}
                  alt="image"
                />

                <h3 style={{color: "red"}}>Firearms</h3>

                <Link href="/category-without-sidebar">
                  <a className="shop-now-btn">Shop Now</a>
                </Link>
                <Link href="/category-without-sidebar">
                  <a className="link-btn"></a>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-category-boxes">
                <img
                  src={require("../../images/new/bullet1.png")}
                  alt="image"
                />

                <h3 style={{color: "white"}}>Ammunition</h3>

                <Link href="/collections-style-one">
                  <a className="shop-now-btn">Shop Now</a>
                </Link>

                <Link href="/collections-style-one">
                  <a className="link-btn"></a>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-category-boxes">
                <img
                  src={require("../../images/new/case1.png")}
                  alt="image"
                />

                <h3 style={{color: "red"}}>Storage: Cases, Safes, Cabinets</h3>

                <Link href="/category-left-sidebar-with-block">
                  <a className="shop-now-btn">Shop Now</a>
                </Link>

                <Link href="/category-left-sidebar-with-block">
                  <a className="link-btn"></a>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-category-boxes">
                <img
                  src={require("../../images/new/gun1.png")}
                  alt="image"
                />

                <h3 style={{color: "white"}}>Gun Care </h3>

                <Link href="/category-right-sidebar-with-block">
                  <a className="shop-now-btn">Shop Now</a>
                </Link>

                <Link href="/category-right-sidebar-with-block">
                  <a className="link-btn"></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CategoryTypes;

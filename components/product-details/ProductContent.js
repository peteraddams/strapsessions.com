import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Link from "next/link";
import { addQuantityWithNumber } from "../../store/actions/actions";
import SizeGuide from "./SizeGuide";
import Shipping from "./Shipping";

class ProductContent extends Component {
  state = {
    qty: 1,
    max: 10,
    min: 1,
    sizeGuide: false,
    shipModal: false,
  };

  handleAddToCartFromView = () => {
    this.props.addQuantityWithNumber(this.props.product.id, this.state.qty);

    toast.success("Added to the cart", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  IncrementItem = () => {
    this.setState((prevState) => {
      if (prevState.qty < 10) {
        return {
          qty: prevState.qty + 1,
        };
      } else {
        return null;
      }
    });
  };

  DecreaseItem = () => {
    this.setState((prevState) => {
      if (prevState.qty > 1) {
        return {
          qty: prevState.qty - 1,
        };
      } else {
        return null;
      }
    });
  };

  openSizeGuide = () => {
    this.setState({ sizeGuide: true });
  };

  closeSizeGuide = () => {
    this.setState({ sizeGuide: false });
  };

  openShipModal = () => {
    this.setState({ shipModal: true });
  };

  closeShipModal = () => {
    this.setState({ shipModal: false });
  };

  render() {
    const { sizeGuide, shipModal } = this.state;
    let { product } = this.props;
    return (
      <React.Fragment>
        <div className="col-lg-6 col-md-6">
          <div className="product-details-content">
            <h3>{product.title}</h3>

            <div className="price">
              <span className="new-price">${product.price}</span>
            </div>

            <div className="product-review">
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <Link href="#">
                <a className="rating-count"></a>
              </Link>
            </div>

            <p>{product.description}</p>

            <ul className="product-info">
              <li>
                <span>Availability:</span>{" "}
                <Link href="#">
                  <a>In stock </a>
                </Link>
              </li>
            </ul>

            <div className="product-info-btn">
              <Link href="#">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    this.openShipModal();
                  }}
                >
                  <i className="fas fa-truck"></i> Shipping
                </a>
              </Link>

              <Link href="#">
                <a>
                  <i className="far fa-envelope"></i> Ask about this product
                </a>
              </Link>
            </div>

            <div className="product-add-to-cart">
              <div className="input-counter">
                <span className="minus-btn" onClick={this.DecreaseItem}>
                  <i className="fas fa-minus"></i>
                </span>
                <input
                  type="text"
                  value={this.state.qty}
                  min={this.state.min}
                  max={this.state.max}
                  onChange={(e) => this.setState({ qty: e.target.value })}
                />
                <span className="plus-btn" onClick={this.IncrementItem}>
                  <i className="fas fa-plus"></i>
                </span>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleAddToCartFromView}
              >
                <i className="fas fa-cart-plus"></i> Add to Cart
              </button>
            </div>

            <div className="buy-checkbox-btn">
              <div className="item">
                <Link href="/cart">
                  <a className="btn btn-primary">Buy it now! (add items first)</a>
                </Link>
              </div>
            </div>

            <div className="custom-payment-options">
              <span>Guaranteed safe checkout:</span>

              <div className="payment-methods">
                <Link href="#">
                  <a>
                    <img
                      src={require("../../images/payment-image/1.svg")}
                      alt="image"
                    />
                  </a>
                </Link>

                <Link href="#">
                  <a>
                    <img
                      src={require("../../images/payment-image/2.svg")}
                      alt="image"
                    />
                  </a>
                </Link>

                <Link href="#">
                  <a>
                    <img
                      src={require("../../images/payment-image/3.svg")}
                      alt="image"
                    />
                  </a>
                </Link>

                <Link href="#">
                  <a>
                    <img
                      src={require("../../images/payment-image/4.svg")}
                      alt="image"
                    />
                  </a>
                </Link>

                <Link href="#">
                  <a>
                    <img
                      src={require("../../images/payment-image/5.svg")}
                      alt="image"
                    />
                  </a>
                </Link>

                <Link href="#">
                  <a>
                    <img
                      src={require("../../images/payment-image/6.svg")}
                      alt="image"
                    />
                  </a>
                </Link>

                <Link href="#">
                  <a>
                    <img
                      src={require("../../images/payment-image/7.svg")}
                      alt="image"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {sizeGuide ? <SizeGuide closeSizeGuide={this.closeSizeGuide} /> : ""}
        {shipModal ? <Shipping closeShipModal={this.closeShipModal} /> : ""}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addQuantityWithNumber: (id, qty) => {
      dispatch(addQuantityWithNumber(id, qty));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductContent);

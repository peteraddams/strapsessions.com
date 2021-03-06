import React from "react";
import axios from "axios";

import Router from 'next/router'
import Link from "next/link";
import { connect } from "react-redux";
import OrderSummary from "./OrderSummary";
import useForm from "./userForm";
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";

import { toast } from 'react-toastify';
import { resetCart } from "../../store/actions/actions";

function CheckoutForm({ total, shipping, }) {
  function handleOnSubmit(e) {
    e.preventDefault();
   
    return axios
      .get(
        `https://coinbase-backend.herokuapp.com/checkout?total=${totalAmount}&name=${state.firstName.value}`
      )
      .then((res) => {
        console.log(res.data);
        redirect(res.data);
      resetCart;
        toast.success('Order has been received, Please make payment in the new window', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
        setTimeout(function(){ Router.push('/thankyou'); }, 5000);
      });
  }

  function redirect(url) {
    if (url) return window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=700");
    
   
 
  }

  let totalAmount = (total + shipping).toFixed(2);

  const stateSchema = {
    firstName: { value: "", error: "" },
    lastName: { value: "", error: "" },
    address: { value: "", error: "" },
    city: { value: "", error: "" },
    state: { value: "", error: "" },
    zip: { value: "", error: "" },
    email: { value: "", error: "" },
    phone: { value: "", error: "" },
  };

  const validationStateSchema = {
    firstName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid first name format.",
      },
    },

    lastName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid last name format.",
      },
    },

    address: {
      required: true,
      validator: {
        error: "Invalid address format.",
      },
    },

    city: {
      required: true,
      validator: {
        error: "Invalid last name format.",
      },
    },

    state: {
      required: true,
      validator: {
        error: "Invalid last name format.",
      },
    },

    zip: {
      required: true,
      validator: {
        regEx: /^\d{5}$|^\d{5}-\d{4}$/,
        error: "Invalid zip format, use like 12345.",
      },
    },

    email: {
      required: true,
      validator: {
        regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        error: "Invalid email format.",
      },
    },

    phone: {
      required: true,
      validator: {
        regEx: /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{9})$/,
        error: "Invalid phone number format use like +2923432432432.",
      },
    },
  };

  const { state, handleOnChange, disable } = useForm(
    stateSchema,
    validationStateSchema
  );

  const errorStyle = {
    color: "red",
    fontSize: "13px",
  };

  return (
    <section className="checkout-area ptb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12"></div>
        </div>

        <form onSubmit={handleOnSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="billing-details">
                <h3 className="title">Billing Details</h3>

                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        First Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        onChange={handleOnChange}
                        value={state.firstName.value}
                      />
                      {state.firstName.error && (
                        <p style={errorStyle}>{state.firstName.error}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        Last Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        onChange={handleOnChange}
                        value={state.lastName.value}
                      />
                      {state.lastName.error && (
                        <p style={errorStyle}>{state.lastName.error}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <label>
                        Address <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        onChange={handleOnChange}
                        value={state.address.value}
                      />
                      {state.address.error && (
                        <p style={errorStyle}>{state.address.error}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <label>
                        Town / City <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        onChange={handleOnChange}
                        value={state.city.value}
                      />
                      {state.city.error && (
                        <p style={errorStyle}>{state.city.error}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        State / County <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="state"
                        className="form-control"
                        onChange={handleOnChange}
                        value={state.state.value}
                      />
                      {state.state.error && (
                        <p style={errorStyle}>{state.state.error}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        Postcode / Zip <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="zip"
                        className="form-control"
                        onChange={handleOnChange}
                        value={state.zip.value}
                      />
                      {state.zip.error && (
                        <p style={errorStyle}>{state.zip.error}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={handleOnChange}
                        value={state.email.value}
                      />
                      {state.email.error && (
                        <p style={errorStyle}>{state.email.error}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        Phone <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        onChange={handleOnChange}
                        value={state.phone.value}
                      />
                      {state.phone.error && (
                        <p style={errorStyle}>{state.phone.error}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="order-details">
                <h3 className="title">Your Order</h3>

                <OrderSummary />
                <br />
                <div style={{ color: "red" }}>
                  Card Services Are Temporarily Disabled In Your Region, Please Use
                  the Available Payment Method Below
                </div>
                <div style={{ color: "green" }}>
                  Payment button only works when all fields in the form marked
                  with <span style={{ color: "red" }}>*</span> are filled 
                </div>
              </div>
              <br />
              

              <button
                style={{ color: "gold", borderRadius: "10%" }}
                type="submit"
                disabled={disable}
                className={`btn btn-success`}
              >
                   <FontAwesomeIcon icon={faBitcoin} size="lg" spin/> Pay
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    total: state.total,
    shipping: state.shipping,
  };
};

export default connect(mapStateToProps)(CheckoutForm);

import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router";

const KEY =
  "pk_test_51KyVBgJHCE1fmy6FlGIETPjz7Nflk8XaqKkcMuaYaXAHAMqJCN2X5QGOCGWfwMzGW3VDFyRX5JZKyS1VDQZA9czg00pcZXZBVe";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 100000000,
          }
        );
        console.log(res.data);
        navigate("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>Processing.Please wait....</span>
      ) : (
        <StripeCheckout
          name="Getama Online"
          image="https://drive.google.com/uc?id=1YAWjnP64nnRO54MU8ypgzcBBgEXUo3Qh"
          billingAddress
          shippingAddress
          description="Total pembayaran  Rp.1000"
          locale="auto"
          amount={1000}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              border: "none",
              width: 120,
              height: 50,
              borderRadius: "5px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Pay Now
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;

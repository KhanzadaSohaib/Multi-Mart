import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Stripe = () => {
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <div>
      <StripeCheckout
        token={onToken}
        stripeKey="pk_live_51Obh0aImfEH6zzJQQ4rBEBndwv0dDAhaFMTTry6Vp24vcmb4y4vtaQD8VPaC07NhIjT8awREanLH6s2wR1sDrgkE00BlCkbRAr"
      />
    </div>
  );
};

export default Stripe;

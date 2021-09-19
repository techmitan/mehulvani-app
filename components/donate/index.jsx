import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./style.module.css";

const Donate = () => {
  let donateHandler = () => {
    window.open("https://rzp.io/l/mehulvani");
  };
  return (
    <div className={styles.box}>
      <h3>विज्ञापन का सहयोग करें</h3>

      <p>निष्पक्ष और निर्भीक पत्रकारिता के लिए मेहुल वाणी को सहयोग करें । </p>

      {/* <Button variant="outlined" color="primary" onClick={donateHandler}>
        Donate Now
      </Button> */}
      <form>
        <script
          src="https://checkout.razorpay.com/v1/payment-button.js"
          data-payment_button_id="pl_HzFBWg5jsw0s5b"
          async
        >
          {" "}
        </script>{" "}
      </form>
    </div>
  );
};

export default Donate;

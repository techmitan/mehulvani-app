import React from "react";
import Button from "@material-ui/core/Button";

const Donate = () => {
  let donateHandler = () => {
    window.open("https://rzp.io/l/eJsPelTk");
  };
  return (
    <div>
      <h3>विज्ञापन का सहयोग करें</h3>
      <Button variant="outlined" color="primary" onClick={donateHandler}>
        Donate Now
      </Button>
    </div>
  );
};

export default Donate;

import React from "react";
import styles from "./style.module.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Button from "@material-ui/core/Button";

const WhatsAppGroup = () => {
  return (
    <div className={styles.wrapper}>
      <h3>और भी ताज़ा खबरों के लिए हमारे whatsapp ग्रुप से जुड़िए</h3>
      <div style={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<WhatsAppIcon />}
          onClick={() => {
            window.open("https://chat.whatsapp.com/I6TT9cAU6HR8raEprWTfVI");
          }}
        >
          Join Whatsapp Now
        </Button>
      </div>
    </div>
  );
};

export default WhatsAppGroup;

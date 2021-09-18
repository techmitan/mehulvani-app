import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";

const Share = ({ url, title, user }) => {
  return (
    <div>
      <FacebookShareButton
        url={url}
        quote={`${user} की खबर --- ${title} | cg24x7 News - हर खबर पर नजर`}
        hashtag="#cg24x7 News"
      >
        <FacebookIcon size={30} round={true}></FacebookIcon>
      </FacebookShareButton>
      <span style={{ marginRight: "10px" }}></span>
      <WhatsappShareButton
        url={url}
        title={`${user} की खबर --- ${title} | cg24x7 News - हर खबर पर नजर`}
      >
        <WhatsappIcon size={30} round={true}></WhatsappIcon>
      </WhatsappShareButton>
      <span style={{ marginRight: "10px" }}></span>

      <TwitterShareButton
        url={url}
        title={`${user} की खबर --- ${title} | cg24x7 News - हर खबर पर नजर`}
      >
        <TwitterIcon size={30} round={true}></TwitterIcon>
      </TwitterShareButton>
    </div>
  );
};

export default Share;

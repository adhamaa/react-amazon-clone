import React from "react";
import "./Footer.css";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <div className="footer__backToTop" onClick={scrollTop}>
        <span>Back to top</span>
      </div>
    </div>
  );
}

export default Footer;

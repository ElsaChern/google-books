import { useState } from "react";
import iconUp from "../../img/icon-up.png";
import { UpBtnImg, UpButton } from "./styled";

const UpBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <UpButton onClick={scrollToTop}>
      <UpBtnImg
        style={{ display: visible ? "inline" : "none" }}
        src={iconUp}
        alt="iconUp"
      />
    </UpButton>
  );
};

export default UpBtn;

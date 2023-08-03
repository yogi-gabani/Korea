import React from "react";

import iconTop from '../../assets/img/icon_top.png';

function Header() {
  return (
    <div className="com_btn_top">
      <button className="btn_top" 
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <img src={iconTop} alt="top icon" />
      </button>
    </div>
  );
} 

export default Header;
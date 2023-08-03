/* eslint-disable */
import React from "react";
import { Link } from 'react-router-dom';

import ArrowLeft from '../../assets/img/arrow_left.png';
import ArrowRightActive from '../../assets/img/arrow_right_active.png';

function Header() {
  return (
    <div className="com_paging">
      {/* <Link to="#" className="btn_first"><img src="<?=_ASSETS?>img/arrow_last.png"/></Link> */}
      <Link to="#" className="btn_prev"><img src={ArrowLeft} alt="prev" /></Link>
      <Link to="#" className="btn_page active">1</Link>
      <span> / </span>
      <Link to="#" className="btn_page">3</Link>
      <Link to="#" className="btn_next"><img src={ArrowRightActive} alt="next" /></Link>
      {/* <Link to="#" className="btn_last"><img src="<?=_ASSETS?>img/arrow_last.png"/></Link> */}
    </div>
  );
} 

export default Header;
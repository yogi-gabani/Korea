import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../../assets/img/img_company_logo.png"

function CompanyInfo() {
  return (
    <>
      <div className="company_logo">
        <img src={companyLogo} alt="logo" />
      </div>
      <div className="company_info">
        <div className="info_box">
          <span className="name">㈜신영</span>
          <Link to="" className="com_icon_status arrow_right arrow_green">홈페이지</Link>
          <span className="bar" />
          <span className="com_icon_status bg_green line_green">계약직</span>
          <span className="desc">
            <span className="bar" />
            경력 2년 이상 
            <span className="bar" />
            경기ㆍ일산</span>
          <Link to="" className="com_icon_status arrow_right arrow_green">지도보기</Link>
        </div>
        <div className="info_tit">
          2023년 신영그룹 신입/경력 엔지니어 수시 채용
        </div>
      </div>
      <div className="info_date">
        <div className="info_txt">등록일 <span className="bar" /><span className="date">2023.01.01</span> </div>
        <div className="info_txt">마감일 <span className="bar" /><span className="date">2023.01.25</span> </div>
      </div>
    </>
  );
} 

export default CompanyInfo;
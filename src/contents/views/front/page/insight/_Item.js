/* eslint-disable */
import React from "react";
import imgMentor03 from "../../assets/img/img_mentor03.png";
import { Link } from "react-router-dom";

function Item() {
  return (
    <Link to={'/Insight/Detail'} className="com_card_item">
      <div className="thumb">
        <span className="price">2,000P</span>
        <img src={imgMentor03} className="thumb_img" alt="mentoring1" />
      </div>
      <div className="info">
        <div className="icon_wrap">
          <span className="icon_line_blue">자동차 설비</span>
          <span className="icon_line_blue">설계</span>
          <span className="icon_line_blue">도면</span>
          <div className="icon_wrapper">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <p className="title">자동차 설비분야의 엔지니어 멘토들에게 특급노하우 전수받을 수 있는 기회!</p>
        <p className="info_s">
          <span className="com_point_txt">dief568</span><span className="sm_remove"> ㆍ </span>좋아요 54 ㆍ 댓글 2 ㆍ 조회수 2
        </p>
      </div>
    </Link>
  );
} 

export default Item;
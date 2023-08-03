/* eslint-disable */
import React from "react";
import ImgSeminar from "../../assets/img/img_seminar.jpg";
import { Link } from "react-router-dom";

function Item({title, description}) {
  return (
    <Link to={'/Magazine/Detail'} className="com_card_item">
      <img src={ImgSeminar} className="thumb_img" alt="mentoring1" />
      <div className="info">
        <div className="icon_wrap">
          <span className="icon_line_blue">커리어</span>
        </div>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </div>
    </Link>
  );
} 

export default Item;
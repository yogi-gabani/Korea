/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

function Item({img, title, schedule, venue, capacity, status}) {
  return (
    <Link to={'/Seminar/Detail'} className="com_card_item">
      <img src={img} className="thumb_img" alt="mentoring1" />
      <div className="info">
        <p className="title">{title}</p>
        <p className="detail"><span className="text_grey">일정: </span> {schedule}</p>
        <p className="detail"><span className="text_grey">장소: </span> {venue}</p>
        <p className="detail"><span className="text_grey">정원: </span> {capacity}</p>
      </div>
      {status ? <button className="com_btn disabled">신청완료</button> : <button className="com_btn line">참가신청</button>}
    </Link>
  );
} 

export default Item;
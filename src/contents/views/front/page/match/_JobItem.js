import React from "react";
import { Link } from 'react-router-dom';
import iconGraph from "../../assets/img/icon_match_graph.png"
function JopItem() {
  return (
    <li className="com_job_item">
      <p className="tit">디스플레이 장비 엔지니어 최고 대우로 모십니다</p>
      <div className="info">
        <p className="info_tit">경력 2년 이상 · 경기 성남 근무
        마감: ~2023/01/25까지</p>
        <p className="info_s">
          ㈜ 삼성M&C <span className="icon">프리랜서</span>
        </p>
        <ul className="tag_list">
          <li className="tag_item">#이직</li> 
          <li className="tag_item">#재택근무</li>  
          <li className="tag_item">#고연봉</li>  
          <li className="tag_item">#엔지니어</li>
        </ul>
      </div>
      <Link to="/Match" className="btn_more"></Link>
      <button className="btn_like" />
      {/* 아이콘 active 시 active class 추가 */}
      <div className="graph">
        <span className='percent'>95%</span>
        <span className='icon_graph'><img src={iconGraph} alt="graph icon" /></span>
      </div>
    </li>
  );
} 

export default JopItem;
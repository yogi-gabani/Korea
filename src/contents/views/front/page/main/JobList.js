import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/main.scss";
//image
//component
import Paging from "../../component/Inc/Paging"
import BtnTop from '../../component/Inc/BtnTop';

function JobList() {
  const Arr18 = ["1", "2", "3", "4", "5","1", "2", "3", "4", "5","1", "2", "3", "4", "5","1", "2", "3"];
  return (
    <main className="p_main">
      {/* long banner */}
      <section className="sec_banner">
        <div className="com_center_wrap">
        </div>
      </section>
      <section className="sec_job com_bg">
        <div className="com_center_wrap">
          <div className="job_wrap">
            <div className="pg_tit_wrap">
              <h2 className="com_pg_tit">진행중인 공고</h2>
              <div className="select_wrap">
                <select className="select">
                  <option value="지역">지역</option>
                </select>
                <select className="select">
                  <option value="전기">전기</option>
                </select>
                <select className="select">
                  <option value="전기 설비">전기 설비</option>
                </select>
              </div>
            </div>
            <ul className="list">
              {Arr18.map((item,index) => (
              <li className="com_job_item" key={index}>
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
                <Link to="/front/Match" className="btn_more"></Link>
                <button className="btn_like" />
                {/* 아이콘 active 시 active class 추가 */}
              </li>
              ))}
            </ul>
          </div>
          <Paging />
        </div>
      </section>

      {/* top button */}
      <BtnTop />
    </main>
  );
}

export default JobList;

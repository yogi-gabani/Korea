import React from 'react';
import { Link } from 'react-router-dom';
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';
import AiMatchTab from './_AiTab.js';
//image
import iconGraph from "../../assets/img/icon_match_graph.png"

function MatchWishCompany() {
  return (
    <>
      <main className='com_mypage p_match_wish_company'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="AI 매칭 지원 현황" MenuPayAi="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>AI 매칭 지원 현황</h2>
            <AiMatchTab TabMatchWishCompany="active"/>
            <ul className="list">
              <li className="com_job_item">
                <p className="tit">디스플레이 장비 엔지니어 최고 대우로 모십니다</p>
                <div className="info">
                  <p className="info_tit">
                    경력 2년 이상<br/>
                    등록 : 2022, 08, 25<br/>
                    마감 : 2022, 09, 25<br/>
                    경기 성남 근무
                  </p>
                  <p className="info_s">
                    ㈜ 삼성M&C
                  </p>
                  <ul className="tag_list">
                    <li className="tag_item">#이직</li> 
                    <li className="tag_item">#재택근무</li>  
                    <li className="tag_item">#고연봉</li>  
                    <li className="tag_item">#엔지니어</li>
                    <li className="tag_item">#엔지니어</li>
                    <li className="tag_item">#엔지니어엔지니어엔지니어엔지니어엔지니어엔지니어엔지니어엔지니어엔지니어엔지니어</li>
                  </ul>
                </div>
                <Link to="/Match" className="btn_more"></Link>
                <button className="btn_like active" />
      {/* 아이콘 active 시 active class 추가 */}
                <div className="graph">
                  <span className='percent'>95%</span>
                  <span className='icon_graph'><img src={iconGraph} alt="graph icon" /></span>
                </div>
              </li>
              <li className="com_job_item">
                <p className="tit">디스플레이 장비 엔지니어 최고 대우로 모십니다</p>
                <div className="info">
                  <p className="info_tit">
                    경력 2년 이상<br/>
                    등록 : 2022, 08, 25<br/>
                    마감 : 2022, 09, 25<br/>
                    경기 성남 근무
                  </p>
                  <p className="info_s">
                    ㈜ 삼성M&C
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
                <div className="com_overlay type_circle">
                  <div className="bg"></div>
                  <div className="alert_box">
                    <span className="txt">
                      마감된 공고
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <Paging />
          </div>
        </div>
        {/* top button */}
        <BtnTop />
      </main>
    </>
  );
}

export default MatchWishCompany;

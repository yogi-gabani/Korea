/* eslint-disable */
import React, { useState} from 'react';
import { Link } from 'react-router-dom';
//image
import companyLogo from "../../assets/img/img_company_logo.png"
import iconGraph from "../../assets/img/icon_match_graph.png"
//component
import Lnb from './_Lnb';
import BtnTop from '../../component/Inc/BtnTop';
import PopReview from './_PopReview';
import CompanyInfo from './_CompanyInfo';

function RecruitDetail() {  
  const [modalMatchOpen, setModalMatchOpen] = useState(false);
  return (
    <main className='com_mypage com_company p_company_recruit_detail'>
      <div className='com_center_wrap'>
        <Lnb PageTitle="채용관리" MenuExchange="active"/>
        <div className='container type_noBg'>
          <div className="top_notice">
            AI로 매칭된 <span className="com_point_txt">[2023년 신영그룹 신입/경력 엔지니어 수시 채용]</span> 공고에 알맞은 인재입니다.
          </div>
          <div className="tab_content">
          {/* company info */}
          <div className="com_top_box">
            <CompanyInfo />
          </div>
          <hr className='divider' />
            <div className="detail_wrap">
              <div className="pg_tit_wrap">
                <h2 className="com_pg_tit">추천 인재</h2>
                <button className="com_btn line blue xs oval btn_refresh" onClick={() => setModalMatchOpen(true)}>인재 재 요청</button>
              </div>
              <ul className="profile_list">
                {[1,2,3].map((item, index) => (
                <li className="item">
                  <p className="profile"><img src={companyLogo} alt="" /></p>
                  <ul className="info_list">
                    <li className="info_item">
                      <span className="name">이름</span>
                      <span className="txt">홍길동 <span className="com_icon_status bg_orange line_orange">멘토 추천서</span></span>
                    </li>
                    <li className="info_item">
                      <span className="name">연락처</span>
                      <span className="txt">010-****-3333</span>
                    </li>
                    <li className="info_item">
                      <span className="name">경력</span>
                      <span className="txt">5년 경력</span>
                    </li>
                    <li className="info_item">
                      <span className="name">성별</span>
                      <span className="txt">남성</span>
                    </li>
                    <li className="info_item">
                      <span className="name">근무회사</span>
                      <span className="txt">Awesome (5년)Awesome (5년)Awesome (5년)..</span>
                    </li>
                    <li className="info_item">
                      <span className="name">희망직무</span>
                      <span className="txt">제품 엔지니어, Corap</span>
                    </li>
                  </ul>
                  <div className="graph">
                    <span className='percent'>95%</span>
                    <span className='icon_graph'><img src={iconGraph} alt="graph icon" /></span>
                  </div>
                  <div className="com_btn_wrap">
                    <button className="com_btn line xs btn_like">찜하기</button>
                    <Link to="/Company/Resume" className="com_btn bg blue xs">이력서 보기</Link>
                  </div>
                </li>
                ))}
              </ul>
            </div>
            <div className="com_btn_wrap center">
              <Link to="/Company/Recruit" className="com_btn blue s">추천 인재 목록으로</Link>
            </div>
          </div>
        </div>
      </div>
      {/* top button */}
      <BtnTop />
      {/* 인재 재요청 버튼 클릭 시 */}
      <PopReview open={modalMatchOpen} close={() => setModalMatchOpen(false)}/>
    </main>
  );
}

export default RecruitDetail;

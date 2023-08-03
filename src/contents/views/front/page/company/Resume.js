/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//image
import companyLogo from "../../assets/img/img_company_logo.png"
import imgCertify from "../../assets/img/logo.png"
//component
import Lnb from './_Lnb';
import BtnTop from '../../component/Inc/BtnTop';
import PopJobWord from './_PopWord';
import PopJobSelect from './_PopJobSelect';
import PopMentoRecommend from './_PopMentoRecommend';
import PopSuggestionResume from './_PopSuggestionResume';

function Resume() {  
  const [modalRecommendOpen, setModalRecommendOpen] = useState(false);
  const [modalSuggestionOpen, setModalSuggestionOpen] = useState(false);
  const [modalJobWordOpen, setModalJobWordOpen] = useState(false);
  const [modalJobSelectOpen, setModalJobSelectOpen] = useState(false);
  const handleCloseRecommendModal = () => {
    setModalRecommendOpen(false);
  };
  return (
    <main className='com_mypage com_company p_company_resume'>
      <div className='com_center_wrap'>
        <Lnb PageTitle="채용관리" MenuExchange="active"/>
        <div className='container'>
          <div className="tab_content">
            <ul className="profile_list">
              <li className="item">
                <p className="profile"><img src={companyLogo} alt="profile" /></p>
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
                <div className="com_btn_wrap">
                  <button className="com_btn line xs oval btn_print">인쇄하기</button>
                </div>
              </li>
            </ul>
            <div className="profile_info">
              <div className="graph_wrap">
                <ul className="graph_list">
                  <li className="graph_item">
                    <span className="bg bg_blue" style={{height: '30%'}}><span className="bg_txt">30%</span></span>
                    <span className="graph_txt">근무환경</span>
                  </li>
                  <li className="graph_item">
                    <span className="bg bg_emerald" style={{height: '55%'}}><span className="bg_txt">55%</span></span>
                    <span className="graph_txt">성향태그</span>
                  </li>
                  <li className="graph_item">
                    <span className="bg bg_green" style={{height: '95%'}}><span className="bg_txt">95%</span></span>
                    <span className="graph_txt">인재상</span>
                  </li>
                </ul>
              </div>
              <ul className="com_info_sec">
                <li className='field_box'>
                  <span className="tit">학력</span>
                  <div className='info_box'>연세대학교(건축과)ㆍ2009.02(졸업)</div>
                </li>
                <li className='field_box'>
                  <span className="tit">인증 경력</span>
                  <div className='info_box'>
                    <p className='txt'>(주) 삼성(엔지니어팀 / 대리)ㆍ2020.01~2020.02(퇴사) <span className="icon_certify"><img src={imgCertify} alt="certify icon" /></span></p>
                    <p className='txt'>인증경력 상세 설명 영역입니다.</p>
                    <p className='txt'>프로젝트명: - ㆍ프로젝트 기간: - ㆍ프로젝트 사용 툴: - ㆍ발주처: -</p>
                    <p className='txt'>프로젝트 상세 설명 영역입니다.</p>
                  </div>
                </li>
                <li className='field_box'>
                  <span className="tit">추가 경력</span>
                  <div className='info_box'>
                    <p className='txt'>(주) 삼성(엔지니어팀 / 대리)ㆍ2020.01~2020.02(퇴사)</p>
                    <p className='txt'>Awesome에서 기획팀으로 50개 ai 매칭을 진행했으며, 다양한 클라이언트와 내부 개발팀들과 소중한 경험을 체험을 했습니다.</p>
                  </div>
                </li>
                <li className='field_box'>
                  <span className="tit">자격증</span>
                  <div className='info_box'>컴퓨터활용능력 1급(대한상공회의소)ㆍ2005.08</div>
                </li>
                <li className='field_box'>
                  <span className="tit">교육</span>
                  <div className='info_box'>
                    <p className='txt'>교육명(교육기관)ㆍ2005.08~2005.08</p>
                    <p className='txt'>교육 상세 설명 영역입니다.</p>
                  </div>
                </li>
                <li className='field_box'>
                  <span className="tit">보유스킬</span>
                  <div className='info_box'>보유스킬 상세 설명 영역입니다.</div>
                </li>
                <li className='field_box'>
                  <span className="tit">TOOL</span>
                  <div className='info_box'>TOOL 상세 설명 영역입니다.</div>
                </li>
                <li className='field_box'>
                  <span className="tit">링크</span>
                  <div className='info_box'>
                    <p className='txt'>포트폴리오 : https://www.awesome8.kr</p>
                    <p className='txt download'>자격증 : 파일명.exe 
                      <button className="btn_download"></button>
                    </p>
                  </div>
                </li>
                <li className='field_box'>
                  <span className="tit">멘토 추천서</span>
                  <div className='info_box'>
                    <p className='txt'>멘토명 <button className="com_icon_status arrow_right arrow_green" onClick={()=>{setModalRecommendOpen(true)}}>추천서 보기</button></p>
                    <p className='txt'>추천서 제목</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="com_btn_wrap center">
              <Link to="/Company/Recruit" className="com_btn line blue s">공고 목록으로</Link>
              <button className="com_btn blue s" onClick={() => {setModalSuggestionOpen(true)}}>면접 제안</button>
            </div>
          </div>
        </div>
      </div>
      {/* top button */}
      <BtnTop />
      {/* Modal - mento recommend */}
      <PopMentoRecommend open={modalRecommendOpen} close={() => setModalRecommendOpen(false)} />
      {/* Modal - interview suggestion */}
      <PopSuggestionResume open={modalSuggestionOpen} close={() => setModalSuggestionOpen(false)}>
        <div className="btn_container">
          <button className="com_btn line s" onClick={() => {setModalJobWordOpen(true)}}>문구 가져오기</button>
          <button className="com_btn line s" onClick={() => {setModalJobSelectOpen(true)}}>공고 설정</button>
          <button className="com_btn bg blue s btn_suggestion" onClick={() => handleCloseRecommendModal()}>면접 제안 보내기</button>
        </div>
      </PopSuggestionResume>
      {/* Modal - job word select */}
      <PopJobWord open={modalJobWordOpen} close={() => setModalJobWordOpen(false)}/>
      {/* Modal - job select */}
      <PopJobSelect open={modalJobSelectOpen} close={() => setModalJobSelectOpen(false)}/>
    </main>
  );
}

export default Resume;

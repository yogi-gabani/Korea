/* eslint-disable */
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//image
import companyLogo from "../../assets/img/img_company_logo.png"
import iconGraph from "../../assets/img/icon_match_graph.png"
//component
import Lnb from './_Lnb';
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';
import PopSuggestion from './_PopSuggestion';

function Recruit() {
  const [modalSuggestionOpen, setModalSuggestionOpen] = useState(false);
  const [tabState, setTabState] = useState(0);
  const tab = [
    { text: "추천 인재", value: 0 },
    { text: "찜한 인재", value: 1 },
    { text: "제안을 보낸 인재", value: 2 },
    { text: "면접 문구 설정", value: 3 },
    { text: "채용상태", value: 4 },
  ];
  const renderTab = useCallback(() => {
    return tab.map((v, idx) => {
      return (
        <button key={idx} className={`tab ${tabState === v.value && "active" || ""}`} onClick={() => setTabState(v.value)}>
          {v.text}
        </button>
      );
    });
  }, [tab]);
  return (
    <main className='com_mypage com_company p_company_recruit'>
      <div className='com_center_wrap'>
        
      <Lnb PageTitle="채용관리" MenuExchange="active"/>
        <div className='container'>
          <h2 className='com_pg_tit'>채용관리</h2>
          <div className="com_pg_tab">
            {renderTab()}
          </div>
          
          {tabState === 0 && (
            <div className="tab_content">
              <ul className="card_list">
              {[1,2,3,4,5,6,7].map((item, index) => (
                <li className="item" key={index}>
                  <span className="status">모집중</span>
                  <Link to="/Company/RecruitDetail"><div className="tit">디스플레이 장비 엔지니어 최고 대우로 모십니다.</div></Link>
                  <p className="region">경기<span className="dot"/>일산</p>
                  <div className="info">
                    <p className="info_s">
                      <span className="name">등록일</span><span className="bar"></span><span className="date">2023.01.01</span>
                    </p>
                    <p className="info_s">
                      <span className="name">마감일</span><span className="bar"></span><span className="date">2023.01.01</span>
                    </p>
                  </div>
                  <div className="com_btn_wrap">
                    <button className="com_btn xs line" onClick={() =>{}}>추천 인재 5명</button>
                  </div>
                </li>
              ))}
              </ul>
              <Paging />
            </div>
          ) || tabState === 1 && (
            <div className="tab_content">
              <p className="notice_txt"><span className="dot blue"></span>내가 찜한 인재 목록입니다.</p>
              <ul className="profile_list">
                {[1,2,3].map((item, index) => (
                <li className="item" key={index}>
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
                    <button className="com_btn line xs btn_like">해제하기</button>
                    <Link to="/Company/Resume" className="com_btn bg blue xs">이력서 보기</Link>
                  </div>
                </li>
                ))}
              </ul>
              <Paging />
            </div>
          ) || tabState === 2 && (
            <div className="tab_content">
              <p className="notice_txt type_suggestion"><span className="dot blue"></span>면접제안을 보낸 인재들의 목록입니다.
                <button className="com_btn bg blue oval btn_del">삭제</button>
              </p>
              <table className='com_board_list'>
                <colgroup><col width="5%"/><col width="11%"/><col/><col width="8%"/><col width="12%"/><col width="10%"/><col width="10%"/><col width="10%"/><col width="11%"/></colgroup>
                <thead>
                  <tr>
                    <th></th>
                    <th>날짜</th>
                    <th>공고 제목</th>
                    <th>이름</th>
                    <th>제안을 보낸 문구</th>
                    <th>수락 상태</th>
                    <th>제안 마감 기한</th>
                    <th>면접 확정일자</th>
                    <th>이력서</th>
                  </tr>
                </thead>
                <tbody>
                  {[1,2,3].map((item, index) => (
                  <tr key={index}>
                    <td className='info_field'><span className="td_m"><input type="checkbox" id={`chk` + index+``} className="com_chk circle"/><label htmlFor={`chk` + index+``}></label></span></td>
                    <td className='info_field info_date'>2022.12.28</td>
                    <td className='tit_field'>삼성 엔지니어 구합니다</td>
                    <td className='tit_field first com_point_txt'>홍길동</td>
                    <td className='info_field info_btn'><button className="com_btn oval line s" onClick={() => {setModalSuggestionOpen(true)}}>문구 보기</button></td>
                    <td className='info_field info_status'>면접 거절</td>
                    <td className='info_field info_due_date'><span className="th_m">제안 마감 기한</span>2023.01.01</td>
                    <td className='info_field info_due_date'><span className="th_m">면접 확정일자</span>2023.01.01</td>
                    <td className='info_field info_btn'><Link to="/Company/Resume" className="com_btn oval line s">이력서 보기</Link></td>
                  </tr>
                  ))}
                </tbody>
              </table>
              <Paging />
            </div>
          ) || tabState === 3 && (
            <div className="tab_content">
              <ul className='com_input_sec type_row'>
                <li className='field_box'>
                  <span className="tit">제목</span>
                  <div className='input_box'>
                    <input type='text' placeholder='설비 공고' className='input' />
                  </div>
                </li>
                <li className='field_box'>
                  <span className="tit">내용</span>
                  <div className='input_box'>
                    <textarea className='textarea l' placeholder='OOO님의 역량이 ㈜삼성 전기 엔지니어 포지션에적합하다고 판단되어, 면접 요청을 제안합니다.이 제안은 22.11.17까지 유효합니다.(주) 삼성은 국내 최고의 대기업이며, 꾸준한
연구개발 투자와 고객만족 경영, 마케팅을 바탕으로 세계적인 기업으로 성장해왔습니다.

일정: 2022.11.13 (수)
장소: 서울특별시 서초구 서초대로74길 11  2층

세계적인 기업으로의 성장을 함께할 당신을
기다리겠습니다!

문의 이메일: abcd123@awesome8.kr
면접 날짜 수정이 필요할 경우 위 이메일로 회신 주세요.'>
                    </textarea>
                  </div>
                </li>
                <li className='field_box'>
                  <span className="tit m_hide"></span>
                  <div className='input_box'>
                    <div className="btn_wrap">
                      <button className="com_btn line oval xs btn_refresh">초기화</button>
                      <button className="com_btn bg blue oval xs">문구 수정</button>
                    </div>
                  </div>
                </li>
                <li className='field_box'>
                  <span className="tit m_hide"></span>
                  <div className='input_box'>
                    <div className="com_attach_section">
                      <div className="img_box active">
                        <span>면접 기본 문구</span>
                        <button type="button" className="btn_del" onClick={() => {}}></button>
                      </div>
                      <div className="img_box">
                        <span>엔지니어 공고</span>
                        <button type="button" className="btn_del" onClick={() => {}}></button>
                      </div>
                      <div className="com_input_upload">
                        <button className="btn_upload"></button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          ) || tabState === 4 && (
            <div className="tab_content recruit_status">
              <div className="input_wrap">
                <input type="text" className="input" />
                <button className="com_btn bg blue s btn_search">조회</button>
              </div>
              <ul className="status_list">
                {[1,2,3].map((item, index) => (
                <li className="item">
                  <div className="tit_box">
                    <span className='status'>모집중</span>
                    <span className="tit">디스플레이 장비 엔지니어 최고 대우로 모십니다</span>
                  </div>
                  <div className="list_box input_box">
                    <div className="status_wrap">
                      <Link to="/Company/RecruitStatus" className="status_link active">
                        <span>지원중 5명</span>
                      </Link>
                      <Link to="/Company/RecruitStatus" className="status_link active">
                        <span>서류통과 5명</span>
                      </Link>
                      <Link to="/Company/RecruitStatus" className="status_link active">
                        <span>서류거절 5명</span>
                      </Link>
                      <Link to="/Company/RecruitStatus" className="status_link active">
                        <span>합격 5명</span>
                      </Link>
                      <Link to="/Company/RecruitStatus" className="status_link active">
                        <span>불합격 5명</span>
                      </Link>
                    </div>
                    <div className="info_date">
                      <div className="info_txt">등록일 <span className="bar"></span><span className="date">2023.01.01</span> </div>
                      <div className="info_txt">마감일 <span className="bar"></span><span className="date">2023.01.25</span> </div>
                    </div>
                  </div>
                </li>
                ))}
              </ul>
              <Paging />
            </div>
          )}
        </div>
      </div>
      {/* top button */}
      <BtnTop />
      {/* Modal - interview suggestion */}
      <PopSuggestion open={modalSuggestionOpen} close={() => setModalSuggestionOpen(false)} />
    </main>
  );
}

export default Recruit;

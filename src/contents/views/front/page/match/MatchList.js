/* eslint-disable */
import React, { useState, useCallback } from 'react';
import "../../assets/scss/page/match.scss";
//image
import iconAlertBlue from "../../assets/img/icon_alert_blue.png"
import imgJobDescription from "../../assets/img/img_job_description.png"
import imgJobDesc from "../../assets/img/img_job_desc.png"
//component
import TopSlideBanner from "./_TopSlideBanner";
import JobItem from './_JobItem';
import BtnTop from '../../component/Inc/BtnTop';
import Modal from '../../component/Inc/Modal';
import PopApply from './_PopApply';
import PopReview from './_PopReview';
import CompanyInfo from '../company/_CompanyInfo';

function MatchList() {
  const Arr4 = ["1", "2", "3", "4"];
  const [tabState, setTabState] = useState(0);
  const tab = [
    { text: "주요업무", value: 0 },
    { text: "회사소개", value: 1 },
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMatchOpen, setModalMatchOpen] = useState(false);
  const [modalApplyOpen, setModalApplyOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };
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
    <main className="p_match">
      {/* long banner */}
      <TopSlideBanner />
      {/* job list */}
      <section className="sec_job">
        <div className="com_center_wrap">
          <div className="job_wrap">
            <div className="pg_tit_wrap">
              <h2 className="com_pg_tit">AI로 매칭된 <span className="com_point_txt">홍길동</span>님과 딱 맞는 기업입니다.</h2>
              <button className="com_btn m black icon_arrow btn_all_list">전체 공고보기</button>
            </div>
            <div className="list_wrap">
              <ul className="list">
                {Arr4.map((item,index) => (
                  <JobItem key={index}/>
                ))}
              </ul>
              <button className="btn_more_job arrow_right">더보기</button>
              <div className="com_overlay">
                <div className="bg"></div>
                <div className="alert_box">
                  <img src={iconAlertBlue} className="icon" alt="alert" />
                  <span className="txt">
                    회원가입 및 나의 성향을 작성하시면 ai 매칭을 통해 <br />나에게 맞는 정확한 공고를 추천해드려요!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* company info */}
      <section className="sec_company_info com_bg">
        <div className="com_center_wrap">
          {/* company info */}
          <div className="com_top_box">
            <CompanyInfo />
          </div>
          {/* buttons */}
          <div className="com_btn_wrap center">
            {/* 선택 시 active 클래스 추가 */}
            <button className="com_btn l line icon_star">
              찜하기
            </button>
            <button className="com_btn l blue" onClick={() => setModalApplyOpen(true)}>
              지원하기
            </button>
          </div>
          {/* job description */}
          <div className="contents_box">
            <div className="content_tab">
              {renderTab()}
            </div>
            <div className="contents">
              <div className="contents_top">
                <ul className="com_tag_list">
                  <li className="com_btn lightblue">#이직</li>
                  <li className="com_btn lightblue">#재택근무</li>
                  <li className="com_btn lightblue">#고연봉</li>
                  <li className="com_btn lightblue">#엔지니어</li>
                  <li className="com_btn lightblue">#삼성</li>
                </ul>
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
                  <div className="com_overlay">
                    <div className="bg"></div>
                    <div className="alert_box">
                      <img src={iconAlertBlue} className="icon" alt="alert" />
                      <span className="txt">
                      매칭률을 보기 위해서는 <br />나의 성향을 작성해주세요.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {tabState === 0 && (
                <div className="detail_wrap">
                  <img src={imgJobDescription} alt="" />
                </div>
              ) || (
              <div className="detail_wrap">
                <img src={imgJobDesc} alt="" />
                <p className='txt'>
                  신영은 약 50만㎡에 달하는 청주 대농공장 부지를 매입하여 '청주 지웰시티'를 완성하였습니다. 상업과 문화, 오락 비즈니스 등 다양한 시설을 이용할 수 있는
                  주거생활공간과 공공청사, 호텔, 주민공동시설, 쇼핑몰 등의 기능을 추가하여 '다기능 자족복합도시' 건설을 표방하였습니다.
                  그 결과 청주 지웰시티는 중부권 대표 랜드마크로 자리하였고, 청주시 전체의 개발 속도를 한 단계 앞당긴 결정적인 계기가 되었습니다.다양한 시설을 이용할 수 있는
                  주거생활공간과 공공청사, 호텔, 주민공동시설, 쇼핑몰 등의 기능을 추가하여 '다기능 자족복합도시' 건설을 표방하였습니다.
                  그 결과 청주 지웰시티는 중부권 대표 랜드마크로 자리하였고, 청주시 전체의 개발 속도를 한 단계 앞당긴 결정적인 계기가 되었습니다.
                </p>
                <img src={imgJobDesc} alt="" />
                <p className='txt'>
                  신영은 약 50만㎡에 달하는 청주 대농공장 부지를 매입하여 '청주 지웰시티'를 완성하였습니다. 상업과 문화, 오락 비즈니스 등 다양한 시설을 이용할 수 있는
                  주거생활공간과 공공청사, 호텔, 주민공동시설, 쇼핑몰 등의 기능을 추가하여 '다기능 자족복합도시' 건설을 표방하였습니다.
                  그 결과 청주 지웰시티는 중부권 대표 랜드마크로 자리하였고, 청주시 전체의 개발 속도를 한 단계 앞당긴 결정적인 계기가 되었습니다.다양한 시설을 이용할 수 있는
                  주거생활공간과 공공청사, 호텔, 주민공동시설, 쇼핑몰 등의 기능을 추가하여 '다기능 자족복합도시' 건설을 표방하였습니다.
                  그 결과 청주 지웰시티는 중부권 대표 랜드마크로 자리하였고, 청주시 전체의 개발 속도를 한 단계 앞당긴 결정적인 계기가 되었습니다.
                </p>
              </div>
              )}
            </div>
          </div>
          {/* buttons */}
          <div className="com_btn_wrap center">
            {/* 선택 시 active 클래스 추가 */}
            <button className="com_btn l line icon_star active">
              찜하기
            </button>
            <button className="com_btn l blue" onClick={() => setModalOpen(true)}>
              지원하기
            </button>
          </div>
          {tabState === 1 && (
            <>
              {/* job list */}
              <div className="job_wrap">
                <div className="pg_tit_wrap">
                  <h2 className="com_pg_tit">신영그룹 채용공고</h2>
                </div>
                <div className="list_wrap">
                  <ul className="list">
                    {Arr4.map((item,index) => (
                      <JobItem key={index}/>
                    ))}
                  </ul>
                  <button className="btn_more_job arrow_right">더보기</button>
                </div>
              </div>
              <div className="job_wrap">
                <div className="pg_tit_wrap">
                  <h2 className="com_pg_tit">AI로 매칭된 <span className="com_point_txt">홍길동</span>님과 딱 맞는 기업입니다.</h2>
                </div>
                <div className="list_wrap">
                  <ul className="list">
                    {Arr4.map((item,index) => (
                      <JobItem key={index}/>
                    ))}
                  </ul>
                  <button className="btn_more_job arrow_right" onClick={() => setModalMatchOpen(true)}>더보기</button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      {/* top button */}
      <BtnTop />
      {/* modal */}
      <PopApply open={modalApplyOpen} close={() => setModalApplyOpen(false)}/>
      <PopReview open={modalMatchOpen} close={() => setModalMatchOpen(false)} type="pop_review" />
      {/* alert */}
      <Modal open={modalOpen} close={handleCloseModal} type="type_alert" >
        <div className="content_container scroll">
          <strong>이력서 작성이 완료되지 않았습니다.</strong> <br />
          이력서를 작성하시겠습니까?
        </div>
        <div className="btn_container">
          <button className="com_btn blue s" onClick={() => handleCloseModal()}>취소</button>
          <button className="com_btn line blue s">확인</button>
        </div>
      </Modal>
    </main>
  );
}

export default MatchList;

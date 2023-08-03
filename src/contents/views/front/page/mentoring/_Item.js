/* eslint-disable */
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import imgMentor01 from "../../assets/img/img_mentor03.png"
import Modal from '../../component/Inc/Modal';

function Item() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleCloseApplyModal = () => {
    setModalOpen(false);
  };  
  const [tabState, setTabState] = useState(0);
  const tab = [
    { text: "화상미팅", value: 0 },
    { text: "질문과 답변 게시판", value: 1 },
    { text: "후기", value: 2 },
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
    <>
      <div className="com_card_item" onClick={() =>setModalOpen(true)}>
        <p className="thumb">
          <img src={imgMentor01} className="thumb_img" alt="mentoring1" />
        </p>
        <div className="info">
          <div className="icon_wrap">
            <span className="icon_line_blue">자동차 설비</span>
            <span className="grade">
              4.8
            </span>
          </div>
          <p className="tit">자동차 설비분야의 엔지니어 멘토들에게 특급 노하우 전수받을 수 있는 기회!자동차 설비분야의 엔지니어 멘토들에게 특급 노하우 전수받을 수 있는 기회!</p>
          <p className="info_s">
            <span className="com_point_txt dot">홍길동</span>
            <span className="info_txt">경기500명 규모의 중소기업</span>
          </p>
        </div>
      </div>

      {/* modal */}
      <Modal open={modalOpen} close={handleCloseApplyModal} type="pop_apply pop_mentoring_detail">
        <h2 className='pop_tit'>멘토링 상품 설명</h2>
        <div className="content_container scroll">
          <div className="info_bg">
            <div className="info_wrap">
              <img src={imgMentor01} alt="logo" className="img_logo" />
              <div className="info_tit">
                <strong>홍길동</strong>
                <div className="info_detail">
                  <div className="detail_box">
                    <div className="tit">직무</div>
                    <p className="desc">전자 엔지니어</p>
                  </div>
                  <div className="bar"></div>
                  <div className="detail_box">
                    <div className="tit">경력</div>
                    <p className="desc">엔지니어 경력 12년 <br />디자이너 경력 7년</p>
                  </div>
                  <div className="bar"></div>
                  <div className="detail_box">
                    <div className="tit">커리어 히스토리</div>
                    <p className="desc">서울 500명 규모 중견기업</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="info_wrap">
            <p className="input_tit first">서비스 상품</p>
            <div className="content_tab">
              {renderTab()}
            </div>
            {tabState === 0 && (
            <div className="tab_contents">
              <p className="input_tit">멘토링 서비스 설명</p>
              <div className="tab_box">
                <p>안녕하세요. 전자 엔지니어로 12년째 일하고 있는 홍길동 입니다.<br />이쪽 업계가 궁금하시거나 전자 엔지니어로 일하고 싶은 분들, 편하게 연락 주세요!</p>
                <p><span className="dot"></span>전자 엔지니어로 취직하기</p>
                <p><span className="dot"></span>전자 엔지니어에 관해</p>
                <p><span className="dot"></span>회사 관련 질문</p>
                <div className="img_wrap">
                  <img src={imgMentor01} className="img" alt="image" />
                  <img src={imgMentor01} className="img" alt="image" />
                </div>
              </div>
              <div className="tab_box meeting">
                화상 미팅 : 월 6회 이용가능
              </div>
            </div>
            ) || tabState === 1 && (
            <div className="tab_contents review">
              <div className="tab_box">
              질답
              </div>
            </div>
            ) || tabState === 2 && (
              <div className="tab_contents">
                <div className="tab_box review">
                {[1,2,3].map((item, index) => {
                  return (
                  <div className="card" key={index}>
                    <img src={imgMentor01} className="img" />
                    <div className="info">
                      <div className="profile">
                        <div className="txt">
                          <p className="name">dief568</p>
                          <span className="desc">1시간 전</span>
                        </div>
                        <div className="star_box">
                          <div className="graph" style={{width : '90%'}}></div>
                        </div>
                      </div>
                      <div className="desc_txt">
                        안녕하세요! 신입 개발자로 취업 준비중이신 건 부럽지만, 함께 응원해드릴게요! 1~3년차 정도의 준하는 실력이라면, 기본적인 프로그래밍 지식과 문제 해결 능력은 물론이고, 프로젝트를 진행하며 
                        경험한 문제와 그에 대한 해결 방법 등이 중요한 포인트일 것 같아요. 또한, 협업 능력과 소통 능력, 새로운 기술에 대한 관심과 학습 능력도 중요할 것 같아요. 조금 더 자세한 정보는 회사나 공고...
                      </div>
                    </div>
                  </div>
                  )
                })}
                </div>
              </div>
              )
            }
          </div>
        </div>
        <div className="btn_container center">
          <Link to="/front/Mentoring/MentoringPay" className="com_btn blue m">결제하기</Link>
        </div>
      </Modal>
    </>
  );
} 

export default Item;
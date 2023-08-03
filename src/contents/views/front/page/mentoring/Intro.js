/* eslint-disable */
import React, { useState } from 'react';
import "../../assets/scss/page/mentoring.scss";
//image
import imgIntro01 from '../../assets/img/img_intro01.png';
import imgIntro02 from '../../assets/img/img_intro02.png';
import imgIntro03 from '../../assets/img/img_intro03.png';
import imgIntro04 from '../../assets/img/img_intro04.png';
import imgIntro05 from '../../assets/img/img_intro05.png';
//component
import TopBanner from "./_TopBanner";
import BtnTop from '../../component/Inc/BtnTop';
import Modal from '../../component/Inc/Modal';
import PopApply from './_PopApply';

function MentorIntro() {  
  const [modalOpen, setModalOpen] = useState(false);
  const [modalApplyOpen, setModalApplyOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="com_mentoring">
      {/* long banner */}
      <TopBanner />
      {/* job list */}
      <section className="sec_intro com_bg">
        <div className="com_center_wrap">
          <div className="top_wrap">
            <div className="pg_tit_wrap">
              <h2 className="com_pg_tit">멘토링이란?</h2>
            </div>
          </div>
          <h3 className="intro_tit">
            멘토링을 통해 무엇을 얻을 수 있을까요?
          </h3>
          <ul className="intro_list">
            <li className="intro_item">
              <img src={imgIntro01} className="img" alt="엔지니어 네트워킹" />
              <p className="item_tit">
                엔지니어 네트워킹
              </p>
              <p className="desc">
                같은 분야에 종사하고 있는 
                선 후배와의 네트워킹을 통해
                커리어 성장에 도움이 돼요.
              </p>
            </li>
            <li className="intro_item">
              <img src={imgIntro02} className="img" alt="시간에 얽매이지 않는 멘토링" />
              <p className="item_tit">
                시간에 얽매이지 않는 멘토링
              </p>
              <p className="desc">
                직장 때문에 시간이 없다면
                질문과 게시판을 통해  편한 
                시간대에 멘토링을 시작해보세요.
              </p>
            </li>
            <li className="intro_item">
              <img src={imgIntro03} className="img" alt="간단한 프로세스" />
              <p className="item_tit">
                간단한 프로세스
              </p>
              <p className="desc">
                멘티는 멘토에게 
                간단한 프로세스를 통해
                멘토링을 경험 해볼 수 있어요.
              </p>
            </li>
            <li className="intro_item">
              <img src={imgIntro04} className="img" alt="지식 공유 수입" />
              <p className="item_tit">
                지식 공유 수입
              </p>
              <p className="desc">
                멘티들에게 배움의 기회를 
                제공하고, 뿌듯한 대가를 가져가세요.
              </p>
            </li>
            <li className="intro_item">
              <img src={imgIntro05} className="img" alt="멘토 추천서를 받을 수 있어요!" />
              <p className="item_tit">
                멘토 추천서를 받을 수 있어요!
              </p>
              <p className="desc">
                기업에 지원할 때 추천서 내용도 같이 전송돼요.
                전문성 향상과 추천서를 통해
                빠른 취업을 할 수 있어요!
              </p>
            </li>
          </ul>
          <h3 className="intro_tit">
            멘토링 프로세스
          </h3>
          <ul className="process_list">
            <li className="process_item">
              <div className="circle">
                <strong className="num">1</strong>
                <div className="txt_box">
                  <p className="desc">멘토 신청 및 등록</p>
                  <p className="item_desc">대표 이력서 제출 및 승인</p>
                </div>
              </div>
            </li>
            <li className="process_item">
              <div className="circle">
                <strong className="num">2</strong>
                <div className="txt_box">
                  <p className="desc">멘티 신청</p>
                </div>
              </div>
            </li>
            <li className="process_item">
              <div className="circle">
                <strong className="num">3</strong>
                <div className="txt_box">
                  <p className="desc">상호 협의</p>
                  <p className="item_desc">
                    멘토와 멘티가 멘토링 내용 방법 협의
                    협의가 안 될 경우 환불
                  </p>
                </div>
              </div>
            </li>
            <li className="process_item">
              <div className="circle">
                <strong className="num">4</strong>
                <div className="txt_box">
                  <p className="desc">멘토링 시작</p>
                  <p className="item_desc">협의된 내용으로 멘토링 진행</p>
                </div>
              </div>
            </li>
            <li className="process_item">
              <div className="circle">
                <strong className="num">5</strong>
                <div className="txt_box">
                  <p className="desc">추천서 작성</p>
                  <p className="item_desc">멘토가 멘티에게 추천서 작성</p>
                </div>
              </div>
            </li>
            <li className="process_item">
              <div className="circle">
                <strong className="num">6</strong>
                <div className="txt_box">
                  <p className="desc">멘토링 평가</p>
                </div>
              </div>
            </li>
          </ul>
          {/* buttons */}
          <div className="com_btn_wrap center">
            <button className="com_btn line l" onClick={() => history.back()}>
              목록으로
            </button>
            <button className="com_btn blue l" onClick={() => setModalApplyOpen(true)}>
              멘토 지원하기
            </button>
          </div>
        </div>
      </section>
      {/* top button */}
      <BtnTop />
      {/* Modal - 멘토 지원하기 */}
      <PopApply open={modalApplyOpen} close={() => setModalApplyOpen(false)}>
        <div className="btn_container">
          <button className="com_btn blue m" onClick={() => setModalOpen(true)}>제출하기</button>
        </div>
      </PopApply>
      
      {/* alert */}
      <Modal open={modalOpen} close={handleCloseModal} type="type_alert" >
        <div className="content_container scroll">
          <strong>이력서를 제출했습니다!</strong> <br />
          멘토심사에 걸리는 시간은 영업일 기준 <br />
          3일 이내 완료됩니다.<br />
          멘토 심사결과 여부는 알림을 통해 알려드립니다.
        </div>
        <div className="btn_container">
          <button className="com_btn line blue s" onClick={() => handleCloseModal()}>확인</button>
          <button className="com_btn blue s" onClick={() => handleCloseModal()}>취소</button>
        </div>
      </Modal>
    </main>
  );
}

export default MentorIntro;

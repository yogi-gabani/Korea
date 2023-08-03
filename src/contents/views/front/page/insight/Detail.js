import React, { useState } from 'react';
import VideoImage from '../../assets/img/img_video.png';
import ImgInsight01 from '../../assets/img/img_insight01.png';
import BtnTop from '../../component/Inc/BtnTop';
import Modal from '../../component/Inc/Modal';
import { Link } from 'react-router-dom';

function Detail() {
  const [paymentModal, setPaymentModal ] = useState(false);
  return (
    <main className="com_detail">
      <div className="com_center_wrap flex">
        <section className="sec_detail">
          <div className="title_wrap">
            <div className="heading_wrap">
              <div className="header">
                <h2 className="tit">자동차 설비에 관한 A~Z</h2>
                <span className="price">2,000P</span>
              </div>
              <div className="like_wrap">
                <span className="com_icon eye">1,254</span>
                <span className="com_icon like">20</span>
                <span className="com_icon comment">3</span>
                <span className="com_icon bell">신고</span>
              </div>
            </div>
            <div className="hashtags">
              <span className="hash">#디자인트렌드</span>
              <span className="hash">#메가 임팩트</span>
              <span className="hash">#비즈니스</span>
              <span className="hash">#국제 컨퍼런스</span>
              <span className="hash">#B2B 비즈니스</span>
            </div>
          </div>
          <div className="video_wrap">
            <img className="img" src={VideoImage} alt="동영상" />
            <p className="message">결제 후 시청하실 수 있습니다.</p>
          </div>
          <div className="button_wrap">
            <Link to={'/Insight/Pay'} className="com_btn blue payment">결제하기</Link>
          </div>
          <div className="description_wrap">
            <p>어떤 이야기를 하나요?</p>
            <p>자동차 설비에 관한 전반적인 내용을 다룹니다관련 지식이 전혀 없는 사람이라도 이해하기 쉬운 설명을 드립니다</p>
            <p>공유자 경력현재 자동차 설비 경력 12년이며, 삼성에 다니고 있습니다.</p>
          </div>
          <div className="comment_box_wrap">
            <div className="comment_input_box">
              <input type="text" placeholder='댓글 내용을 입력해주세요.' className="comment_input" />
              <button className="com_btn blue btn">등록</button>
            </div>
            <div className="comment_wrap">
              <div className="user">
                <p className="username">dief568 <span className="duration">1시간 전</span></p>
                <span className="like">20</span>
              </div>
              <p className="desc">안녕하세요! 신입 개발자로 취업 준비중이신 건 부럽지만, 함께 ! 1~3년차 정도의 준하는 실력이라면, 기본적인 프로그래밍 지식과 문제 해결 능력은 물론이고, 프로젝트를 진행하며 경험한 문제와 그에 대한 해결 방법</p>
            </div>
            <div className="comment_wrap reply">
              <div className="user">
                <p className="username">dief568 <span className="duration">1시간 전</span></p>
                <span className="like">20</span>
              </div>
              <p className="desc">안녕하세요! 신입 개발자로 취업 준비중이신 건 부럽지만, 함께 ! 1~3년차 정도의 준하는 실력이라면, 기본적인 프로그래밍 지식과 문제 해결 능력은 물론이고, 프로젝트를 진행하며 경험한 문제와 그에 대한 해결 방법</p>
            </div>
            <div className="comment_wrap">
              <div className="user">
                <p className="username">dief568 <span className="duration">1시간 전</span></p>
                <span className="like">20</span>
              </div>
              <p className="desc">안녕하세요! 신입 개발자로 취업 준비중이신 건 부럽지만, 함께 ! 1~3년차 정도의 준하는 실력이라면, 기본적인 프로그래밍 지식과 문제 해결 능력은 물론이고, 프로젝트를 진행하며 경험한 문제와 그에 대한 해결 방법</p>
            </div>
            <div className="comment_wrap">
              <div className="user">
                <p className="username">dief568 <span className="duration">1시간 전</span></p>
                <span className="like">20</span>
              </div>
              <p className="desc">안녕하세요! 신입 개발자로 취업 준비중이신 건 부럽지만, 함께 ! 1~3년차 정도의 준하는 실력이라면, 기본적인 프로그래밍 지식과 문제 해결 능력은 물론이고, 프로젝트를 진행하며 경험한 문제와 그에 대한 해결 방법</p>
            </div>
            <div className="comment_wrap">
              <div className="user">
                <p className="username">dief568 <span className="duration">1시간 전</span></p>
                <span className="like">20</span>
              </div>
              <p className="desc">안녕하세요! 신입 개발자로 취업 준비중이신 건 부럽지만, 함께 ! 1~3년차 정도의 준하는 실력이라면, 기본적인 프로그래밍 지식과 문제 해결 능력은 물론이고, 프로젝트를 진행하며 경험한 문제와 그에 대한 해결 방법</p>
            </div>
          </div>
        </section>
        <section className="sec_other">
          <div className="list">
            <div className="heading">다른 인사이트</div>
            <div className="content_wrap">
              <img src={ImgInsight01} alt="thumbnail" className="img" />
              <div className="description">
                <p className="title">자동차 설비분야의 엔지니어 멘토들에게 특급</p>
                <div className="username">dief568</div>
                <span className="details">좋아요 54 ㆍ 댓글 2 ㆍ 조회수 2</span>
              </div>
            </div>
            <div className="content_wrap">
              <img src={ImgInsight01} alt="thumbnail" className="img" />
              <div className="description">
                <p className="title">자동차 설비분야의 엔지니어 멘토들에게 특급</p>
                <div className="username">dief568</div>
                <span className="details">좋아요 54 ㆍ 댓글 2 ㆍ 조회수 2</span>
              </div>
            </div>
            <div className="content_wrap">
              <img src={ImgInsight01} alt="thumbnail" className="img" />
              <div className="description">
                <p className="title">자동차 설비분야의 엔지니어 멘토들에게 특급</p>
                <div className="username">dief568</div>
                <span className="details">좋아요 54 ㆍ 댓글 2 ㆍ 조회수 2</span>
              </div>
            </div>
            <div className="content_wrap">
              <img src={ImgInsight01} alt="thumbnail" className="img" />
              <div className="description">
                <p className="title">자동차 설비분야의 엔지니어 멘토들에게 특급</p>
                <div className="username">dief568</div>
                <span className="details">좋아요 54 ㆍ 댓글 2 ㆍ 조회수 2</span>
              </div>
            </div>
          </div>
          <button className="list_btn">인사이트 목록으로 </button>
        </section>
      </div>
      {/* top button */}
      <BtnTop />
      {/* modal */}
      <Modal open={paymentModal} close={() => setPaymentModal(false)} type="type_apply">
        <p className="message">신고가 완료되었습니다.</p>
        <button className="com_btn blue check" >확인</button>
      </Modal>
    </main>
  )
}

export default Detail;
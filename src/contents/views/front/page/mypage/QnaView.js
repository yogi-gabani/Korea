import React from 'react';
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';

function Chat() {
  return (
    <>
      <main className='com_mypage com_detail type_community p_qna_view'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="결제 콘텐츠 목록" MenuPayContents="active"/>
          <div className='container'>
            <section className="sec_detail">
              <div className="title_wrap">
                <div className="heading_wrap">
                  <div className="header">
                    <h2 className="tit">포트폴리오 첨부 방법</h2>
                    <div className="user"><span className="username">dief568</span><span className='date'>2022.10.26 14:00</span></div>
                  </div>
                  <ul className='like_wrap'>
                    <li className='action'><button className='com_btn xxs oval lightgray'>수정</button></li>
                    <li className='action'><button className='com_btn xxs oval lightgray'>삭제</button></li>
                  </ul>
                </div>
              </div>
              <div className="description_wrap">
                <p>어떤 이야기를 하나요?</p>
                <p>자동차 설비에 관한 전반적인 내용을 다룹니다관련 지식이 전혀 없는 사람이라도 이해하기 쉬운 설명을 드립니다</p>
                <p>공유자 경력현재 자동차 설비 경력 12년이며, 삼성에 다니고 있습니다.</p>
                <div className='file_area'>
                  <button className='com_btn_file'>오류내용.jpg 12KB</button>
                  <button className='com_btn_file'>오류내용.jpg 12KB</button>
                </div>
              </div>
              <div className="comment_box_wrap">
                <div className="comment_input_box">
                  <p className="comment">댓글 <span className="total">8</span></p>
                </div>
                <div className="comment_wrap">
                  <div className="user">
                    <p className="username">dief568 <span className="duration">2022.10.26 14:00</span></p>
                  </div>
                  <p className="desc">안녕하세요! 신입 개발자로 취업 준비중이신 건 부럽지만, 함께 ! 1~3년차 정도의 준하는 실력이라면, 기본적인 프로그래밍 지식과 문제 해결 능력은 물론이고, 프로젝트를 진행하며 경험한 문제와 그에 대한 해결 방법</p>
                  <div className='file'><button className='com_btn_file'>오류내용.JPG 12KB</button><button className='com_btn_file'>오류내용.JPG 12KB</button></div>
                </div>
                <div className="comment_wrap">
                  <div className="user">
                    <p className="username">dief568 <span className="duration">2022.10.26 14:00</span></p>
                  </div>
                  <p className="desc">안녕하세요! 신입 개발자로 취업 준비중이신 건 부럽지만, 함께 ! 1~3년차 정도의 준하는 실력이라면, 기본적인 프로그래밍 지식과 문제 해결 능력은 물론이고, 프로젝트를 진행하며 경험한 문제와 그에 대한 해결 방법</p>
                </div>
                <div className="comment_input_box">
                  <input type="text" placeholder='댓글 내용을 입력해주세요.' className="comment_input" />
                  <button className="com_btn blue btn">댓글작성</button>
                </div>
                <div className="comment_input_box">
                  <input type="text" placeholder='파일선택' className="comment_input" />
                  <button className="com_btn blue line btn">파일찾기</button>
                </div>
                <div className='comment_input_box file'>
                  <button className='com_btn_file'>오류내용.JPG 12KB</button>
                </div>
              </div>
              <div>

              </div>
            </section>
          </div>
        </div>
        {/* top button */}
        <BtnTop />
      </main>
    </>
  );
}

export default Chat;

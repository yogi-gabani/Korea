import React from 'react';
import { Link } from 'react-router-dom';
//css
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';

function Chat() {
  return (
    <>
      <main className='com_mypage p_qna_write'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="결제 콘텐츠 목록" MenuPayContents="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>질문과 답변 게시판</h2>
            <ul className='com_input_sec type_row'>
              <li className='field_box'>
                <span className="tit">제목</span>
                <div className='input_box'>
                  <input type="text" placeholder='제목을 입력해주세요.'/>
                </div>
              </li>
              <li className='field_box'>
                <span className="tit">내용</span>
                <div className='input_box'>
                  <textarea placeholder='본문 내용을 입력해주세요.'/>
                </div>
              </li>
              <li className='field_box'>
                <span className="tit">첨부 파일</span>
                <div className='input_box'>
                  <div className='input_wrap'>
                    <input type='text'/><button className='com_btn blue line s'>파일추가</button>
                  </div>
                  <p className='tip_field'>첨부 파일은 최대 3개, 30MB까지 등록 가능합니다.</p>
                </div>
              </li>
            </ul>
            <section className='com_btn_wrap center'>
              <button className='com_btn blue s '>질문 등록하기</button>
              <Link to="/front/Mypage/QnaList" className='com_btn blue s line '>취소</Link>
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

import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';

function Inquiry() {
  return (
    <>
      <main className='com_mypage p_inquiry'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="고객센터" MenuCs="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>고객센터</h2>
            <section className='com_pg_tab'>
              <Link to="/front/Mypage/Faq" className='tab'>자주 묻는 질문</Link>
              <Link to="/front/Mypage/Inquiry" className='tab active'>1:1 문의</Link>
            </section>
            <ul className='com_input_sec type_row'>
              <li className='field_box'>
                <span className="tit">제목<i className='icon_must'>*</i></span>
                <div className='input_box'>
                  <input type="text" placeholder='Ex: 수수료 환전, 회원정보 관련 등 질문의 제목을 입력해주세요.'/>
                </div>
              </li>
              <li className='field_box'>
                <span className="tit">설명<i className='icon_must'>*</i></span>
                <div className='input_box'>
                  <textarea placeholder='상세한 문의 사항을 작성해주세요. 답변일은 영업일 기준 3일 이내에 답변 드릴 수 있도록 노력하겠습니다.'/>
                </div>
              </li>
              <li className='field_box'>
                <span className="tit">연락처</span>
                <div className='input_box'>
                  <input type='text' placeholder='“-” 없이 번호만 입력'/>
                </div>
              </li>
              <li className='field_box'>
                <span className="tit">첨부 파일</span>
                <div className='input_box'>
                  <div className='input_wrap'>
                    <input type='text'/><button className='com_btn blue line s'>파일추가</button>
                  </div>
                </div>
              </li>
            </ul>
            <section className='com_tip_box'>
              <h3 className='tit'>개인정보 수집 및 이용에 대한 동의 내용</h3>
              ①개인정보 수집 항목: 이메일, 연락처<br/>
              ②수집목적: 고객식별, 문의 응대, 서비스 품질 향상<br/>
              ③보유 및 이용기간: 수집 목적이 달성되면 지체없이 모든 개인정보를 파기합니다. <br/>
              단, 관계법령에서 일정 기간 정보의 보관을 규정한 경우에 한해 분리 보관 후 파기합니다.<br/><br/>
              *위 동의는 거부할 수 있으며, 거부 시 해당 문의를 처리할 수 없습니다.
            </section>
            <section className='sec_agree'>
              <input type="checkbox" className="com_chk" id='agree01'/><label htmlFor='agree01'>위 약관에 동의합니다.</label>
            </section>
            <section className='com_btn_wrap center'>
              <button className='com_btn blue s'>제출</button>
              <button className='com_btn blue line s'>취소</button>
            </section>
          </div>
        </div>
        {/* top button */}
        <BtnTop />
      </main>
    </>
  );
}

export default Inquiry;

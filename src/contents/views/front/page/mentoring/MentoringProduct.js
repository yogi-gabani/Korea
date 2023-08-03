/* eslint-disable */
import React, { useState } from 'react';
import "../../assets/scss/page/mentoring.scss";
//image
import imgMentor03 from "../../assets/img/img_mentor03.png"
//component
import BtnTop from '../../component/Inc/BtnTop';
import PopAgree from './_PopAgree';
import Upload from '../../component/Inc/Upload';

function MentoringProduct() {
  const [modalAgreeOpen, setModalAgreeOpen] = useState(false);
  return (
    <main className="com_mentoring com_bg p_product">
      <h2 className="pg_tit">멘토 상품 등록</h2>
      <div className="box">
        <ul className='com_input_sec'>
          <li className='tit_field'>멘토링 상품명</li>
          <li className='input_field'><input type='text' placeholder='Ex: 그동안 놓치고 있던 회로설계' className='input'/></li>
          <li className='tit_field'>카테고리</li>
          <li className='input_field'>
            <select className="select">
              <option value="자동차 설비">자동차 설비</option>
            </select>
          </li>
          <li className='tit_field'>커리어 히스토리</li>
          <li className='input_field'><input type='text' placeholder='Ex : 경기 1000명 규모 대기업' className='input'/></li>
          <li className='tit_field'>직무 및 경력</li>
          <li className='input_field'>
            <div className='input_wrap'>
              <textarea className='textarea' placeholder='전자 엔지니어 경력 12년
전기 엔지니어 경력 8년
자동차 설비 엔지니어 경력 16년'/>
            </div>
          </li>
          <li className='tit_field flex'>화상미팅은 월 몇 회 가능하신가요?
            <span className="sub">횟수는 30회 이하만 입력 가능합니다.</span>
          </li>
          <li className='input_field'>
            <select className="select">
              <option value="1회">1회</option>
              <option value="2회">2회</option>
            </select>
          </li>
          <li className='tit_field'>질문과 답변 게시판 개설 시 몇 시간 이내에 답변할 수 있으신가요?</li>
          <li className='input_field'>
            <select className="select">
              <option value="4시간 이내에 답변">4시간 이내에 답변</option>
            </select>
          </li>
          <li className='tit_field'>멘토링 서비스 설명</li>
          <li className='input_field'>
            <div className='input_wrap'>
              <textarea className='textarea' placeholder='전자 · 전기 회로 설계 분야 13년차 직장인입니다.
질문할 내용과 막히는 부분들을 위주로 리스트를 가져오시면 상세히 답변드려요'/>
            </div>
          </li>
        </ul>
        <div className="com_attach_section">
          <p className="img_box">
            <img src={imgMentor03} className="img_upload" alt="upload image" />
            <button type="button" className="btn_del" onclick={() => {}}></button>
          </p>
          <p className="img_box">
            <img src={imgMentor03} className="img_upload" alt="upload image" />
            <button type="button" className="btn_del" onclick={() => {}}></button>
          </p>
          <p className="img_box">
            <img src={imgMentor03} className="img_upload" alt="upload image" />
            <button type="button" className="btn_del" onclick={() => {}}></button>
          </p>
          <Upload />
        </div>
        <section className='com_agree_section'>
          <ul className='list'>
            <li className='item'>
              <div>
                <input type="checkbox" className="com_chk" id='agree01'/><label htmlFor='agree01'>개인정보 제3자 제공 동의합니다.<span className='txt_required'>(필수)</span></label>
              </div>
              <button className='com_btn txt' onClick={() => setModalAgreeOpen(true)}>자세히</button>
            </li>
            <li className='item'>
              <div>
                <input type="checkbox" className="com_chk" id='agree02'/><label htmlFor='agree02'>판매자 이용 약관에 동의합니다.<span className='txt_required'>(필수)</span></label>
              </div>
              <button className='com_btn txt' onClick={() => setModalAgreeOpen(true)}>자세히</button>
            </li>
            <li className='item'>
              <div>
                <input type="checkbox" className="com_chk" id='agree03'/><label htmlFor='agree03'>중도 포기 시 수익 미지급 동의<span className='txt_required'>(필수)</span></label>
              </div>
              <button className='com_btn txt' onClick={() => setModalAgreeOpen(true)}>자세히</button>
            </li>
          </ul>
        </section>
        <section className='com_btn_wrap center'>
          <button className='com_btn blue m'>상품 등록</button>
        </section>
      </div>
      {/* top button */}
      <BtnTop />

      {/*약관내용 팝업*/}
      <PopAgree open={modalAgreeOpen} close={() => setModalAgreeOpen(false)}/>
    </main>
  );
}

export default MentoringProduct;

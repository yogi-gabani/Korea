/* eslint-disable */
import React, { useState, useCallback } from 'react';
import "../../assets/scss/page/member.scss";
//image
import imgMentor03 from "../../assets/img/img_mentor03.png"
//component
import BtnTop from '../../component/Inc/BtnTop';
import Upload from '../../component/Inc/Upload';
import Lnb from './_Lnb';
import PopResetPw from './_PopResetPw';

function Info() {  
  const [modalOpen, setModalOpen] = useState(false);
  const [tabState, setTabState] = useState(0);
  const tab = [
    { text: "회사정보", value: 0 },
    { text: "담당자 정보", value: 1 }
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
    <main className='com_mypage com_company p_company_info'>
      <div className='com_center_wrap'>
        
      <Lnb PageTitle="기업정보" MenuExchange="active"/>
        <div className='container'>
          <h2 className='com_pg_tit'>기업정보</h2>
          <div className="com_pg_tab">
            {renderTab()}
          </div>
          
          {tabState === 0 && (
            <div className="tab_content">
              <ul className='com_input_sec type_row'>
                <li className='field_box'>
                  <span className="tit">회사명</span>
                  <div className='input_box'>
                    <input type='text' value='좋은생각' className='input s' disabled />
                  </div>
                </li>
                <li className='field_box'>
                  <span className="tit">사업자등록번호</span>
                  <div className='input_box'>
                    <input type='text' value='128-11-55212' className='input s' disabled />
                  </div>
                </li>
                <li className='field_box'>
                  <span className="tit">사업자등록증 첨부</span>
                  <div className='input_box'>
                    <input type='text' value='좋은생각' className='input s' disabled />
                  </div>
                </li>
                <li className='field_box'>
                  <span className="tit">대표자명</span>
                  <div className='input_box'>
                    <input type='text' value='좋은생각' placeholder='좋은생각' className='input s' disabled />
                  </div>
                </li>
                <li className='field_box'>
                  <span className="tit">회사주소</span>
                  <div className='input_box'>
                    <div className="input_wrap">
                      <input type='text' placeholder='서울특별시 강남구 봉은사로 211' className='input'/>
                      <button className="com_btn line s">주소찾기</button>
                    </div>
                    <input type='text' placeholder='10층 awesome' className='input'/>
                  </div>
                </li>
                <li className='field_box'>
                  <span className="tit">회사소개</span>
                  <div className='input_box'>
                    <textarea className='textarea' placeholder='소프트웨어 테스팅 자동화 분야에서 국내 유일하게 독자적인 기술을 개발한 강소기업으로,
                      Mission-Critic(고신뢰) 산업분야의 소프트웨어 안전성 검증을 위한 테스트 자동화 도구 및 검증 서비스를 제공하는
                      소프트웨어 품질 전문기업입니다. 소프트웨어로 더 안전한 세상을 만들고자 하는 비전 아래 사회적 책임을 가지고 있습니다.'>
                    </textarea>
                  </div>
                </li>
                <li className="field_box">
                  <span className="tit"></span>
                  <div className='input_box'>
                    <div className="com_attach_section">
                      <p className="img_box">
                        <img src={imgMentor03} className="img_upload" alt="upload image" />
                        <button type="button" className="btn_del" onClick={() => {}}></button>
                      </p>
                      <p className="img_box">
                        <img src={imgMentor03} className="img_upload" alt="upload image" />
                        <button type="button" className="btn_del" onClick={() => {}}></button>
                      </p>
                      <p className="img_box">
                        <img src={imgMentor03} className="img_upload" alt="upload image" />
                        <button type="button" className="btn_del" onClick={() => {}}></button>
                      </p>
                      <Upload />
                    </div>
                  </div>
                </li>
              </ul>
              <div className="com_btn_wrap center">
                <button className="com_btn blue s">수정 완료</button>
                <button className="com_btn line blue s">취소</button>
              </div>
            </div>
          ) || (
            <div className="tab_content">
              <ul className='com_input_sec type_row'>
                <li className='field_box'>
                  <span className="tit">아이디</span>
                  <div className='input_box'>
                    <input type='text' className='input s' disabled />
                  </div>
                </li>
                <li className='field_box'>
                  <span className="tit">비밀번호 변경</span>
                  <div className='input_box'>
                    <button className="com_btn line s btn_resetPw" onClick={() => {setModalOpen(true)}}>비밀번호 변경</button>
                  </div>
                </li>
                <li className='field_box'>
                  <span className="tit">이름</span>
                  <div className='input_box'>
                    <input type='text' placeholder='실명을 입력해주세요' className='input s' />
                  </div>
                </li>
                <li className='field_box'>
                  <span className="tit">이메일</span>
                  <div className='input_box'>
                    <div className="input_wrap email">
                      <input type='text' className='input' />
                      <span className="icon">@</span>
                      <input type='text' className='input' />
                      <select className="select">
                        <option value="직접입력">직접입력</option>
                        <option value="naver.com">naver.com</option>
                        <option value="gmail.com">gmail.com</option>
                      </select>
                    </div>
                  </div>
                </li>
                <li className='field_box'>
                  <span className="tit">휴대폰 번호</span>
                  <div className='input_box'>
                    <div className="input_wrap s">
                      <input type='text' placeholder='- 없이 숫자를 입력해주세요' className='input'/>
                      <button className="com_btn line s">휴대폰 인증</button>
                    </div>
                  </div>
                </li>
                <li className='field_box'>
                  <span className="tit">부서</span>
                  <div className='input_box'>
                    <input type='text' placeholder='기획팀' className='input s' />
                  </div>
                </li>
              </ul>
              <div className="com_btn_wrap center">
                <button className="com_btn blue s">수정 완료</button>
                <button className="com_btn line blue s">취소</button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* top button */}
      <BtnTop />
      <PopResetPw open={modalOpen} close={() => setModalOpen(false)} />
    </main>
  );
}

export default Info;

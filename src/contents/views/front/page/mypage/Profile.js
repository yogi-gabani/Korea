
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
import PopResetPw from './_PopResetPw';
function Profile() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main className='com_mypage p_profile'>
      <div className='com_center_wrap'>
        <Lnb PageTitle="내 정보 수정"/>
        <div className='container'>
          <h2 className='com_pg_tit'>내 정보 수정</h2>
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
                <button className="com_btn line s" onClick={() => {setModalOpen(true)}}>비밀번호 변경</button>
              </div>
            </li>
            <li className='field_box'>
              <span className="tit">닉네임</span>
              <div className='input_box'>
                <div className="input_wrap s">
                  <input type='text' placeholder='닉네임을 입력해주세요' className='input s' />
                  <button className="com_btn line s">중복 확인</button>
                </div>
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
              <span className="tit">소속</span>
              <div className='input_box'>
                <input type='text' placeholder='기획팀' className='input s' />
              </div>
            </li>
          </ul>
          <div className="btn_wrap">
            <div className="com_btn_wrap center">
              <button className="com_btn blue s">수정 완료</button>
              <button className="com_btn line blue s">취소</button>
            </div>
            <Link to="/Mypage/Leave" className="btn_leave">회원탈퇴</Link>
          </div>
        </div>
      </div>
      {/* top button */}
      <BtnTop />

      <PopResetPw open={modalOpen} close={() => setModalOpen(false)}/>
    </main>
  );
}

export default Profile;

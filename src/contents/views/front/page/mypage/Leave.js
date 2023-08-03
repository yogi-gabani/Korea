
import React, {useState} from 'react';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
import PopLeave from './_PopLeave';

function Leave() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main className='com_mypage p_leave'>
      <div className='com_center_wrap'>
        <Lnb PageTitle="회원탈퇴"/>
        <div className='container'>
          <h2 className='com_pg_tit'>회원탈퇴</h2>

          <div className="sec_notice">
            <ul className="notice_list">
              <li className="notice_item"><span className="dot" />회원탈퇴 후 개인정보 및 활동내역은 개인정보처리방침에 따라 삭제됩니다.</li>
              <li className="notice_item"><span className="dot" />삭제된 정보는 복구가 불가능합니다.</li>
              <li className="notice_item"><span className="dot" />같은 SNS아이디로 재가입시 신규회원으로 등록됩니다.</li>
              <li className="notice_item"><span className="dot" />회원 탈퇴 시 남은 포인트는 보상하지 않으니, 탈퇴 전에 환전하시기 바랍니다.</li>
            </ul>
          </div>
          <ul className='com_input_sec type_row'>
            <li className='field_box'>
              <span className="tit">탈퇴 사유</span>
              <div className='input_box'>
                <textarea type='textarea' placeholder="회원탈퇴 사유를 입력해주세요. (500자 이내)" className='textarea s' />
              </div>
            </li>
            <li className='field_box'>
              <span className="tit">비밀번호</span>
              <div className='input_box'>
                <input type="text" className="input s" />
              </div>
            </li>
          </ul>
          <div className="com_btn_wrap center">
            <button className="com_btn blue s" onClick={() => setModalOpen(true)}>회원탈퇴</button>
            <button className="com_btn line blue s">취소</button>
          </div>
        </div>
      </div>
      {/* top button */}
      <BtnTop />

      {/*회원탈퇴 팝업*/}
      <PopLeave open={modalOpen} close={() => setModalOpen(false)}/>
    </main>
  );
}

export default Leave;

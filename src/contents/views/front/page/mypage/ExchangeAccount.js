
import React from 'react';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
function ExchangeAccount() {
  return (
    <main className='com_mypage p_exchange_account'>
      <div className='com_center_wrap'>
        <Lnb PageTitle="환전 계좌 관리"/>
        <div className='container'>
          <h2 className='com_pg_tit'>환전 계좌 관리</h2>
          <p className='sub_desc'>가입자와 예금주가 동일한 계좌를 입력해주세요.</p>
          <ul className='com_input_sec type_row'>
            <li className='field_box'>
              <span className="tit">은행명</span>
              <div className='input_box'>
                <select className="select s">
                  <option value="선택">선택</option>
                  <option value="은행">은행</option>
                  <option value="우리은행">우리은행</option>
                </select>
              </div>
            </li>
            <li className='field_box'>
              <span className="tit">계좌번호</span>
              <div className='input_box'>
                <input type='text' placeholder=' - 없이 계좌번호를 입력해주세요' className='input' />
              </div>
            </li>
            <li className='field_box'>
              <span className="tit">예금주</span>
              <div className='input_box'>
                <input type='text' placeholder='예금주를 입력해주세요' className='input s' />
              </div>
            </li>
          </ul>
          
          <div className="com_btn_wrap center">
            <button className="com_btn bg blue m">수정완료</button>
            <button className="com_btn line blue m">취소</button>
          </div>
        </div>
      </div>
      {/* top button */}
      <BtnTop />
    </main>
  );
}

export default ExchangeAccount;

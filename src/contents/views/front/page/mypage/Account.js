import React  from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';

function Account() {
  return (
    <>
      <main className='com_mypage p_account'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="환전내역" MenuExchange="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>환전계좌 관리</h2>
            <ul className='com_input_sec type_row'>
              <li className='field_box'>
                <span className="tit">은행명</span>
                <div className='input_box'>
                  <select className='select'>
                    <option>선택</option>
                  </select>
                </div>
              </li>
              <li className='field_box'>
                <span className="tit">계좌번호</span>
                <div className='input_box'>
                  <input type='text' placeholder="' - ' 없이 계좌번호를 입력해주세요" className='input'/>
                </div>
              </li>
              <li className='field_box'>
                <span className="tit">예금주</span>
                <div className='input_box'>
                  <input type='text' placeholder='예금주를 입력해주세요' className='input' />
                </div>
              </li>
            </ul>
            <section className='com_btn_wrap center'>
              <Link to="/front/Mypage/ExchangeApplication" className='com_btn blue s'>수정완료</Link>
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

export default Account;

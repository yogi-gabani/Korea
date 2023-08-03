
import React from 'react';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
function PointCharge() {
  return (
    <main className='com_mypage p_point_charge'>
      <div className='com_center_wrap'>
        <Lnb PageTitle="포인트 충전"/>
        <div className='container'>
          <h2 className='com_pg_tit'>포인트 충전</h2>
          <p className='sub_desc'>포인트를 충전하시면 다양한 서비스를 이용하실 수 있습니다.</p>
          <div className="point_wrap">
            <span className="tit">충전할 포인트</span>
            <ul className="list">
              <li className="item">
                <input type="radio" className="com_chk" name="point" id='point01'/>
                <label htmlFor='point01'>1,000P</label>
              </li>
              <li className="item">
                <input type="radio" className="com_chk" name="point" id='point02'/>
                <label htmlFor='point02'>5,000P</label>
              </li>
              <li className="item">
                <input type="radio" className="com_chk" name="point" id='point03'/>
                <label htmlFor='point03'>10,000P</label>
              </li>
              <li className="item">
                <input type="radio" className="com_chk" name="point" id='point04'/>
                <label htmlFor='point04'>20,000P</label>
              </li>
              <li className="item">
                <input type="radio" className="com_chk" name="point" id='point05'/>
                <label htmlFor='point05'>50,000P</label>
              </li>
              <li className="item">
                <input type="radio" className="com_chk" name="point" id='point06'/>
                <label htmlFor='point06'>직접입력</label>
                <input type="text" className="input s" />P
              </li>
            </ul>
          </div>
          <div className="sec_notice">
            <ul className="notice_list">
              <li className="notice_item"><span className="dot" />구매금액에서 부가세를 제외한 금액만큼 포인트가 충전되며,이벤트 포인트는 구매 포인트와 별도로 적립됩니다.</li>
              <li className="notice_item"><span className="dot" />환불은 구매일로부터 7일 이내 포인트를 사용하지 않았을 경우 전액환불만 가능하며,포인트 충전 후 일부라도 포인트를 사용하면 포인트 환불이 불가능합니다.</li>
            </ul>
          </div>
          <div className='agree_chk_wrap'>
            <input type="checkbox" className="com_chk" id='agree01'/>
            <label htmlFor='agree01'>상기 내역을 확인하였고, 결제진행에 동의합니다.</label>
          </div>
          <div className="com_btn_wrap center">
            <button className="com_btn bg blue m">결제하기</button>
            <button className="com_btn line blue m">취소</button>
          </div>
        </div>
      </div>
      {/* top button */}
      <BtnTop />
    </main>
  );
}

export default PointCharge;

import React from 'react';
import Modal from '../../component/Inc/Modal';

function PopApply(props) {
  const { open, close } = props;
  return (
    <div className="p_modal modal_apply">
      {/* modal */}
      <Modal open={open} close={close} type="type_apply">
        <h2 className='pop_tit'>필터</h2>
        <div className="content_container scroll type_review">
          <div className="info_wrap">
            <div className="box">
              <ul className="rule_list">
                <li className="rule">
                  인사이트 공유자 신청을 하기 위해서는 인증된 경력이 필요합니다.
                </li>
                <li className="rule">
                등록된 이력서 제출 후 관리자 승인을 통해 영업일 기준2~3일 내에 인사이트 공유 권한을 드립니다.
                </li>
              </ul>
            </div>
            <div className="box">
              <p className="input_tit">이력서 선택</p>
              <ul className="list scroll">
                <li className="item">
                  <input type="radio" name="rate" id="rate5" className="com_chk"/><label htmlFor='rate5'><span className="sel_tit">홍길동 엔지니어 경력12년 이력서</span></label>
                </li>
                <li className="item">
                  <input type="radio" name="rate" id="rate4" className="com_chk"/><label htmlFor='rate4'><span className="sel_tit">홍길동 엔지니어 경력12년 이력서</span></label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="btn_container">
          <button className="com_btn blue m BtnPopClose" onClick={close}>제출하기</button>
        </div>
      </Modal>
    </div>
  )
}

export default PopApply;
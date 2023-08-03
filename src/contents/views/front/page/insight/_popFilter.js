import React from 'react';
import Modal from '../../component/Inc/Modal';

function PopFilter(props) {
  const { open, close } = props;
  return (
    <div className="p_modal modal_filter">
      {/* modal */}
      <Modal open={open} close={close} type="type_apply">
        <h2 className='pop_tit'>지원하기</h2>
        <div className="content_container scroll type_review">
          <div className="info_wrap">
            <div className="box">
              <p className="input_tit first">유료/무료</p>
              <ul className="list">
                <li className="item active">
                  <input type="radio" name="rate" id="rate5" className=""/><label htmlFor='rate5'>전체</label>
                </li>
                <li className="item">
                  <input type="radio" name="rate" id="rate4" className=""/><label htmlFor='rate4'>유료</label>
                </li>
                <li className="item">
                  <input type="radio" name="rate" id="rate4" className=""/><label htmlFor='rate4'>무료</label>
                </li>
              </ul>
            </div>
            <div className="box">
              <p className="input_tit">파일첨부</p>
              <ul className="list">
                <li className="item active">
                  <input type="radio" name="rate" id="rate5" className=""/><label className='label' htmlFor='rate5'>취업/이직</label>
                </li>
                <li className="item">
                  <input type="radio" name="rate" id="rate4" className=""/><label className='label' htmlFor='rate4'>커리어 상승</label>
                </li>
                <li className="item">
                  <input type="radio" name="rate" id="rate4" className=""/><label className='label' htmlFor='rate4'>조직문화</label>
                </li>
                <li className="item">
                  <input type="radio" name="rate" id="rate4" className=""/><label className='label' htmlFor='rate4'>조직문화</label>
                </li>
                <li className="item">
                  <input type="radio" name="rate" id="rate4" className=""/><label className='label' htmlFor='rate4'>설계 구조</label>
                </li>
                <li className="item">
                  <input type="radio" name="rate" id="rate4" className=""/><label className='label' htmlFor='rate4'>커리어 고민</label>
                </li>
                <li className="item">
                  <input type="radio" name="rate" id="rate4" className=""/><label className='label' htmlFor='rate4'>회사생활</label>
                </li>
                <li className="item">
                  <input type="radio" name="rate" id="rate4" className=""/><label className='label' htmlFor='rate4'>리더십</label>
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

export default PopFilter;
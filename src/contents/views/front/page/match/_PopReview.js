import React from 'react';
import Modal from '../../component/Inc/Modal';

function PopReview(props) {
  const { open, close } = props;
  return (
    <Modal open={open} close={close} type="pop_review">
      <h2 className="pop_tit type_center">매칭된 기업은 어떠셨나요?</h2>
      <div className="content_container scroll ">
        <p className="notice">내 성향과 더 잘 맞는 기업을 찾기 위해 <br />
        매칭된 기업과 얼마나 잘 맞았는지 평가해주세요.</p>
        <ul className="list">
          <li className="item">
            <input type="radio" name="rate" id="rate5" className="com_chk circle"/><label htmlFor='rate5'>만족</label>
          </li>
          <li className="item">
            <input type="radio" name="rate" id="rate4" className="com_chk circle"/><label htmlFor='rate4'>약간 만족</label>
          </li>
          <li className="item">
            <input type="radio" name="rate" id="rate3" className="com_chk circle"/><label htmlFor='rate3'>보통</label>
          </li>
          <li className="item">
            <input type="radio" name="rate" id="rate2" className="com_chk circle"/><label htmlFor='rate2'>약간 불만족</label>
          </li>
          <li className="item">
            <input type="radio" name="rate" id="rate1" className="com_chk circle"/><label htmlFor='rate1'>불만족</label>
          </li>
        </ul>
      </div>
      <div className="btn_container">
        <button className="com_btn blue m" onClick={close}>확인</button>
      </div>
    </Modal>
  )
}

export default PopReview;
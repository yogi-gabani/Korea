import React from 'react';
import "../../assets/scss/page/mypage.scss";
import Modal from '../../component/Inc/Modal';

function Refund(props) {
  const { open, close } = props;
  return (
    <>
      <Modal open={open} close={close} popSize="s">
        <section className='pop_tit'>환불하기</section>
        <div className="content_container scroll">
          <ul className='com_input_sec'>
            <li className='tit_field'>취소 사유를 작성해주세요.</li>
            <li className='input_field'>
              <textarea />
            </li>
          </ul>
        </div>
        <section className='btn_container'>
          <button className="com_btn blue s" >확인</button>
          <button className="com_btn line blue s"  onClick={close}>취소</button>
        </section>
      </Modal>
    </>
  );
}

export default Refund;

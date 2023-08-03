import React from 'react';
import "../../assets/scss/page/mypage.scss";
import Modal from '../../component/Inc/Modal';

function PopLeave(props) {
  const { open, close } = props;
  return (
    <Modal open={open} close={close} popSize="s" type="type_alert" >
      <div className="content_container scroll">
        회원탈퇴를 하시겠습니까?
        <section className='com_btn_wrap'>
          <button className="com_btn blue s">예</button>
          <button className="com_btn line blue s" onClick={close}>아니오</button>
        </section>
      </div>
    </Modal>
  );
}

export default PopLeave;

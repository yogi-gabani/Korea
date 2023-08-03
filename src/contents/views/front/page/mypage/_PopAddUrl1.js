import React from 'react';
import Modal from '../../component/Inc/Modal';

function PopAddUrl(props) {
  const { open, close } = props;
  return (
    <Modal open={open} close={close} type="pop_add_url lg">
      <h2 className="pop_tit type_center">URL 추가</h2>
      <div className="content_container">
        <div className="box">
          <input type="text" value='http://' className="input" />
        </div>
        <section className='com_btn_wrap'>
          <button className="com_btn blue s">등록</button>
          <button className="com_btn line blue s" onClick={close}>취소</button>
        </section>
      </div>
    </Modal>
  )
}

export default PopAddUrl;
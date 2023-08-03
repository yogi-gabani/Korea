import React from 'react';
import Modal from '../../component/Inc/Modal';

function PopDesiredJob(props) {
  const { open, close } = props;
  return (
    <Modal open={open} close={close} type="pop_desired_job">
      <h2 className="pop_tit type_center">희망근무지 추가</h2>
      <div className="content_container">
        <div className="box">
          <select name="" id="">
            <option value="-1">전기</option>
          </select>
          <select name="" id="">
            <option value="-1">전기 설비</option>
          </select>
        </div>
        <section className='com_btn_wrap'>
          <button className="com_btn blue s">등록</button>
          <button className="com_btn line blue s" onClick={close}>취소</button>
        </section>
      </div>
    </Modal>
  )
}

export default PopDesiredJob;
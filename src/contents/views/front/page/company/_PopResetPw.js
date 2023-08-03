import React from 'react';
import Modal from '../../component/Inc/Modal';

function PopResetPw(props) {
  const { open, close } = props;
  return (
    <Modal open={open} close={close} type="type_alert">
      <div className="content_container scroll">
        <strong className='pop_sub_tit'>비밀번호 변경</strong>
        <ul className='com_input_sec'>
          <li className='input_field'>
            <input type='password' placeholder='현재 비밀번호를 입력해주세요'/>
          </li>
          <li className='input_field'>
            <input type='password' placeholder='새 비밀번호를 입력해주세요'/>
          </li>
          <li className='input_field'>
            <input type='password' placeholder='새 비밀번호를 한번 더 입력해주세요'/>
          </li>
        </ul>
        <section className='com_btn_wrap'>
          <button className="com_btn blue s">변경</button>
          <button className="com_btn line blue s" onClick={close}>취소</button>
        </section>
      </div>
    </Modal>
  )
}

export default PopResetPw;
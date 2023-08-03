import React from 'react';
import Modal from '../../component/Inc/Modal';

function PopJobWord(props) {
  const { open, close } = props;
  return (
    <Modal open={open} close={close} type="pop_recruit">
      <h2 className="pop_tit type_center">공고별 문구</h2>
      <div className="content_container scroll ">
        <ul className='select_list'>
          <li className='select_item'>
            <input type="radio" name="job_word" id="job1" className="com_chk rdo_select"/><label htmlFor='job1'><span className="sel_tit">설비공고</span></label>
          </li>
          <li className='select_item'>
            <input type="radio" name="job_word" id="job2" className="com_chk rdo_select"/><label htmlFor='job2'><span className="sel_tit">엔지니어 공고</span></label>
          </li>
          <li className='select_item'>
            <input type="radio" name="job_word" id="job3" className="com_chk rdo_select"/><label htmlFor='job3'><span className="sel_tit">도면 설계 공고</span></label>
          </li>
        </ul>
      </div>
      <div className="btn_container">
        <button className="com_btn blue s">문구 선택</button>
        <button className="com_btn line blue s" onClick={close}>취소</button>
      </div>
    </Modal>
  )
}

export default PopJobWord;
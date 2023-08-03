import React from 'react';
import Modal from '../../component/Inc/Modal';

function PopResume(props) {
  const { open, close } = props;
  return (
    <Modal open={open} close={close} type="pop_resume">
      <h2 className="pop_tit type_center">이력서 완성도란?</h2>
      <p className="text_blue">각 항목별 정보를 채우면 이력서의완성도가 올라갑니다.</p>
      <p>완성도가 올라갈수록 매칭률이 올라가고원하는 기업을 찾을 확률이 높아집니다!</p>
      <div className="content_container">
        <ul className='select_list'>
          <li className='select_item'>
            <input type="radio" name="job_word" id="job1" className="checkbox"/><label htmlFor='job1'><span className="text_blue">ㆍ</span> 인적사항 10%</label>
          </li>
          <li className='select_item'>
            <input type="radio" name="job_word" id="job2" className="checkbox"/><label htmlFor='job2'><span className="text_blue">ㆍ</span>학력 10%</label>
          </li>
          <li className='select_item'>
            <input type="radio" name="job_word" id="job3" className="checkbox"/><label htmlFor='job3'><span className="text_blue">ㆍ</span>경력 10%</label>
          </li>
          <li className='select_item'>
            <input type="radio" name="job_word" id="job3" className="checkbox"/><label htmlFor='job3'><span className="text_blue">ㆍ</span>자기소개 10%</label>
          </li>
          <li className='select_item'>
            <input type="radio" name="job_word" id="job3" className="checkbox"/><label htmlFor='job3'><span className="text_blue">ㆍ</span>나의 성향 50%</label>
          </li>
        </ul>
      </div>
    </Modal>
  )
}

export default PopResume;
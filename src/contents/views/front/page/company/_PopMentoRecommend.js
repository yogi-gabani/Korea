import React from 'react';
import Modal from '../../component/Inc/Modal';

function PopMentoRecommend(props) {
  const { open, close } = props;
  return (
    <Modal open={open} close={close} type="pop_recruit">
      <h2 className="pop_tit type_center">멘토 추천서</h2>
      <div className="content_container scroll ">
        <ul className='com_input_sec'>
          <li className='tit_field'>제목</li>
          <li className='input_field'>
            <input type='text' placeholder='추천서 제목 영역입니다.' className='input'/>
          </li>
          <li className='tit_field'>멘티가 우수한 점</li>
          <li className='input_field'>
            <textarea type='text' placeholder='질문을 할 때 정리된 질문과 요점을 잘 알아듣는 부분이 저도 배워야할 점이라고 생각할 만큼 이해력도 좋고 창의력도 좋았습니다.' className='textarea'/>
          </li>
        </ul>
      </div>
      <div className="btn_container">
        <button className="com_btn blue s">확인</button>
        <button className="com_btn line blue s" onClick={close}>취소</button>
      </div>
    </Modal>
  )
}

export default PopMentoRecommend;
import React, { useState } from 'react';
import Modal from '../../component/Inc/Modal';

function PopDesiredWork(props) {
  const { open, close } = props;
  const categories1 = ['서울', '경기', '인천', '대전', '세종', '충남', '충북', '전남', '전북', '대구'];
  const categories2 = ['전체', '강남구', '강동구', '강서구', '강북구', '관악구', '광진구'];
  const [currentCategory1, setCurrentCategory1] = useState(categories1[0]);
  const [currentCategory2, setCurrentCategory2] = useState(categories2[0]);
  return (
    <Modal open={open} close={close} type="pop_desired_work">
      <h2 className="pop_tit type_center">희망근무지 추가</h2>
      <div className="content_container">
        <ul className="list">
          {categories1.map((category, index) => (<li key={index} onClick={() => setCurrentCategory1(category)} className={category === currentCategory1 ? "item active" : "item"}>{category}</li>))}
        </ul>
        <ul className="list">
          {categories2.map((category, index) => (<li key={index} onClick={() => setCurrentCategory2(category)} className={category === currentCategory2 ? "item active" : "item"}>{category}</li>))}
        </ul>
        <section className='com_btn_wrap'>
          <button className="com_btn blue s">등록</button>
          <button className="com_btn line blue s" onClick={close}>취소</button>
        </section>
      </div>
    </Modal>
  )
}

export default PopDesiredWork;
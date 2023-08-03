import React, { useState } from 'react';
import Modal from '../../component/Inc/Modal';

function PopCategory(props) {
  const { open, close } = props;
  const categories = ['노무', '회사생활', '취업/이직', '인간관계', '대기업', '중기업', '소기업', '리더십'];
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div className="p_modal modal_category">
      {/* modal */}
      <Modal open={open} close={close} type="type_apply">
        <h2 className='pop_tit'>카테고리</h2>
        <div className="content_container type_review">
          <div className="info_wrap">
            <div className="box">
              <ul className="list">
                {categories.map((category, index) => (<li key={index} onClick={() => setCurrentCategory(category)} className={category === currentCategory ? "item active" : "item"}>{category}</li>))}
              </ul>
            </div>
          </div>
        </div>
        <div className="btn_container">
          <button className="com_btn blue m BtnPopClose" onClick={close}>적용하기</button>
        </div>
      </Modal>
    </div>
  )
}

export default PopCategory;
import React from 'react';
import Modal from '../../component/Inc/Modal';

function PopCategoryMake(props) {
  const { open, close } = props;
  return (
    <div className="p_modal modal_category_make">
      {/* modal */}
      <Modal open={open} close={close} type="type_apply">
        <h2 className='pop_tit'>카테고리 만들기</h2>
        <div className="content_container type_review">
          <div className="info_wrap">
            <ul className="com_input_sec">
              <li className="tit_field">제목</li>
              <li className='input_field'><input type="text" id='title' placeholder='제목을 입력해주세요.' /></li>
              <li className="tit_field">내용</li>
              <li className='input_field'><input type="text" id='title' placeholder='제목을 입력해주세요.' /></li>
            </ul>
            <ul className="rule_list">
              <li className="rule">해당 내용은 관리자에게 전송되며, 승인 또는 반려될 수있습니다.</li>
              <li className="rule">카테고리 개설 승인 및 반려는 영업일 기준 3일 이내에처리됩니다.</li>
            </ul>
          </div>
        </div>
        <div className="btn_container">
          <button className="com_btn blue m BtnPopClose" onClick={close}>적용하기</button>
        </div>
      </Modal>
    </div>
  )
}

export default PopCategoryMake;
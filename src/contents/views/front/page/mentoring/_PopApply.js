import React from 'react';
import Modal from '../../component/Inc/Modal';
import Upload from '../../component/Inc/Upload';
function PopApply(props) {
  const { open, close } = props;
  return (
    <Modal open={open} close={close} type="pop_apply">
      <h2 className='pop_tit'>이력서 선택</h2>
      <div className="content_container scroll">
        <div className="info_wrap">
          <div className="box">
            <p className="input_tit first">이력서 선택</p>
            <ul className="list">
              <li className="item">
                <input type="radio" name="rate" id="rate5" className="com_chk"/><label htmlFor='rate5'><span className="sel_tit">홍길동 엔지니어 경력12년 이력서</span> <span className="percent">80%</span></label>
              </li>
              <li className="item">
                <input type="radio" name="rate" id="rate4" className="com_chk"/><label htmlFor='rate4'><span className="sel_tit">홍길동 엔지니어 경력12년 이력서동 엔지니어 경력12년 이력</span> <span className="percent">50%</span></label>
              </li>
            </ul>
            <Upload title="+ 이력서 관리" className="com_btn line m"/>
          </div>
          <div className="box">
            <p className="input_tit">파일첨부</p>
            <ul className="list">
              <li className="item">
                <input type="radio" name="rate" id="rate5" className="com_chk"/><label htmlFor='rate5'><span className="sel_tit">삼성신사업 교육 이수증</span></label>
              </li>
              <li className="item">
                <input type="radio" name="rate" id="rate4" className="com_chk"/><label htmlFor='rate4'><span className="sel_tit">홍길동 포트폴리오2</span></label>
              </li>
            </ul>
            <Upload title="+ 파일 업로드" className="com_btn line m"/>
          </div>
        </div>
      </div>
      {props.children}
    </Modal>
  )
}

export default PopApply;
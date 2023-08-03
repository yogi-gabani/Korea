import React from 'react';
import Modal from '../../component/Inc/Modal';
function PopAgree(props) {
  const { open, close } = props;
  return (
    <Modal open={open} close={close}>
      <h2 className='pop_tit'>약관</h2>
      <div className="content_container scroll">
        약관내용
      </div>
    </Modal>
  )
}

export default PopAgree;
import React, { useState } from 'react';
import Modal from '../../component/Inc/Modal';

function PopAttachFile(props) {
  const { open, close } = props;
  const [fileUploadOption, setUploadOption] = useState('file_upload');
  return (
    <Modal open={open} close={close} type="type_attachment">
      <div className="content_container scroll">
        <strong className='pop_sub_tit'>첨부파일 업로드</strong>
        <ul className='com_input_sec'>
          <li className="tit_field">파일 제목</li>
          <li className='input_field'>
            <input type='text' placeholder='파일제목을 입력해주세요'/>
          </li>
          <li className="tit_field">종류 구분</li>
          <li className='input_field'>
            <select name="종류 선택" id="종류 선택">
              <option value="-1">종류 선택</option>
            </select>
          </li>
          <li className="tit_field">
            <input type="radio" name="file_type" id="file_upload" checked={fileUploadOption === 'file_upload'} className='com_chk circle' onChange={() => setUploadOption('file_upload')} /><label htmlFor='file_upload' className="circle_radio">파일업로드</label>
            <input type="radio" name="file_type" id="url" className='com_chk circle' onChange={() => setUploadOption('url')} /><label htmlFor='url' className="circle_radio">URL 등록</label>
          </li>
          <li className='tit_field'>파일 첨부</li>
          <li className='input_field'>
            {fileUploadOption === 'file_upload' ? 
              <div className="wrapper">
                <input type="file" className='file' name="file" id="file" />
                <label htmlFor='file' className="com_btn line blue s">파일 추가</label>
              </div>
              : <input type='text' placeholder='파일제목을 입력해주세요' value={'http://'} />}
          </li>
        </ul>
        <section className='com_btn_wrap'>
          <button className="com_btn blue s">등록</button>
          <button className="com_btn line blue s" onClick={close}>취소</button>
        </section>
      </div>
    </Modal>
  )
}

export default PopAttachFile;
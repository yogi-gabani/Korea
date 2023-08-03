import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import Paging from '../../component/Inc/Paging';
import BtnTop from '../../component/Inc/BtnTop';
import Modal from '../../component/Inc/Modal';
import PopAttachFile from './_PopAttachFile';

function Attachment() {
  const [uploadFileModal, setUploadFileModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <main className='com_mypage p_attachment'>
      <div className='com_center_wrap'>
        <Lnb PageTitle="이력서관리" MenuResume="active"/>
        <div className='container'>
          <h2 className='com_pg_tit'>첨부파일</h2>
          <section className='com_pg_tab'>
            <Link to="/front/Mypage/MyResume" className='tab'>나의 이력서</Link>
            <Link to="/front/Mypage/Attachment" className='tab active'>첨부파일</Link>
          </section>
          <div className='com_input_description'>
            <textarea name="" id="" cols="30" rows="10" placeholder='첨부파일 설명문구 들어갑니다.' className="input_description"></textarea>
            <section className='btn_wrapper'>
              <button className="com_btn blue" onClick={() => setUploadFileModal(true)}>파일 업로드</button>
            </section>
          </div>
          <table className='com_board_list'>
            <thead>
              <tr>
                <th>번호</th>
                <th>등록날짜</th>
                <th>종류</th>
                <th>파일제목</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              <tr className='q'>
                <td className='sm_none'>10</td>
                <td className='state_field'>2023-01-06</td>
                <td className="state_field sm_block">자격증 <span className="divider">|</span> <span className="text_bold">자동차정비기능사</span></td>
                <td className='state_field sm_none'>자격증</td>
                <td className='state_field sm_none'>자동차정비기능사</td>
                <td className='state_field'><button className='com_btn line' onClick={() => setDeleteModal(true)}>삭제</button></td>
              </tr>
              <tr className='q'>
                <td className='sm_none'>9</td>
                <td className='state_field'>2023-01-06</td>
                <td className="state_field sm_block">자격증 <span className="divider">|</span> <span className="text_bold">자동차정비기능사</span></td>
                <td className='state_field sm_none'>자격증</td>
                <td className='state_field sm_none'>자동차정비기능사</td>
                <td className='state_field'><button className='com_btn line'>삭제</button></td>
              </tr>
              <tr className='q'>
                <td className='sm_none'>8</td>
                <td className='state_field'>2023-01-06</td>
                <td className="state_field sm_block">자격증 <span className="divider">|</span> <span className="text_bold">자동차정비기능사</span></td>
                <td className='state_field sm_none'>자격증</td>
                <td className='state_field sm_none'>자동차정비기능사</td>
                <td className='state_field'><button className='com_btn line'>삭제</button></td>
              </tr>
              <tr className='q'>
                <td className='sm_none'>7</td>
                <td className='state_field'>2023-01-06</td>
                <td className="state_field sm_block">자격증 <span className="divider">|</span> <span className="text_bold">자동차정비기능사</span></td>
                <td className='state_field sm_none'>자격증</td>
                <td className='state_field sm_none'>자동차정비기능사</td>
                <td className='state_field'><button className='com_btn line'>삭제</button></td>
              </tr>
              <tr className='q'>
                <td className='sm_none'>6</td>
                <td className='state_field'>2023-01-06</td>
                <td className="state_field sm_block">자격증 <span className="divider">|</span> <span className="text_bold">자동차정비기능사</span></td>
                <td className='state_field sm_none'>자격증</td>
                <td className='state_field sm_none'>자동차정비기능사</td>
                <td className='state_field'><button className='com_btn line'>삭제</button></td>
              </tr>
              <tr className='q'>
                <td className='sm_none'>5</td>
                <td className='state_field'>2023-01-06</td>
                <td className="state_field sm_block">자격증 <span className="divider">|</span> <span className="text_bold">자동차정비기능사</span></td>
                <td className='state_field sm_none'>자격증</td>
                <td className='state_field sm_none'>자동차정비기능사</td>
                <td className='state_field'><button className='com_btn line'>삭제</button></td>
              </tr>
            </tbody>
          </table>
          <Paging />
        </div>
      </div>
      {/* top button */}
      <BtnTop />
      {/* modal */}
      <Modal open={deleteModal} close={() => setDeleteModal(false)} type="type_apply">
        <p className="message">파일을 삭제 하시겠습니까?</p>
        <div className="btn_wrapper">
          <button className="com_btn blue" >파일 삭제</button>
          <button className="com_btn line" onClick={() => setDeleteModal(false)}>취소</button>
        </div>
      </Modal>
      <PopAttachFile open={uploadFileModal} close={() => setUploadFileModal(false)} />
    </main>
  );
}

export default Attachment;

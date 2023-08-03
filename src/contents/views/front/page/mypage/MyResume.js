import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import Paging from '../../component/Inc/Paging';
import BtnTop from '../../component/Inc/BtnTop';
import Modal from '../../component/Inc/Modal';

function MyResume() {
  const [disposition, setDisposition] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <main className='com_mypage p_myresume'>
      <div className='com_center_wrap'>
        <Lnb PageTitle="이력서관리" MenuResume="active"/>
        <div className='container'>
          <h2 className='com_pg_tit'>첨부파일</h2>
          <section className='com_pg_tab'>
            <Link to="/front/Mypage/MyResume" className='tab active'>나의 이력서</Link>
            <Link to="/front/Mypage/Attachment" className='tab'>첨부파일</Link>
          </section>
          <div className='com_input_description'>
            <div className="com_progress_wrapper">
              <p className="tit">나와 잘 맞는 회사를 알아보기 위해 나의 성향을 작성해볼까요?</p>
              <div className="progress_bar tit text_blue"><span className='progress'><span className="filled"></span></span>70%</div>
              <button className="com_btn line">나의 성향 알아보기</button>
            </div>
            <section className='btn_wrapper'>
              <Link to="/front/Mypage/ResumeWriting" className="com_btn blue" >이력서 작성</Link>
            </section>
          </div>
          <table className='com_board_list'>
            <thead>
              <tr>
                <th>번호</th>
                <th>작성날짜</th>
                <th>이력서 제목</th>
                <th>완성도</th>
                <th>설정</th>
                <th>이력서 관리</th>
              </tr>
            </thead>
            <tbody>
              <tr className='q'>
                <td className='sm_none'>6</td>
                <td className='state_field date'>2023-01-06</td>
                <td className='state_field tit'>안녕하세요 경력 12년차 엔지니어입니다.</td>
                <td className='state_field completeness'>80%</td>
                <td className='state_field row'><button className='com_btn line rep active' >대표이력서</button></td>
                <td className='state_field row'>
                  <button className='com_btn line' >수정</button>
                  <button className='com_btn line p' onClick={() => setDeleteModal(true)} >삭제</button>
                </td>
              </tr>
              <tr className='q'>
                <td className='sm_none'>5</td>
                <td className='state_field date'>2023-01-06</td>
                <td className='state_field tit'>안녕하세요 경력 12년차 엔지니어입니다.</td>
                <td className='state_field completeness'>80%</td>
                <td className='state_field row'><button className='com_btn line rep' >일반</button></td>
                <td className='state_field row'>
                  <button className='com_btn line' >수정</button>
                  <button className='com_btn line p' >삭제</button>
                </td>
              </tr>
              <tr className='q'>
                <td className='sm_none'>4</td>
                <td className='state_field date'>2023-01-06</td>
                <td className='state_field tit'>안녕하세요 경력 12년차 엔지니어입니다.</td>
                <td className='state_field completeness'>80%</td>
                <td className='state_field row'><button className='com_btn line rep' >일반</button></td>
                <td className='state_field row'>
                  <button className='com_btn line' >수정</button>
                  <button className='com_btn line p' >삭제</button>
                </td>
              </tr>
              <tr className='q'>
                <td className='sm_none'>3</td>
                <td className='state_field date'>2023-01-06</td>
                <td className='state_field tit'>안녕하세요 경력 12년차 엔지니어입니다.</td>
                <td className='state_field completeness'>80%</td>
                <td className='state_field row'><button className='com_btn line rep' >일반</button></td>
                <td className='state_field row'>
                  <button className='com_btn line' >수정</button>
                  <button className='com_btn line p' >삭제</button>
                </td>
              </tr>
              <tr className='q'>
                <td className='sm_none'>2</td>
                <td className='state_field date'>2023-01-06</td>
                <td className='state_field tit'>안녕하세요 경력 12년차 엔지니어입니다.</td>
                <td className='state_field completeness'>80%</td>
                <td className='state_field row'><button className='com_btn line rep' >일반</button></td>
                <td className='state_field row'>
                  <button className='com_btn line' >수정</button>
                  <button className='com_btn line p' >삭제</button>
                </td>
              </tr>
              <tr className='q'>
                <td className='sm_none'>1</td>
                <td className='state_field date'>2023-01-06</td>
                <td className='state_field tit'>안녕하세요 경력 12년차 엔지니어입니다.</td>
                <td className='state_field completeness'>80%</td>
                <td className='state_field row'><button className='com_btn line rep' >일반</button></td>
                <td className='state_field row'>
                  <button className='com_btn line' >수정</button>
                  <button className='com_btn line p' >삭제</button>
                </td>
              </tr>
            </tbody>
          </table>
          <Paging />
        </div>
      </div>
      {/* top button */}
      <BtnTop />
      {/* modal */}
      <Modal open={disposition} close={() => setDisposition(false)} type="type_apply">
        <div className="message_wrapper">
          <p className='tit'>나의 성향을 작성하지 않으셨습니다.</p>
          <p>나의 성향을 작성하시면 이력서 완성도가 50% 채워집니다</p>
          <p className='text_blue'>나의 성향을 작성하시겠습니까?</p>
        </div>
        <div className="btn_wrapper">
          <button className="com_btn blue" >작성하기</button>
          <button className="com_btn line" onClick={() => setDeleteModal(false)}>취소</button>
        </div>
      </Modal>
      <Modal open={deleteModal} close={() => setDeleteModal(false)} type="type_apply">
        <p>이력서를 삭제 하시겠습니까?</p>
        <div className="btn_wrapper">
          <button className="com_btn blue" >이력서 삭제</button>
          <button className="com_btn line" onClick={() => setDeleteModal(false)}>취소</button>
        </div>
      </Modal>
    </main>
  );
}

export default MyResume;

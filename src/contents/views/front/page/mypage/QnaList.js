import React from 'react';
import { Link } from 'react-router-dom';
//css
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';

function Chat() {
  return (
    <>
      <main className='com_mypage p_qna'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="결제 콘텐츠 목록" MenuPayContents="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>질문과 답변 게시판</h2>
            <table className='com_board_list'>
              <colgroup><col/><col width="10%"/><col width="13%"/></colgroup>
              <thead>
                <tr>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='tit_field'>
                    <Link to="/Mypage/QnaView" className="link_view has_re"><p className='txt'>차체설계의 대한 생각을 평가 받고 싶습니다.차체설계의 대한 생각을 평가 받고 싶습니다.차체설계의 대한 생각을 평가 받고 싶습니다.차체설계의 대한 생각을 평가 받고 싶습니다.차체설계의 대한 생각을 평가 받고 싶습니다.</p><span className='re_num'>15</span></Link>
                  </td>
                  <td className='id_field'>Menti</td>
                  <td className='date_field'>2022.11.22</td>
                </tr>
                <tr>
                  <td className='tit_field'>
                    <Link to="/Mypage/QnaView" className="link_view has_re"><p className='txt'>차체설계의 대한 생각을 평가 받고 싶습니다.</p><span className='re_num'>1</span></Link>
                  </td>
                  <td className='id_field'>Menti</td>
                  <td className='date_field'>2022.11.22</td>
                </tr>
              </tbody>
            </table>
            <section className='com_board_list__bottom'>
              <Link to="/Mypage/QnaWrite" className='com_btn blue xs oval'>질문 작성하기</Link>
            </section>
            <Paging />
          </div>
        </div>
        {/* top button */}
        <BtnTop />
      </main>
    </>
  );
}

export default Chat;

import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import Paging from '../../component/Inc/Paging';
import BtnTop from '../../component/Inc/BtnTop';

function Faq() {
  return (
    <>
      <main className='com_mypage p_faq'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="고객센터" MenuCs="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>고객센터</h2>
            <section className='com_pg_tab'>
              <Link to="/Mypage/Faq" className='tab active'>자주 묻는 질문</Link>
              <Link to="/Mypage/Inquiry" className='tab'>1:1 문의</Link>
            </section>
            <div className='com_board_list__top'>
              <section className='com_cate'>
                <button className='cate active'>회원정보</button>
                <button className='cate'>환전관련</button>
                <button className='cate'>포인트</button>
                <button className='cate'>서비스</button>
              </section>
              <section className='com_board_search'>
                <article className='search'>
                  <input type='text' placeholder='검색할 내용을 입력해주세요.' className='input'/>
                  <button className='com_btn blue s'>조회</button>
                </article>
              </section>
            </div>
            <table className='com_board_list'>
              <colgroup><col width="20%"/><col/></colgroup>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>제목</th>
                </tr>
              </thead>
              <tbody>
                <tr className='q'>
                  <td className='state_field'>탈퇴</td>
                  <td className='tit_field'>회원 탈퇴를 취소하고 싶습니다.</td>
                </tr>
                <tr className='a'>
                  <td colSpan={2}>소셜 로그인은 로그인 화면에서 카카오 또는 Apple 
                    로그인 버튼을 통해 이용 가능합니다.<br/>

                    아래 경로로 기존 계정과 소셜 계정을 연동 할 수 
                    있습니다.</td>
                </tr>
              </tbody>
            </table>
            <Paging />
          </div>
        </div>
        {/* top button */}
        <BtnTop />
      </main>
    </>
  );
}

export default Faq;

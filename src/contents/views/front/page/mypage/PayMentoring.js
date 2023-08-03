import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';
import Review from '../../page/mypage/_PopReview';

function PayMentoring() {
  const [modalReview, setModalReview] = useState(false);
  return (
    <>
      <main className='com_mypage p_pay_mentoring'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="결제 콘텐츠 목록" MenuPayContents="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>결제 콘텐츠 목록</h2>
            <section className='com_pg_tab'>
              <Link to="/Mypage/PayInsight" className='tab'>결제 인사이트 목록</Link>
              <Link to="/Mypage/PayMentoring" className='tab active'>결제 멘토링 목록</Link>
            </section>
            <table className='com_board_list'>
              <colgroup><col/><col width="12%"/><col width="12%"/><col width="24%"/><col width="12%"/><col width="12%"/></colgroup>
              <thead>
                <tr>
                  <th>상품명</th>
                  <th>결제일자</th>
                  <th>만기일자</th>
                  <th>채널</th>
                  <th>상태</th>
                  <th>취소 및 환불</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='tit_field'>반도체 기술이 무엇인지 알려드립니다.</td>
                  <td className='info_field'><span className="th_m">결제일자 :</span>22.11.28</td>
                  <td className='info_field last'><span className="th_m">만기일자 :</span>22.11.28</td>
                  <td className='channel_field'>
                    <Link to="/Mypage/Webcam" className='com_btn blue line oval s btn_meeting'><span >화상미팅</span> 3/5</Link>
                    <Link to="/Mypage/Chat" className='com_btn blue line s oval'>채팅</Link>
                    <Link to="/Mypage/QnaList" className='com_btn blue line s oval btn_qna'>질문과 답변</Link>
                  </td>
                  <td className='state_field'>멘토링</td>
                  <td className='btn_field'><button className='com_btn gray s line oval'>멘토링 취소</button></td>
                </tr>
                <tr>
                  <td className='tit_field'>반도체 기술이 무엇인지 알려드립니다.</td>
                  <td className='info_field'><span className="th_m">결제일자 :</span>22.11.28</td>
                  <td className='info_field last'><span className="th_m">만기일자 :</span>22.11.28</td>
                  <td className='channel_field'>
                    <Link to="/Mypage/Webcam" className='com_btn blue line oval s btn_meeting'><span >화상미팅</span> 3/5</Link>
                    <Link to="/Mypage/Chat" className='com_btn blue line s oval'>채팅</Link>
                    <Link to="/Mypage/QnaList" className='com_btn blue line s oval btn_qna'>질문과 답변</Link>
                  </td>
                  <td className='state_field'>멘토링</td>
                  <td className='btn_field'><button className='com_btn gray s line oval' onClick={() => setModalReview(true)}>후기작성</button></td>
                </tr>
              </tbody>
            </table>
           
            <Paging />
          </div>
        </div>
        {/* top button */}
        <BtnTop />
      </main>
      {/*후기작성 팝업*/}
      <Review open={modalReview} close={() => setModalReview(false)}/>
    </>
  );
}

export default PayMentoring;

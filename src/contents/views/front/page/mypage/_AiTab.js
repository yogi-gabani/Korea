import React from 'react';
import "../../assets/scss/page/mypage.scss";
import { Link } from 'react-router-dom';

//image

function AiTab(props) {
  return (
    <>
      <section className='com_ai_tab'>
        <Link to="/front/Mypage/MatchRead" className={`tab ${props.TabMatchRead}`}>
          <span className='txt'>열람</span>
          <span className='num'>12</span>
        </Link>
        <Link to="/front/Mypage/MatchUnread" className={`tab ${props.TabMatchUnread}`}>
          <span className='txt'>미열람</span>
          <span className='num'>12</span>
        </Link>
        <Link to="/front/Mypage/MatchInterview" className={`tab ${props.TabMatchInterview}`}>
          <span className='txt'>면접제안</span>
          <span className='num'>12</span>
        </Link>
        <Link to="/front/Mypage/MatchRecruit" className={`tab ${props.TabMatchRecruit}`}>
          <span className='txt'>채용상태</span>
          <span className='num'>12</span>
        </Link>
        <Link to="/front/Mypage/MatchWishCompany" className={`tab ${props.TabMatchWishCompany}`}>
          <span className='txt'>찜한공고</span>
          <span className='num'>12</span>
        </Link>
      </section>
    </>
  );
}

export default AiTab;

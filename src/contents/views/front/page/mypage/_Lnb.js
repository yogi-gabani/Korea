import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/mypage.scss";

//image
import ProfileImg from "../../assets/img/img_mentor03.png";
import IconEdit from "../../assets/img/icon_write.png";

function Lnb(props) {
  //mobile lnb open
  const [isActive, setIsActive] = useState(false);
  const handleClick = event => {
    setIsActive(current => !current);
  };
  return (
    <>
      <aside className='aside'>
        <section className='profile_area'>
          <button className='btn_edit'><img src={IconEdit} alt='수정'/></button>
          <div className='profile'>
            <img src={ProfileImg} alt="프로필"/>
          </div>
        </section>
        <section className='id_area'>
          dief568
          <Link to="/front/Mypage/Profile" className='com_btn s lightgray oval'>수정</Link>
        </section>
        <section className='link_area'>
          <Link to="/front/Mypage/MyFit" className='link'>나의 성향</Link>
          <Link to="/front/Mypage/ExchangeAccount" className='link'>환전 계좌 관리</Link>
        </section>
        <section className='com_btn_wrap'>
          <Link to="/front/Mypage/JobSearchApply" className='com_btn line blue s  oval'>적극 구직 신청하기</Link>
          <button className='com_btn_tip'>!</button>
        </section>
        <ul className='point_area'>
          <li className='item'>
            <p>포인트</p><Link to="/front/Mypage/PointCharge" className='com_btn line blue oval xxs'>충전</Link>
            <b className='num'>0</b>
          </li>
          <li className='item'>
            <p>이벤트 포인트</p>
            <b className='num'>2,000P</b>
          </li>
        </ul>
        <button className='selected_menu' onClick={handleClick}>{props.PageTitle}</button>
        <section className={isActive ? 'lnb active' :'lnb'}>
          <Link to="/front/Mypage/MyResume" className={`menu ${props.MenuResume}`}>이력서 관리</Link>
          <Link to="/front/Mypage/MatchRead" className={`menu ${props.MenuPayAi}`}>AI 매칭 지원 현황</Link>
          <Link to="/front/Mypage/PayInsight" className={`menu ${props.MenuPayContents}`}>결제 콘텐츠 목록</Link>
          <Link to="/front/Mypage/ProductInsight" className={`menu ${props.MenuProduct}`}>상품관리</Link>
          <Link to="/front/Mypage/Community" className={`menu ${props.MenuCommunity}`}>My 커뮤니티</Link>
          <Link to="/front/Mypage/Seminar" className={`menu ${props.MenuSeminar}`}>세미나 신청내역</Link>
          <Link to="/front/Mypage/PayList" className={`menu ${props.MenuPay}`}>결제 내역</Link>
          <Link to="/front/Mypage/Exchange" className={`menu ${props.MenuExchange}`}>환전 내역</Link>
          <Link to="/front/Mypage/Push" className={`menu ${props.MenuPush}`}>알림</Link>
          <Link to="/front/Mypage/Faq" className={`menu ${props.MenuCs}`}>고객센터</Link>
        </section>
      </aside>
    </>
  );
}

export default Lnb;

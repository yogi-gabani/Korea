/* eslint-disable */
import React, {useState,useCallback} from 'react';
import { NavLink } from 'react-router-dom';
import "../../assets/scss/page/mypage.scss";
import "../../assets/scss/page/company.scss";

//image
import ProfileImg from "../../assets/img/img_mentor03.png";
import IconEdit from "../../assets/img/icon_write.png";

function Lnb(props) {
  //mobile lnb open
  const [isActive, setIsActive] = useState(false);
  const handleClick = event => {
    setIsActive(current => !current);
  };  
  const lnbData = [
    {
      title:'기업정보',
      link:'/front/Company/Info'
    },
    {
      title:'공고관리',
      link:'/front/Company/Job'
    },
    {
      title:'채용관리',
      link:'/front/Company/Recruit'
    },
    {
      title:'기업성향',
      link:'/front/Company/Vision'
    },
    {
      title:'알림내역',
      link:'/front/Company/Notice'
    },
    {
      title:'고객센터',
      link:'/front/Company/Cs'
    },
    {
      title:'헤드헌팅',
      link:'/front/Company/Hh'
    },
  ]
  const renderLnb = useCallback(() => {
    return lnbData.map((v, idx) => {
      return (
        <NavLink to={v.link} key={idx} className={`menu ${isActive ? 'active' : ''}`}>
          {v.title}
        </NavLink>
      );
    });
  },[]);
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
          awesome
          <button className='com_btn s lightgray oval'>수정</button>
        </section>
        <section className={isActive ? 'lnb active' :'lnb'}>
          {renderLnb()}
          {/* <Link to="/front/Company/Info" className='menu active'>기업정보</Link>
          <Link to="/front/Company/Job" className='menu'>공고관리</Link>
          <Link to="/front/Company/Recruit" className='menu'>채용관리</Link>
          <Link to="/front/Company/Vision" className='menu'>기업성향</Link>
          <Link to="/front/Company/Notice" className='menu'>알림내역</Link>
          <Link to="/front/Company/Cs" className='menu'>고객센터</Link>
          <Link to="/front/Company/Hh" className='menu'>헤드헌팅</Link> */}
        </section>
        <div className="notice_txt">
          기업성향 설문을 진행하시면
          회사와 성향이 맞는 
          인재를 구인 할 수 있습니다.
        </div>

        <button className='selected_menu' onClick={handleClick}>{props.PageTitle}</button>
      </aside>
    </>
  );
}

export default Lnb;

/* eslint-disable */
import React, {useState, useCallback} from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';

function MyCommunity() {
  const [tabState, setTabState] = useState(0);
  const tab = [
    { text: "최근 본 글", value: 0 },
    { text: "작성글", value: 1 },
    { text: "작성댓글", value: 2 },
    { text: "좋아요", value: 3 },
  ];
  const renderTab = useCallback(() => {
    return tab.map((v, idx) => {
      return (
        <button key={idx} className={`tab ${tabState === v.value && "active"}`} onClick={() => setTabState(v.value)}>
          {v.text}
        </button>
      );
    });
  }, [tab]);
  return (
    <>
      <main className='com_mypage p_mycommunity'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="My 커뮤니티" MenuCommunity="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>My 커뮤니티</h2>
            <section className='com_pg_tab'>
              {renderTab()}
            </section>
            
            {tabState === 0 && (
            <div className='wrap'>
              <Link to="/front/Community/Detail" className="com_community_card">
                <div className="info">
                  <div className="profile">
                    <p className="name">dief568</p>
                    <span className="desc">1시간 전</span>
                  </div>
                  <div className="tit">
                    직장생활, 경력에 따라 관계와 위치가 달라지는 이유
                  </div>
                  <div className="description">
                    안녕하세요! 신입 개발자로 취업 준비중이신 건 부럽지만, 함께 응원해드릴게요! 1~3년차 정도의 준하는 실력이라면, 기본적인 프로그래밍 지식과 문제 해결 능력은 물론이고, 프로젝트를 진행하며 
                    경험한 문제와 그에 대한 해결 방법 등이 중요한 포인트일 것 같아요. 또한, 협업 능력과 소통 능력, 새로운 기술에 대한 관심과 학습 능력도 중요할 것 같아요. 조금 더 자세한 정보는 회사나 공고안녕하세요! 신입 개발자로 취업 준비중이신 건 부럽지만, 함께 응원해드릴게요! 1~3년차 정도의 준하는 실력이라면, 기본적인 프로그래밍 지식과 문제 해결 능력은 물론이고, 프로젝트를 진행하며 
                    경험한 문제와 그에 대한 해결 방법 등이 중요한 포인트일 것 같아요. 또한, 협업 능력과 소통 능력, 새로운 기술에 대한 관심과 학습 능력도 중요할 것 같아요. 조금 더 자세한 정보는 회사나 공고...
                  </div>
                  <div className="comment_box">
                    <span className="com_icon eye">1,254</span>
                    <span className="com_icon like">20</span>
                    <span className="com_icon comment">3</span>
                  </div>
                </div>
              </Link>
              <Link to="/front/Community/Detail" className="com_community_card">
                <div className="info">
                  <div className="profile">
                    <p className="name">dief568</p>
                    <span className="desc">1시간 전</span>
                  </div>
                  <div className="tit">
                    직장생활, 경력에 따라 관계와 위치가 달라지는 이유
                  </div>
                  <div className="description">
                    안녕하세요! 신입 개발자로 취업 준비중이신 건 부럽지만, 함께 응원해드릴게요! 1~3년차 정도의 준하는 실력이라면, 기본적인 프로그래밍 지식과 문제 해결 능력은 물론이고, 프로젝트를 진행하며 
                    경험한 문제와 그에 대한 해결 방법 등이 중요한 포인트일 것 같아요. 또한, 협업 능력과 소통 능력, 새로운 기술에 대한 관심과 학습 능력도 중요할 것 같아요. 조금 더 자세한 정보는 회사나 공고안녕하세요! 신입 개발자로 취업 준비중이신 건 부럽지만, 함께 응원해드릴게요! 1~3년차 정도의 준하는 실력이라면, 기본적인 프로그래밍 지식과 문제 해결 능력은 물론이고, 프로젝트를 진행하며 
                    경험한 문제와 그에 대한 해결 방법 등이 중요한 포인트일 것 같아요. 또한, 협업 능력과 소통 능력, 새로운 기술에 대한 관심과 학습 능력도 중요할 것 같아요. 조금 더 자세한 정보는 회사나 공고...
                  </div>
                  <div className="comment_box">
                    <span className="com_icon eye">1,254</span>
                    <span className="com_icon like">20</span>
                    <span className="com_icon comment">3</span>
                  </div>
                </div>
              </Link>
            </div>
            ) || tabState === 1 && (
              <br/> 
            ) || tabState === 2 && (
              <br/>  
            ) || tabState === 3 && (
              <br/> 
            )}
            <Paging />
          </div>
        </div>
        {/* top button */}
        <BtnTop />
      </main>
    </>
  );
}

export default MyCommunity;

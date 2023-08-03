import React, { useState } from 'react'
import ImgSeminar01 from '../../assets/img/img_seminar01.png';
import BtnTop from '../../component/Inc/BtnTop';

function Detail() {
  const [count, setCount ] = useState(1);
  const tab = ['세미나 소개', '참여신청/환불 안내'];
  const [currentBtn, setCurrentBtn ] = useState(tab[0]);

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  return (
    <main className="com_detail">
      <div className="com_center_wrap">
        <section className="sec_detail">
          <div className="content_wrap">
            <div className="image_wrap">
              <img src={ImgSeminar01} alt="seminar_image" className="img" />
              <div className="address_wrap">
                <div className="detail_wrap icon_calender">
                  <p className="title">일정</p>
                  <p className="detail">2022-12-04 15:00</p>
                </div>
                <div className="detail_wrap icon_location">
                  <p className="title">장소</p>
                  <p className="detail">서울특별시 강남구 봉은사로 211 10F</p>
                </div>
                <div className="detail_wrap icon_multi_user">
                  <p className="title">정원</p>
                  <p className="detail">10 / 20명</p>
                </div>
              </div>
            </div>
            <div className="title_wrap">
              <h2 className="title">Future of Work 2022 fall</h2>
              <p className="description">배관기술을 처음 시작하는 사람, 제대로 배워 알차게 사용하고 싶은 사람의 선택!</p>
              <div className="hashtags">
                <span className="hash">#배관</span>
                <span className="hash">#투자</span>
                <span className="hash">#자기개발</span>
                <span className="hash">#중점기술</span>
              </div>
              <div className="wrapper">
                <div className="other_detail">
                  <p className="desc">2022-12-03 14:00까지 <span className="text_blue">10명</span> 신청가능</p>
                  <p className="desc">가격 55,000원 <span className="divider"></span> 인원수 
                    <button disabled={count <= 0} onClick={decrement} className="counter">-</button>
                      <span className="bold"> {count} </span>
                    <button onClick={increment} className="counter">+</button></p>
                </div>
                <button className="com_btn blue">신청하기</button>
              </div>
            </div>
          </div>
          <div className="seminar_description">
            <div className="btn_wrapper">
              {tab.map((tabButton, index) => 
                <button key={index} onClick={(_) => setCurrentBtn(tabButton)} className={currentBtn === tabButton ? "com_btn active" : "com_btn"}>세미나 소개</button>
              )}
              <span className='space'></span>
            </div>
            <div className="description_wrap">
              {currentBtn === tab[0] ? <>
                <p>11월 23일 15시에 aT센터에서 산업부 박일준 차관, 구자근 국회의원, 한국디자인단체총연합회 김현선 회장, 서울디자인재단 권영걸 이사장, 디자인하우스 이영혜 대표 등 디자인업계를 대표하는 인사들이 참여한 가운데 개막식이 개최됐다.</p>
                <p>특히, 이번 행사는‘메가임팩트 디자인트렌드 2023+’를 주제로 라이프스타일, 기술, 컬러, 미래디자인 등 디자인 산업의 트렌드를 보여주며, 디자인 비즈니스 기회를 제공하는</p>
                <p>①디자인 전시, ②국제 컨퍼런스, ③디자인대상 및 우수디자인 시상식, ④B2B 디자인 비즈니스 매칭 행사, ⑤디자이너 잡 페어, ⑥디자인 진흥사업 성과 공유회 등 다양한 행사가 진행되며, 온라인(designkorea.kidp.or.kr)에서도 실시간으로 관람이 가능하다.</p>
                <div className="map">Map</div>
              </>
            : <>
              <p className="desc">세미나의 신청/취소/변경/환불은 참여신청 기간 내에만 가능합니다.</p>
              <p className="desc">결제한 세미나는 환불 시 결제 수단과 환불 시점에 따라 수수료가 부과될 수 있습니다. 자세한 사항은 취소/환불약관을 확인해주세요.</p>
              <p className="desc">결제, 환불, 참여신청 취소, 참여상태 확인, 참여내역 확인은 마이페이지에서 할 수 있습니다.</p>
            </> }
            </div>
          </div>
        </section>
      </div>
      {/* top button */}
      <BtnTop />
    </main>
  )
}

export default Detail
/* eslint-disable */
import React, { useCallback, useState } from 'react';
import '../../assets/scss/page/magazine.scss';
import Item from './_Item';
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Navigation, Pagination } from 'swiper';

function List() {
  const [itemSwiper, setItemSwiper] = useState(null);
  const [tabState, setTabState] = useState(0);

  const tab = [
    { text: "전체", value: 0 },
    { text: "프로세스분야", value: 1 },
    { text: "기계분야", value: 2 },
    { text: "전기/계장 분야", value: 3 },
    { text: "배관분야", value: 4 },
  ];
  const renderTab = useCallback(() => {
    return tab.map((v, idx) => {
      return (
        <button key={idx} className={`item_tit ${tabState === v.value ? "active" : ""}`} onClick={() => setTabState(v.value)}>
          {v.text}
        </button>
      );
    });
  }, [tabState]);
  
  const renderTabWithSwiper = useCallback(() => {
    return tab.map((v, idx) => {
      return (
        <SwiperSlide>
          <button key={idx} className={`item_tit ${tabState === v.value ? "active" : ""}`} onClick={() => setTabState(v.value)}>
          {v.text}
          </button>
        </SwiperSlide>
      );
    });
  }, [tabState]);

  return (
    <main className="p_magazine">
      {/* long banner */}
      <section className="sec_banner">
      </section>
      <section className="sec_magazine">
        <div className="com_center_wrap">
          <div className="pg_tit_wrap">
            <h2 className="com_pg_tit">매거진</h2>
          </div>
          <div className="com_tab_wrap">
            <div className="content_tab">
              {renderTab()}
              <div className="swiper_wrap category">
                <div className="swiper-button-prev"></div>   
                <Swiper 
                  modules={[Pagination,Controller,Navigation]}
                  onSwiper={setItemSwiper}
                  controller={{ control: itemSwiper }}
                  navigation={{
                    nextEl: '.category .swiper-button-next',
                    prevEl: '.category .swiper-button-prev',
                  }}
                  autoplay={true}
                  breakpoints={{
                    500: {
                      slidesPerView: 3,
                      spaceBetween: 0,
                    },
                    400: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                  }}
                  >
                  {renderTabWithSwiper()}
                </Swiper>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
          <div className="list_wrap">
            <h2 className="tit">COMPRESS 추천 매거진 <span className="more">더보기</span></h2>
            <ul className="list">
              {[1,2,3].map((item,index) => (
                  <Item key={index} 
                    title='자동차 설비분야의 엔지니어 멘토들에게 특급노하우 전수받을 수 있는 기회!' 
                    description='산업통상자원부(이하 산업부)가 주최하고 한국디자인진흥원' 
                  />
                ))}
            </ul>
          </div>
          <div className="list_wrap m-80">
            <h2 className="tit">Optima Tank 650 추천 매거진 <span className="more">더보기</span></h2>
            <ul className="list">
              {[1,2,3].map((item,index) => (
                <Item key={index} 
                  title='자동차 설비분야의 엔지니어 멘토들에게 특급노하우 전수받을 수 있는 기회!' 
                  description='산업통상자원부(이하 산업부)가 주최하고 한국디자인진흥원'
                />
              ))}
            </ul>
          </div>
          <Paging />
        </div>
      </section>
      {/* top button */}
      <BtnTop />
    </main>
  )
}

export default List
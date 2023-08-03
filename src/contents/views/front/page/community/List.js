
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';

import '../../assets/scss/page/community.scss';
import { Controller, Navigation, Pagination } from 'swiper';
import { Link } from 'react-router-dom';

function List() {
  const [itemSwiper, setItemSwiper] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  const Arr = ['전체', '노무', '회사생활', '취업/이직', '인간관계', '대기업', '중견기업', '소기업', '회사생활', '취업/이직', '인간관계', '대기업', '중견기업', '소기업'];

  return (
    <main className='p_community'>
      {/* long banner */}
      <section className="sec_banner">
      </section>
      {/* community */}
      <section className="sec_community">
        <div className="com_center_wrap">
          <div className="com_sub_tit_wrap">
            <div className="pg_tit_wrap">
              <h2 className="com_pg_tit">커뮤니티</h2>
            </div>
          </div>
          <div className="swiper_wrap">
            <div className="custom_pagination category">
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
                  958: {
                    slidesPerView: 11,
                    spaceBetween: 0,
                  },
                  850: {
                    slidesPerView: 9,
                    spaceBetween: 0,
                  },
                  750: {
                    slidesPerView: 7,
                    spaceBetween: 0,
                  },
                  650: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                  },
                  550: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                  },
                  450: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                }}
              >
                {Arr.map((item, index) => (
                  <SwiperSlide key={index} >
                    <span className={index === selectedTab ? 'item_tit active' : 'item_tit'} onClick={() => setSelectedTab(index)}>{item}</span>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-button-next"></div>
            </div>
          </div>
          <div className="career">
            <button className="com_btn icon_pencil">커리어에 대해 자유롭게 이야기 해주세요!</button>
            <div className="input_box icon_search">
              <input type='text' placeholder='관심있는 내용을 검색해주세요!' className='input'/>
            </div>
            <button className="com_btn btn_category">카테고리 만들기</button>
          </div>
          <div className="community_list">
            <Link to={'/front/Community/Detail'} className="com_community_card">
              <div className='img'>
                <img alt=''/>
              </div>
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
                  경험한 문제와 그에 대한 해결 방법 등이 중요한 포인트일 것 같아요. 또한, 협업 능력과 소통 능력, 새로운 기술에 대한 관심과 학습 능력도 중요할 것 같아요. 조금 더 자세한 정보는 회사나 공고...
                </div>
                <div className="comment_box">
                  <span className="com_icon eye">1,254</span>
                  <span className="com_icon like">20</span>
                  <span className="com_icon comment">3</span>
                </div>
              </div>
            </Link>
            <Link to={'/front/Community/Detail'} className="com_community_card">
              <div className='img'>
                <img alt=''/>
              </div>
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
          <Paging />
        </div>
      </section>
      {/* top button */}
      <BtnTop />
    </main>
  )
}

export default List;
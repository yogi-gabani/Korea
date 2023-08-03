/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow,Controller,FreeMode,Scrollbar } from "swiper";	// 추가
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/scrollbar";
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import "../../assets/scss/page/main.scss";
//image
import imgVisual01 from "../../assets/img/img_visual.png"
import imgVisualBanner from "../../assets/img/img_visual_banner.png"
import imgMentor01 from "../../assets/img/img_mentor01.png"
import iconShare from "../../assets/img/icon_share.png"
import iconChat from "../../assets/img/icon_chatbot.png"
import imgMagazine01 from "../../assets/img/img_seminar.jpg"
import bgManage01 from "../../assets/img/img_manage01.png"
import bgManage02 from "../../assets/img/img_manage02.png"
import bgManage03 from "../../assets/img/img_manage03.png"

function Index() {
  const Arr2 = ["1", "2", "3", "4"];
  const Arr3 = ["1", "2", "3", "4", "5"];
  const [visualSwiper, setVisualSwiper] = useState(null);
  const [matchSwiper, setMatchSwiper] = useState(null);
  const [mentorSwiper, setMentorSwiper] = useState(null);
  const [insightSwiper, setInsightSwiper] = useState(null);
  const [seminarSwiper, setSeminarSwiper] = useState(null);
  const [magazineSwiper, setMagazineSwiper] = useState(null);
  const [communitySwiper, setCommunitySwiper] = useState(null);
  return (
    <main className="p_main">
      {/* visual */}
      <section className="sec_visual">
        <div className="com_center_wrap">
          <div className="swiper_wrap">
            <Swiper
              modules={[Pagination,Controller]}
              onSwiper={setVisualSwiper}
              controller={{ control: visualSwiper }}
              slidesPerView={1}
              pagination={{
                el: '.custom_pagination.visual',
                clickable: true,
                renderBullet: (index, className) => {
                 return '<span class="com_swiper_bullet ' + className + '"></span>';
                },
              }}
              loop={true}
              autoplay={true}
            >
              <SwiperSlide><img src={imgVisual01} alt="엔지니어 채용 전문 플랫폼" /></SwiperSlide>
              <SwiperSlide><img src={imgVisual01} alt="엔지니어 채용 전문 플랫폼" /></SwiperSlide>
            </Swiper>
            <div className="custom_pagination visual"></div>
          </div>
          <div className="banner">
            <Link to="/Match"><img src={imgVisualBanner} alt="내 까다로운 조건과 성격에 맞는 회사는?" /></Link>
          </div>
        </div>
      </section>
      {/* long banner */}
      <section className="sec_banner">
        <div className="com_center_wrap">
        </div>
      </section>
      {/* AI match */}
      <section className="sec_match">
        <div className="com_center_wrap">
          <div className="tit_wrap">
            <h2 className="tit"><span className="ballon">AI로 매칭</span>된 기업을 확인해보세요!</h2>
            <p className="sub_tit">나의 성향과 맞는 기업과 나와 기업의 관계를 한 눈에 확인할 수 있습니다!</p>
            <ul className="tag_list">
              <li className="tag_item icon_line_blue">대우가 좋은</li>
              <li className="tag_item icon_line_blue">대우가 좋은</li>
              <li className="tag_item icon_line_blue">대우가 좋은</li>
              <li className="tag_item icon_line_blue">대우가 좋은</li>
            </ul>
            <Link to="/Match" className="com_btn l black oval icon_arrow btn_more_bottom">더보기</Link>
          </div>
          <div className="swiper_wrap">
            <Swiper
              modules={[Pagination,Controller,EffectCoverflow,FreeMode]}
              onSwiper={setMatchSwiper}
              controller={{ control: matchSwiper }}
              slidesPerView={2}
              pagination={{
                el: '.custom_pagination.match',
                clickable: true,
                renderBullet: (index, className) => {
                 return '<span class="com_swiper_bullet ' + className + '"></span>';
                },
              }}
              // loop={true}
              centeredSlides={true}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 100,
                depth: 150,
                modifier: 1.5,
                slideShadows : false,
              }}
            >
              <SwiperSlide>
                <div className="slide_box">
                  <p className="tit">11디스플레이 장비 엔지니어 최고 대우로 모십니다</p>
                  <div className="info">
                    <p className="info_tit">경력 2년 이상 · 경기 성남 근무
                    마감: ~2023/01/25까지</p>
                    <p className="info_s">
                      ㈜ 삼성M&C <span className="icon">프리랜서</span>
                    </p>
                    <ul className="tag_list">
                      <li className="tag_item">#이직</li> 
                      <li className="tag_item">#재택근무</li>  
                      <li className="tag_item">#고연봉</li>  
                      <li className="tag_item">#엔지니어</li>
                    </ul>
                  </div>
                  <Link to="/Match" className="btn_more"></Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_box">
                  <p className="tit">22디스플레이 장비 엔지니어 최고 대우로 모십니다</p>
                  <div className="info">
                    <p className="info_tit">경력 2년 이상 · 경기 성남 근무
                    마감: ~2023/01/25까지</p>
                    <p className="info_s">
                      ㈜ 삼성M&C <span className="icon">프리랜서</span>
                    </p>
                    <ul className="tag_list">
                      <li className="tag_item">#이직</li> 
                      <li className="tag_item">#재택근무</li>  
                      <li className="tag_item">#고연봉</li>  
                      <li className="tag_item">#엔지니어</li>
                    </ul>
                  </div>
                  <Link to="/Match" className="btn_more"></Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_box">
                  <p className="tit">33디스플레이 장비 엔지니어 최고 대우로 모십니다</p>
                  <div className="info">
                    <p className="info_tit">경력 2년 이상 · 경기 성남 근무
                    마감: ~2023/01/25까지</p>
                    <p className="info_s">
                      ㈜ 삼성M&C <span className="icon">프리랜서</span>
                    </p>
                    <ul className="tag_list">
                      <li className="tag_item">#이직</li> 
                      <li className="tag_item">#재택근무</li>  
                      <li className="tag_item">#고연봉</li>  
                      <li className="tag_item">#엔지니어</li>
                    </ul>
                  </div>
                  <Link to="/Match" className="btn_more"></Link>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="custom_pagination match"></div>
          </div>
        </div>
      </section>
      {/* Mentoring */}
      <section className="sec_mentoring sec_bg">
        <div className="com_center_wrap">
          <div className="tit_wrap center">
            <h2 className="tit">성장하기 위한 준비! <span className="ballon">전문가 멘토</span> 와 함께 하세요.</h2>
            <Link to="/Mentoring" className="com_btn l black oval icon_arrow">멘토링 신청하기</Link>
          </div>
          <div className="swiper_wrap">
            <Swiper
              modules={[Pagination,Controller,Navigation]}
              onSwiper={setMentorSwiper}
              controller={{ control: mentorSwiper }}
              navigation={{
                nextEl: '.mentor .swiper-button-next',
                prevEl: '.mentor .swiper-button-prev',
              }}
              pagination= {{
                el: '.mentor .swiper_fraction',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                  return '<span class="com_swiper_fraction current">' + current + '</span> / <span class="com_swiper_fraction">' + total + '<span>';
                }
              }}
              autoplay={true}
              breakpoints={{
                360: {
                  slidesPerView: 1.5,
                  centeredSlides: true,
                  spaceBetween: 15,
                  loop: true,
                },
                968: {
                  slidesPerView: 3,
                  centeredSlides: false,
                  spaceBetween: 40,
                },
              }}
            >
              {Arr2.map((item,index) => (
              <SwiperSlide key={index}>
                <div className="com_card_item">
                  <p className="thumb">
                    <img src={imgMentor01} className="thumb_img" alt="mentoring1" />
                  </p>
                  <div className="info">
                    <span className="icon_line_blue">자동차 설비</span>
                    <p className="tit">자동차 설비분야의 엔지니어 멘토들에게 특급 노하우 전수받을 수 있는 기회!자동차 설비분야의 엔지니어 멘토들에게 특급 노하우 전수받을 수 있는 기회!</p>
                    <p className="info_s">
                      <span className="com_point_txt">홍길동</span>
                      <span className="info_txt dot">경기500명 규모의 중소기업</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom_pagination mentor">
              <div className="swiper-button-prev"></div>   
              <div className="swiper_fraction"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Insight */}
      <section className="sec_insight">
        <div className="com_center_wrap">
          <div className="tit_wrap center">
            <h2 className="tit">경력있는 엔지니어의 <span className="ballon">인사이트</span> 를 공유하세요</h2>
            <Link to="/Insight" className="com_btn l black oval icon_arrow">인사이트 공유 신청하기</Link>
          </div>
          <div className="swiper_wrap">
            <Swiper
              modules={[Pagination,Controller,Navigation]}
              onSwiper={setInsightSwiper}
              controller={{ control: insightSwiper }}
              navigation={{
                nextEl: '.insight .swiper-button-next',
                prevEl: '.insight .swiper-button-prev',
              }}
              pagination= {{
                el: '.insight .swiper_fraction',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                  return '<span class="com_swiper_fraction current">' + current + '</span> / <span class="com_swiper_fraction">' + total + '<span>';
                }
              }}
              autoplay={true}
              breakpoints={{
                360: {
                  slidesPerView: 1.5,
                  centeredSlides: true,
                  spaceBetween: 15,
                  loop: true,
                },
                968: {
                  slidesPerView: 3,
                  centeredSlides: false,
                  spaceBetween: 40,
                },
              }}
            >
              {Arr3.map((item,index) => (
              <SwiperSlide key={index}>
                <div className="com_card_item">
                  <p className="thumb">
                    <img src={imgMentor01} className="thumb_img" alt="img" />
                  </p>
                  <span className="icon_bg_blue">2,000P</span>
                  <div className="info">
                    <span className="icon_line_blue">자동차 공학</span>
                    <p className="tit">자동차 설비분야의 엔지니어 멘토들에게 특급 노하우 전수받을 수 있는 기회!자동차 설비분야의 엔지니어 멘토들에게 특급 노하우 전수받을 수 있는 기회!</p>
                    <p className="info_s">
                      <span className="com_point_txt">홍길동</span> 
                      <span className="info_txt dot">좋아요 <span className="cnt">54</span></span>
                      <span className="info_txt dot">댓글 <span className="cnt">54</span></span>
                      <button className="btn_share"><img src={iconShare} alt="share" /></button>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom_pagination insight">
              <div className="swiper-button-prev"></div>   
              <div className="swiper_fraction"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Magazine */}
      <section className="sec_magazine sec_bg">
        <div className="com_center_wrap">
          <div className="tit_wrap">
            <h2 className="tit">언제나 타이밍이 중요<br /><span className="ballon">시대의 흐름</span>을 파악하세요!</h2>
            <p className="sub_tit">인기 매거진에서 시대의 흐름을 파악하세요~<br />
              <strong>다양한 엔지니어 분야의 정보</strong>를 <br />
              확인할 수 있습니다.
            </p>
            <Link to="/Magazine" className="com_btn l black oval icon_arrow btn_more_bottom">매거진 더보기</Link>
          </div>
          <div className="swiper_wrap">
            <Swiper
              modules={[Pagination,Controller,EffectCoverflow,FreeMode]}
              onSwiper={setMagazineSwiper}
              controller={{ control: magazineSwiper }}
              slidesPerView={2.5}
              pagination={{
                el: '.custom_pagination.magazine',
                clickable: true,
                renderBullet: (index, className) => {
                 return '<span class="com_swiper_bullet ' + className + '"></span>';
                },
              }}
              // loop={true}
              centeredSlides={true}
              effect="coverflow"
              breakpoints={{
                360: {
                  coverflowEffect : {
                    rotate: 0,
                    stretch: 80,
                    depth: 100,
                    modifier: 1.5,
                    slideShadows : false,
                  }
                },
                968: {
                  coverflowEffect : {
                    rotate: 0,
                    stretch: 100,
                    depth: 150,
                    modifier: 1.5,
                    slideShadows : false,
                  }
                },
              }}
              // coverflowEffect={{
              //   rotate: 0,
              //   stretch: 100,
              //   depth: 150,
              //   modifier: 1.5,
              //   slideShadows : false,
              // }}
            >
              <SwiperSlide>
                <div className="slide_box">
                  <p className="top_tit">COMPRESS</p>
                  <div className="thumb">
                    <img src={imgMagazine01} alt="img" />
                  </div>
                  <p className="tit">11미래 디자인 트렌드를 보여 주는 ‘디자인코리아 2023’개막</p>
                  <p className="desc">
                    산업통상자원부(이하 산업부)가 주최하고 한국디자인진흥원
                  </p>
                  <Link to="/Magazine" className="btn_more"></Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_box">
                  <p className="top_tit">COMPRESS</p>
                  <p className="tit">한화솔루션 케미칼 부문 엔지니어 입사성공 스토리! 놓치지 마세요</p>
                  <p className="desc">
                  한화솔루션 케미칼 부문을 선택한 이유, 나를 표현하는 차별화된 면접전략 등의 입사성공 노하우와 입사성공 후 직,간접적으로 겪어보는 한화솔루션 케미칼 부문 이야기와 후배들을 위한 응원 한마디도 놓치지 마세요!
                  </p>
                  <Link to="/Magazine" className="btn_more"></Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_box">
                  <p className="top_tit">Magazine</p>
                  <div className="thumb">
                    <img src={imgMagazine01} alt="img" />
                  </div>
                  <p className="tit">11미래 디자인 트렌드를 보여 주는 ‘디자인코리아 2023’개막</p>
                  <p className="desc">
                    산업통상자원부(이하 산업부)가 주최하고 한국디자인진흥원
                  </p>
                  <Link to="/Magazine" className="btn_more"></Link>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="custom_pagination magazine"></div>
          </div>
        </div>
      </section>
      {/* Seminar */}
      <section className="sec_seminar">
        <div className="com_center_wrap">
          <div className="tit_wrap center">
            <h2 className="tit">권위 있는 엔지니어들의 <br/><span className="ballon">오프라인 강연</span> 지금 참여해보세요!</h2>
            <Link to="/Seminar" className="com_btn l black oval icon_arrow">세미나 더보기</Link>
          </div>
          <div className="swiper_wrap">
            <Swiper
              modules={[Pagination,Controller,Navigation,Scrollbar]}
              onSwiper={setSeminarSwiper}
              controller={{ control: seminarSwiper }}
              navigation={{
                nextEl: '.seminar .swiper-button-next',
                prevEl: '.seminar .swiper-button-prev',
              }}
              pagination= {{
                el: '.seminar .swiper_fraction',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                  return '<span class="com_swiper_fraction current">' + current + '</span> / <span class="com_swiper_fraction">' + total + '<span>';
                }
              }}
              autoplay={true}
              scrollbar={true}
              breakpoints={{
                360: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              {Arr3.map((item,index) => (
              <SwiperSlide key={index}>
              <div className="com_card_item">
                <p className="thumb">
                  <img src={imgMagazine01} className="thumb_img" alt="img" />
                </p>
                <div className="info">
                  <p className="tit">Future of Work 2022</p>
                  <p className="info_s">
                    <span className="info_txt">2022-12-04 15:00</span>
                    <span className="info_txt dot">20명</span>
                  </p>
                  <button className="com_btn line s oval">참가신청</button>
                </div>
              </div>
              </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom_pagination seminar">
              <div className="swiper-scrollbar"></div>
              <div className="swiper-button-prev"></div>   
              <div className="swiper_fraction"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Community */}
      <section className="sec_community sec_bg">
        <div className="com_center_wrap">
          <div className="tit_wrap center">
            <h2 className="tit">성장을 위한 가장 확실한 방법은 <br />뛰어난 동료들과<span className="ballon">소통</span>  하는 것입니다.</h2>
            <Link to="/Community" className="com_btn l black oval icon_arrow">커뮤니티 더보기</Link>
          </div>
          <div className="swiper_wrap">
            <Swiper
              modules={[Pagination,Controller]}
              onSwiper={setCommunitySwiper}
              controller={{ control: communitySwiper }}
              pagination={{
                el: '.custom_pagination.community',
                clickable: true,
                renderBullet: (index, className) => {
                return '<span class="com_swiper_bullet ' + className + '"></span>';
                },
              }}
              breakpoints={{
                360: {
                  slidesPerView: 1.1,
                  spaceBetween: 15,
                },
                968: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide>
                <div className="com_card_item">
                  <div className="info">
                    <p className="tit">직장생활, 경력에 따라 관계와 위치가 달라지는 이유</p>
                    <p className="desc">요새 문득 드는 느끼는 것이 있다면, 직장생활의 경력이 쌓이고 위치가 달라질수록 직장과 나, 리더와 나의 관계도 점점 달라진다는 것이다.</p>
                    <p className="info_s">
                      <span className="com_point_txt">홍길동</span> 
                      <span className="info_txt dot">좋아요 <span className="cnt">54</span></span>
                      <span className="info_txt dot">댓글 <span className="cnt">54</span></span>
                    </p>
                  </div>
                  <span className="icon_chat">
                    <img src={iconChat} alt="chat bot" />
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="com_card_item">
                  <div className="info">
                    <p className="tit">직장생활, 경력에 따라 관계와 위치가 달라지는 이유</p>
                    <p className="desc">요새 문득 드는 느끼는 것이 있다면, 직장생활의 경력이 쌓이고 위치가 달라질수록 직장과 나, 리더와 나의 관계도 점점 달라진다는 것이다.</p>
                    <p className="info_s">
                      <span className="com_point_txt">홍길동</span> 
                      <span className="info_txt dot">좋아요 <span className="cnt">54</span></span>
                      <span className="info_txt dot">댓글 <span className="cnt">54</span></span>
                    </p>
                  </div>
                  <span className="icon_chat">
                    <img src={iconChat} alt="chat bot" />
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="com_card_item">
                  <div className="info">
                    <p className="tit">직장생활, 경력에 따라 관계와 위치가 달라지는 이유</p>
                    <p className="desc">요새 문득 드는 느끼는 것이 있다면, 직장생활의 경력이 쌓이고 위치가 달라질수록 직장과 나, 리더와 나의 관계도 점점 달라진다는 것이다.</p>
                    <p className="info_s">
                      <span className="com_point_txt">홍길동</span> 
                      <span className="info_txt dot">좋아요 <span className="cnt">54</span></span>
                      <span className="info_txt dot">댓글 <span className="cnt">54</span></span>
                    </p>
                  </div>
                  <span className="icon_chat">
                    <img src={iconChat} alt="chat bot" />
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="com_card_item">
                  <div className="info">
                    <p className="tit">직장생활, 경력에 따라 관계와 위치가 달라지는 이유</p>
                    <p className="desc">요새 문득 드는 느끼는 것이 있다면, 직장생활의 경력이 쌓이고 위치가 달라질수록 직장과 나, 리더와 나의 관계도 점점 달라진다는 것이다.</p>
                    <p className="info_s">
                      <span className="com_point_txt">홍길동</span> 
                      <span className="info_txt dot">좋아요 <span className="cnt">54</span></span>
                      <span className="info_txt dot">댓글 <span className="cnt">54</span></span>
                    </p>
                  </div>
                  <span className="icon_chat">
                    <img src={iconChat} alt="chat bot" />
                  </span>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="custom_pagination community"></div>
          </div>
        </div>
      </section>
      {/* 1:1 Managing */}
      <section className="sec_managing">
        <div className="com_center_wrap">
          <div className="tit_wrap center">
            <h2 className="tit">당신만을 위한 1:1 매니징 서비스!</h2>
          </div>
          <ul className="list">
            <li className="item">
              <div className="box">
                <div className="info">
                  <p className="tit">서류부터 실제 면접 준비까지전문가가 도와드려요!</p>
                  <div className="info_txt">엔지니어 경력자들이 대거 포진해 있는 엔지니어스에서 제안서도 작성해드려요!</div>
                </div>
                <p className="bg">
                  <img src={bgManage01} className="bg_img" alt="bg" />
                </p>
              </div>
            </li>
            <li className="item">
              <div className="box">
                <div className="info">
                  <p className="tit">엔지니어스만의 시스템 적극구직을 이용해보세요.</p>
                  <div className="info_txt">최대한 빨리 취업하고 싶을때 좋아요!</div>
                </div>
                <p className="bg">
                  <img src={bgManage02} className="bg_img" alt="bg" />
                </p>
              </div>
            </li>
            <li className="item">
              <div className="box">
                <div className="info">
                  <p className="tit">이력서를 바탕으로 전문가가 직접 작성하는 구인 제안서</p>
                  <div className="info_txt">엔지니어 경력자들이 대거 포진해 있는 엔지니어스에서 제안서도 작성해드려요!</div>
                </div>
                <p className="bg">
                  <img src={bgManage03} className="bg_img" alt="bg" />
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Index;

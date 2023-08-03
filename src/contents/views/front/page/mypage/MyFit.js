/* eslint-disable */
import React, {useState, useCallback} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow,Controller,FreeMode,Scrollbar } from "swiper";	// 추가
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/scrollbar";
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';

function MyFit() {
  const [questionSwiper, setQuestionSwiper] = useState(null);
  const [questionJobSwiper, setQuestionJobSwiper] = useState(null);
  const [benefitSwiper, setBenefitSwiper] = useState(null);
  const [tabState, setTabState] = useState(0);
  const tab = [
    { text: "조직적합성", value: 0 },
    { text: "직무적합성", value: 1 },
    { text: "복리후생", value: 2 }
  ];
  const questionData = [
    { title: "Q1. 선호하는 근무 형태는?", question: '0' },
    { title: "Q2. 선호하는 근무 형태는?", question: '1' },
    { title: "Q3. 선호하는 근무 형태는?", question: '2' },
    { title: "Q4. 선호하는 근무 형태는?", question: '2' },
  ];
  const questionBenefitData = [
    { title: "다음 중 본인이 가장 원하는 복리후생은?", question: '0' },
    { title: "Q2. 다음 중 본인이 가장 원하는 복리후생은?", question: '1' },
    { title: "Q3. 다음 중 본인이 가장 원하는 복리후생은?", question: '2' },
  ];
  const renderTab = useCallback(() => {
    return tab.map((v, idx) => {
      return (
        <button key={idx} className={`tab ${tabState === v.value && "active" || ""}`} onClick={() => setTabState(v.value)}>
          {v.text}
        </button>
      );
    });
  }, [tab]);
  return (
    <main className='com_mypage p_myFit'>
      <div className='com_center_wrap'>
        <Lnb PageTitle="나의 성향" />
        <div className='container'>
          <h2 className='com_pg_tit'>나의 성향
            <span className="notice">설문을 완료하면 1000p를 드려요!</span>
          </h2>
          <div className="com_pg_tab">
            {renderTab()}
          </div>
          {tabState === 0 && (
            <section className="tab_content">
              <section className="sec_survey">
                <div className="tit">조직적합성</div>
                <div className="swiper_wrap companyFit">
                  <div className="custom_pagination">
                    <div className="swiper-scrollbar"></div>
                    <div className="swiper-button-prev"></div>   
                    <div className="swiper_fraction"></div>
                    {/* <div className="swiper-button-next"></div> */}
                  </div>
                  <Swiper
                    modules={[Pagination,Controller,Navigation,Scrollbar]}
                    onSwiper={setQuestionSwiper}
                    controller={{ control: questionSwiper }}
                    navigation={{
                      nextEl: '.companyFit .swiper-button-next',
                      prevEl: '.companyFit .swiper-button-prev',
                    }}
                    pagination= {{
                      el: '.companyFit .swiper_fraction',
                      type: 'custom',
                      renderCustom: function (swiper, current, total) {
                        return '<span class="com_swiper_fraction current">' + current + '</span> / <span class="com_swiper_fraction">' + total + '<span>';
                      }
                    }}
                    autoplay={true}
                    scrollbar={true}
                    slidesPerView={1}
                  >
                    {questionData.map((item,index) => (
                    <SwiperSlide key={index}>
                    <div className="q_wrap">
                      <p className="q_tit">{item.title}</p>
                      <ul className="q_list">
                        <li className="q_item">
                          <input type="radio" name="type" id="type1" className="com_chk"/><label htmlFor='type1'>정규직</label>
                        </li>
                        <li className="q_item">
                          <input type="radio" name="type" id="type2" className="com_chk"/><label htmlFor='type2'>계약직</label>
                        </li>
                        <li className="q_item">
                          <input type="radio" name="type" id="type3" className="com_chk"/><label htmlFor='type3'>프리랜서</label>
                        </li>
                        <li className="q_item">
                          <input type="radio" name="type" id="type4" className="com_chk"/><label htmlFor='type4'>상관없음</label>
                        </li>
                      </ul>
                    </div>
                    </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </section>
              <div className="com_btn_wrap center">
                <button className="com_btn bg blue m">제출하기</button>
              </div>
            </section>
            ) || tabState === 1 && (
              <section className="tab_content">
                <section className="sec_survey">
                  <div className="tit">직무적합성</div>
                  <p className="notice">태그는 5개까지 선택 가능합니다.</p>
                  <div className="swiper_wrap jobFit">
                    <div className="custom_pagination">
                      <div className="swiper-scrollbar"></div>
                      <div className="swiper-button-prev"></div>   
                      <div className="swiper_fraction"></div>
                      {/* <div className="swiper-button-next"></div> */}
                    </div>
                    <Swiper
                      modules={[Pagination,Controller,Navigation,Scrollbar]}
                      onSwiper={setQuestionJobSwiper}
                      controller={{ control: questionJobSwiper }}
                      navigation={{
                        nextEl: '.jobFit .swiper-button-next',
                        prevEl: '.jobFit .swiper-button-prev',
                      }}
                      pagination= {{
                        el: '.jobFit .swiper_fraction',
                        type: 'custom',
                        renderCustom: function (swiper, current, total) {
                          return '<span class="com_swiper_fraction current">' + current + '</span> / <span class="com_swiper_fraction">' + total + '<span>';
                        }
                      }}
                      autoplay={true}
                      scrollbar={true}
                      slidesPerView={1}
                    >
                      {questionData.map((item,index) => (
                      <SwiperSlide key={index}>
                      <div className="q_wrap">
                        <p className="q_tit">역량</p>
                        <ul className="com_tag_list type_select">
                          <li className="com_btn bg white s">문제해결</li>
                          <li className="com_btn bg white s">자기학습</li>
                          <li className="com_btn bg white s">문제도출</li>
                          <li className="com_btn bg white s">융합적 사고</li>
                          <li className="com_btn bg white s">커뮤니케이션</li>
                          <li className="com_btn bg white s">창의력</li>
                          <li className="com_btn bg white s">시스템이해</li>
                          <li className="com_btn bg white s">응용력</li>
                          <li className="com_btn bg white s">외국어</li>
                        </ul>
                      </div>
                      <div className="q_wrap">
                        <p className="q_tit">가치</p>
                        <ul className="com_tag_list type_select">
                          <li className="com_btn bg white s active">문제해결</li>
                          <li className="com_btn bg white s">자기학습</li>
                          <li className="com_btn bg white s">문제도출</li>
                          <li className="com_btn bg white s">융합적 사고</li>
                          <li className="com_btn bg white s">커뮤니케이션</li>
                          <li className="com_btn bg white s">창의력</li>
                          <li className="com_btn bg white s">시스템이해</li>
                          <li className="com_btn bg white s">응용력</li>
                          <li className="com_btn bg white s">외국어</li>
                          <li className="com_btn bg white s">자기학습</li>
                          <li className="com_btn bg white s">문제도출</li>
                          <li className="com_btn bg white s">융합적 사고</li>
                          <li className="com_btn bg white s">커뮤니케이션</li>
                          <li className="com_btn bg white s">창의력</li>
                          <li className="com_btn bg white s">시스템이해</li>
                          <li className="com_btn bg white s">응용력</li>
                          <li className="com_btn bg white s">외국어</li>
                        </ul>
                      </div>
                      </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </section>
                <div className="com_btn_wrap center">
                  <button className="com_btn bg blue m">제출하기</button>
                </div>
            </section>
            ) || tabState === 2 && (
            <section className="tab_content">
              <section className="sec_survey">
                <div className="tit">복리후생</div>
                <div className="swiper_wrap benefit">
                  <div className="custom_pagination">
                    <div className="swiper-scrollbar"></div>
                    <div className="swiper-button-prev"></div>   
                    <div className="swiper_fraction"></div>
                    {/* <div className="swiper-button-next"></div> */}
                  </div>
                  <Swiper
                    modules={[Pagination,Controller,Navigation,Scrollbar]}
                    onSwiper={setBenefitSwiper}
                    controller={{ control: benefitSwiper }}
                    navigation={{
                      nextEl: '.benefit .swiper-button-next',
                      prevEl: '.benefit .swiper-button-prev',
                    }}
                    pagination= {{
                      el: '.benefit .swiper_fraction',
                      type: 'custom',
                      renderCustom: function (swiper, current, total) {
                        return '<span class="com_swiper_fraction current">' + current + '</span> / <span class="com_swiper_fraction">' + total + '<span>';
                      }
                    }}
                    autoplay={true}
                    scrollbar={true}
                    slidesPerView={1}
                  >
                    {questionBenefitData.map((item,index) => (
                    <SwiperSlide key={index}>
                    <div className="q_wrap">
                      <div className="q_tit">{item.title}</div>
                      <ul className="q_list">
                        <li className="q_item">
                          <input type="radio" name="benefit" id="benefit1" className="com_chk"/><label htmlFor='benefit1'>출퇴근 유연제 (유연근무제, 탄력근무제)</label>
                        </li>
                        <li className="q_item">
                          <input type="radio" name="benefit" id="benefit2" className="com_chk"/><label htmlFor='benefit2'>재택근무제</label>
                        </li>
                        <li className="q_item">
                          <input type="radio" name="benefit" id="benefit3" className="com_chk"/><label htmlFor='benefit3'>직원 대출제도 운영</label>
                        </li>
                        <li className="q_item">
                          <input type="radio" name="benefit" id="benefit4" className="com_chk"/><label htmlFor='benefit4'>사내 동호회 지원</label>
                        </li>
                      </ul>
                    </div>
                    </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </section>
              <div className="com_btn_wrap center">
                <button className="com_btn bg blue m">제출하기</button>
              </div>
            </section>
          )}
        </div>
      </div>
      {/* top button */}
      <BtnTop />
    </main>
  );
}

export default MyFit;

import React from 'react';
import '../../assets/scss/page/seminar.scss';
import ImgSeminar01 from '../../assets/img/img_seminar01.png';
import ImgSeminar02 from '../../assets/img/img_seminar02.png';
import ImgSeminar03 from '../../assets/img/img_seminar03.png';
import ImgSeminar04 from '../../assets/img/img_seminar04.png';
import Item from './_Item';
import Paging from '../../component/Inc/Paging';

function List() {
  const seminar = [
    {
      title: 'Future of Work 2022',
      img: ImgSeminar01,
      address: {
        schedule: '2022-12-04 15:00',
        venue: '서울특별시 강남구 봉은사로 211 10F',
        capacity: '10 / 20명'
      },
      participationStatus: true
    },
    {
      title: 'Future of Work 2022',
      img: ImgSeminar02,
      address: {
        schedule: '2022-12-04 15:00',
        venue: '서울특별시 강남구 봉은사로 211 10F',
        capacity: '10 / 20명'
      },
      participationStatus: false
    },
    {
      title: '로봇기술 관련 세미나 개최',
      img: ImgSeminar03,
      address: {
        schedule: '2022-12-04 15:00',
        venue: '서울특별시 강남구 봉은사로 211 10F',
        capacity: '10 / 20명'
      },
      participationStatus: false
    },
    {
      title: '2023년 글로벌 산업세미나 개최 - 신산업세미나입니다.',
      img: ImgSeminar04,
      address: {
        schedule: '2022-12-04 15:00',
        venue: '서울특별시 강남구 봉은사로 211 10F',
        capacity: '10 / 20명'
      },
      participationStatus: false
    },
    {
      title: 'Future of Work 2022',
      img: ImgSeminar01,
      address: {
        schedule: '2022-12-04 15:00',
        venue: '서울특별시 강남구 봉은사로 211 10F',
        capacity: '10 / 20명'
      },
      participationStatus: false
    },
    {
      title: 'Future of Work 2022',
      img: ImgSeminar02,
      address: {
        schedule: '2022-12-04 15:00',
        venue: '서울특별시 강남구 봉은사로 211 10F',
        capacity: '10 / 20명'
      },
      participationStatus: false
    },
    {
      title: '로봇기술 관련 세미나 개최',
      img: ImgSeminar03,
      address: {
        schedule: '2022-12-04 15:00',
        venue: '서울특별시 강남구 봉은사로 211 10F',
        capacity: '10 / 20명'
      },
      participationStatus: false
    },
    {
      title: '2023년 글로벌 산업세미나 개최 - 신산업세미나입니다.',
      img: ImgSeminar04,
      address: {
        schedule: '2022-12-04 15:00',
        venue: '서울특별시 강남구 봉은사로 211 10F',
        capacity: '10 / 20명'
      },
      participationStatus: false
    },
  ];
  return (
    <main className="p_seminar">
      {/* long banner */}
      <section className="sec_banner">
      </section>
      <section className="sec_seminar">
        <div className="com_center_wrap">
          <div className="com_sub_tit_wrap">
            <div className="pg_tit_wrap">
              <h2 className="com_pg_tit">세미나</h2>
            </div>
          </div>
          <div className="input_box icon_search">
            <input placeholder='키워드를 입력하세요' type="text" className="input" />
          </div>
          <div className="swiper_wrap">
            <div className="list_wrap">
              <ul className="list">
                {seminar.map((item,index) => (
                  <Item key={index}
                    title={item.title}
                    img={item.img}
                    schedule={item.address.schedule}
                    venue={item.address.venue}
                    capacity={item.address.capacity}
                    status={item.participationStatus}
                  />
                ))}
              </ul>
            </div>
            <Paging />
          </div>
        </div>
      </section>
    </main>
  )
}

export default List
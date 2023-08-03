import React from 'react';
import ImgSeminar from "../../assets/img/img_seminar.jpg";
import { Link } from 'react-router-dom';
import BtnTop from '../../component/Inc/BtnTop';

function Detail() {
  return (
    <main className="com_detail p_magazine_detail">
      <div className="com_center_wrap flex">
        <section className="sec_detail">
          <div className="title_wrap">
            <h2 className="tit">미래 디자인 트렌드를 보여 주는‘2022’개막디자인미래 디자인 트렌드를 보여 주는‘2022’개막디자인</h2>
            <p className="time">2022.11.24 14:00:20</p>
            <div className="hashtags">
              <span className="hash">#디자인트렌드</span>
              <span className="hash">#메가 임팩트</span>
              <span className="hash">#비즈니스</span>
              <span className="hash">#국제 컨퍼런스</span>
              <span className="hash">#B2B 비즈니스</span>
            </div>
          </div>
          <div className="description_wrap">
            <img src={ImgSeminar} alt="" className="image" />
            <p>11월 23일 15시에 aT센터에서 산업부 박일준 차관, 구자근 국회의원, 한국디자인단체총연합회 김현선 회장, 서울디자인재단 권영걸 이사장, 디자인하우스 이영혜 대표 등 디자인업계를 대표하는 인사들이 참여한 가운데 개막식이 개최됐다.</p>
            <p>특히, 이번 행사는‘메가임팩트 디자인트렌드 2023+’를 주제로 라이프스타일, 기술, 컬러, 미래디자인 등 디자인 산업의 트렌드를 보여주며, 디자인 비즈니스 기회를 제공하는</p>
            <p>①디자인 전시, ②국제 컨퍼런스, ③디자인대상 및 우수디자인 시상식, ④B2B 디자인 비즈니스 매칭 행사, ⑤디자이너 잡 페어, ⑥디자인 진흥사업 성과 공유회 등 다양한 행사가 진행되며, 온라인(designkorea.kidp.or.kr)에서도 실시간으로 관람이 가능하다.</p>
          </div>
          <div className="button_wrap">
            <Link to={'/Magazine'} className="com_btn blue payment">목록으로</Link>
          </div>
        </section>
        <section className="sec_other">
          <div className="list magazine_list">
            <div className="heading">다른 매거진</div>
            <div className="content_wrap">
              <img src={ImgSeminar} alt="thumbnail" className="img" />
              <div className="description">
                <p className="title">미래 디자인 트렌드를 보여 주는 ‘디자인코리아 2023’개막</p>
                <div className="hashtags">
                  <span className="hash">#디자인트렌드</span>
                  <span className="hash">#메가 임팩트</span>
                  <span className="hash">#비즈니스</span>
                </div>
              </div>
            </div>
            <div className="content_wrap">
              <img src={ImgSeminar} alt="thumbnail" className="img" />
              <div className="description">
                <p className="title">미래 디자인 트렌드를 보여 주는 ‘디자인코리아 2023’개막</p>
                <div className="hashtags">
                  <span className="hash">#디자인트렌드</span>
                  <span className="hash">#메가 임팩트</span>
                  <span className="hash">#비즈니스</span>
                </div>
              </div>
            </div>
            <div className="content_wrap">
              <img src={ImgSeminar} alt="thumbnail" className="img" />
              <div className="description">
                <p className="title">미래 디자인 트렌드를 보여 주는 ‘디자인코리아 2023’개막</p>
                <div className="hashtags">
                  <span className="hash">#디자인트렌드</span>
                  <span className="hash">#메가 임팩트</span>
                  <span className="hash">#비즈니스</span>
                </div>
              </div>
            </div>
            <div className="content_wrap">
              <img src={ImgSeminar} alt="thumbnail" className="img" />
              <div className="description">
                <p className="title">미래 디자인 트렌드를 보여 주는 ‘디자인코리아 2023’개막</p>
                <div className="hashtags">
                  <span className="hash">#디자인트렌드</span>
                  <span className="hash">#메가 임팩트</span>
                  <span className="hash">#비즈니스</span>
                </div>
              </div>
            </div>
            <div className="content_wrap">
              <img src={ImgSeminar} alt="thumbnail" className="img" />
              <div className="description">
                <p className="title">미래 디자인 트렌드를 보여 주는 ‘디자인코리아 2023’개막</p>
                <div className="hashtags">
                  <span className="hash">#디자인트렌드</span>
                  <span className="hash">#메가 임팩트</span>
                  <span className="hash">#비즈니스</span>
                </div>
              </div>
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
import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';

function ProductInsight() {
  return (
    <>
      <main className='com_mypage p_product_insight'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="상품 관리" MenuProduct="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>상품 관리</h2>
            <section className='com_pg_tab'>
              <Link to="/front/Mypage/ProductInsight" className='tab active'>인사이트 상품</Link>
              <Link to="/front/Mypage/ProductMentoring" className='tab'>멘토링 상품</Link>
            </section>
            <section className='com_board_list__top'>
              <article className='btn_wrap'>
                <button className='com_btn blue oval xs'>삭제</button>
              </article>
            </section>
            <table className='com_board_list'>
              <colgroup><col width="6%"/><col/><col width="13%"/><col width="10%"/><col width="10%"/><col width="10%"/><col width="13%"/><col width="10%"/></colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>상품명</th>
                  <th>카테고리</th>
                  <th>조회 수</th>
                  <th>구매자 수</th>
                  <th>댓글 수</th>
                  <th>등록일</th>
                  <th>관리</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='chk_field'>
                    <input type='checkbox' className='com_chk' id='chk01'/><label htmlFor="chk01"></label>
                  </td>
                  <td className='tit_field'>자동차 설비에 관한 A~Z</td>
                  <td className='state_field'>자동차 설비</td>
                  <td className='info_field'><span className="th_m">조회 수 :</span>1201</td>
                  <td className='info_field'><span className="th_m">구매자 수 :</span>1201</td>
                  <td className='info_field last'><span className="th_m">댓글 수 :</span>36</td>
                  <td className='date_field'><span className="th_m">등록일 :</span>22.10.26</td>
                  <td className='btn_field'><button className='com_btn oval line gray s'>수정</button></td>
                </tr>
              </tbody>
            </table>
            <Paging />
          </div>
        </div>
        {/* top button */}
        <BtnTop />
      </main>
    </>
  );
}

export default ProductInsight;

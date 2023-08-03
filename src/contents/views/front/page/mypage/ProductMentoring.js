/* eslint-disable */
import React, {useState, useCallback} from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';
import Modal from '../../component/Inc/Modal';

function ProductMentoring() {
  const [cateState, setCateState] = useState(0);
  const cate = [
    { text: "멘토링 상품 관리", value: 0 },
    { text: "멘티 관리", value: 1 },
    { text: "완료된 멘티", value: 2 },
  ];
  const renderCate = useCallback(() => {
    return cate.map((v, idx) => {
      return (
        <button key={idx} className={`cate ${cateState === v.value && "active"}`} onClick={() => setCateState(v.value)}>
          {v.text}
        </button>
      );
    });
  }, [cate]);
  const [modalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <main className='com_mypage p_myproduct'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="상품 관리" MenuProduct="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>상품 관리</h2>
            <section className='com_pg_tab'>
              <Link to="/front/Mypage/ProductInsight" className='tab'>인사이트 상품</Link>
              <Link to="/front/Mypage/ProductMentoring" className='tab active'>멘토링 상품</Link>
            </section>
            <section className='com_board_list__top'>
              <article className='com_cate'>
                {renderCate()}
              </article>
              <article className='btn_wrap'>
                <button className='com_btn blue oval xs'>삭제</button>
              </article>
            </section>
            {cateState === 0 && (
            <table className='com_board_list'>
              <colgroup><col width="6%"/><col/><col width="25%"/><col width="13%"/></colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>상품명</th>
                  <th>카테고리</th>
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
                  <td className='btn_field'><button className='com_btn oval line gray s'>수정</button></td>
                </tr>
              </tbody>
            </table>
            ) || cateState === 1 && (
            <table className='com_board_list'>
              <colgroup><col width="6%"/><col width="10%"/><col/><col width="13%"/><col width="13%"/><col width="17%"/><col width="15%"/></colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>멘티명</th>
                  <th>상품명</th>
                  <th>서비스 상품</th>
                  <th>결제금액</th>
                  <th>상태</th>
                  <th>채널</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='chk_field'>
                    <input type='checkbox' className='com_chk' id='chk01'/><label htmlFor="chk01"></label>
                  </td>
                  <td className='id_field'>abcd123</td>
                  <td className='tit_field'>자동차 설비에 관한 A~Z</td>
                  <td className='info_field'><span className='th_m'>서비스 상품 :</span><span className='com_pc'>[</span>화상미팅<span className='com_pc'>]</span></td>
                  <td className='info_field last'><span className="th_m">결제금액 :</span>22,000원</td>
                  <td className='accept_field'><span className='txt'>수락</span></td>
                  <td className='btn_field'><button className='com_btn oval line s'>화상미팅 (3/5)</button></td>
                </tr>
                <tr>
                  <td className='chk_field'>
                    <input type='checkbox' className='com_chk' id='chk01'/><label htmlFor="chk01"></label>
                  </td>
                  <td className='id_field'>abcd123</td>
                  <td className='tit_field'>자동차 설비에 관한 A~Z</td>
                  <td className='info_field'><span className='th_m'>서비스 상품 :</span><span className='com_pc'>[</span>화상미팅<span className='com_pc'>]</span></td>
                  <td className='info_field last'><span className="th_m">결제금액 :</span>22,000원</td>
                  <td className='accept_field'><button className='com_btn line gray s oval'>수락</button><button className='com_btn line gray s oval'>거절</button></td>
                  <td className='btn_field'><button className='com_btn oval line s'>화상미팅 (3/5)</button></td>
                </tr>
              </tbody>
            </table>
             ) || cateState === 2 && (
              <table className='com_board_list'>
              <colgroup><col width="6%"/><col width="10%"/><col/><col width="15%"/><col width="15%"/><col width="17%"/></colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>멘티명</th>
                  <th>상품명</th>
                  <th>서비스 상품</th>
                  <th>결제금액</th>
                  <th>추천서</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='chk_field'>
                    <input type='checkbox' className='com_chk' id='chk01'/><label htmlFor="chk01"></label>
                  </td>
                  <td className='id_field'>abcd123</td>
                  <td className='tit_field'>자동차 설비에 관한 A~Z</td>
                  <td className='info_field'><span className='th_m'>서비스 상품 :</span><span className='com_pc'>[</span>화상미팅<span className='com_pc'>]</span></td>
                  <td className='info_field last'><span className="th_m">결제금액 :</span>22,000원</td>
                  <td className='btn_field'><button className='com_btn oval line s' onClick={() => setModalOpen(true)}>추천서 작성</button></td>
                </tr>
              </tbody>
            </table>
            )}
            <Paging />
          </div>
        </div>
        {/* top button */}
        <BtnTop />
      </main>
      {/*멘토 추천서 팝업*/}
      <Modal open={modalOpen} close={handleCloseModal}  popSize="s">
        <section className='pop_tit'>멘토 추천서</section>
        <div className="content_container scroll">
          <ul className='com_input_sec'>
            <li className='tit_field'>제목</li>
            <li className='input_field'>
              <input type='text' placeholder='스펀지같은 흡수력의 홍길동 멘티'/>
            </li>
            <li className='tit_field'>멘티가 우수한 점</li>
            <li className='input_field'>
              <textarea/>
            </li>
          </ul>
        </div>
        <section className='btn_container'>
          <button className="com_btn blue s" onClick={() => handleCloseModal()}>확인</button>
          <button className="com_btn line blue s">취소</button>
        </section>
      </Modal>
    </>
  );
}

export default ProductMentoring;

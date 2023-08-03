/* eslint-disable */
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//image
import imgMentor03 from "../../assets/img/img_mentor03.png"
//component
import Lnb from './_Lnb';
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';
import Modal from '../../component/Inc/Modal';
import Upload from '../../component/Inc/Upload';

function Job() {  
  const [modalWriteOpen, setModalWriteOpen] = useState(false);
  const [statusState, setStatusState] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleCloseWriteModal = () => {
    setModalWriteOpen(false);
  };
  const [tabState, setTabState] = useState(0);
  const tab = [
    { text: "채용 공고 목록", value: 0 },
    { text: "채용 공고 등록", value: 1 },
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
    <>
      <main className='com_mypage com_company p_company_job'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="공고관리" MenuExchange="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>공고관리</h2>
            <div className="com_pg_tab">
              {renderTab()}
            </div>
            
            {tabState === 0 && (
              <div className="tab_content">
                <ul className="card_list">
                {[1,2,3,4,5].map((item, index) => (
                  <li className="item" key={index}>
                    <span className="status">모집중</span>
                    <Link to="/Company/JobDetail"><div className="tit">디스플레이 장비 엔지니어 최고 대우로 모십니다.</div></Link>
                    <div className="info">
                      <p className="info_s">
                        <span className="name">등록일</span><span className="bar"></span><span className="date">2023.01.01</span>
                      </p>
                      <p className="info_s">
                        <span className="name">마감일</span><span className="bar"></span><span className="date">2023.01.01</span>
                      </p>
                    </div>
                    <div className="com_btn_wrap">
                      <button className="com_btn xs line">세부 정보 수정</button>
                      <button className="com_btn xs bg blue" onClick={() =>{setModalOpen(true)}}>마감하기</button>
                    </div>
                    <button className="com_btn bg xxs gray oval btn_del">삭제</button>
                    {/* finish item */}
                    {statusState && 
                      <div className="com_overlay type_circle">
                        <div className="bg"></div>
                        <div className="alert_box">
                          <span className="txt">
                            마감된 공고
                          </span>
                        </div>
                      </div>
                    }
                  </li>
                ))}
                </ul>
                <Paging />
              </div>
            ) || tabState === 1 && (
              <div className="tab_content">
                <ul className='com_input_sec type_row'>
                  <li className='field_box'>
                    <span className="tit">공고 이미지</span>
                    <div className='input_box'>
                      <div className="input_wrap">
                        <div className="com_attach_section">
                          <Upload title="이미지 찾기" className="com_btn line s"/>
                          <p className="img_box">
                            <img src={imgMentor03} className="img_upload" alt="upload image" />
                            <button type="button" className="btn_del" onClick={() => {}}></button>
                          </p>
                          <span className="txt">공고 배경.jpg</span>
                          <span className="txt">170px * 170px 사이즈로 이미지를 올려주세요.</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='field_box'>
                    <span className="tit">공고 제목</span>
                    <div className='input_box'>
                      <input type='text' value='삼성 엔지니어 모십니다' className='input' />
                    </div>
                  </li>
                  <li className='field_box'>
                    <span className="tit">공고 태그</span>
                    <div className='input_box'>
                      <ul className="com_tag_list">
                        <li className="com_btn lightblue">#이직</li> 
                        <li className="com_btn lightblue">#재택근무</li>  
                        <li className="com_btn lightblue">#고연봉</li>  
                        <li className="com_btn lightblue">#엔지니어</li>
                      </ul>
                    </div>
                  </li>
                  <li className='field_box'>
                    <span className="tit">고용형태</span>
                    <div className='input_box'>
                      <select className="select s">
                        <option value="계약직">계약직</option>
                      </select>
                    </div>
                  </li>
                  <li className='field_box'>
                    <span className="tit">공고기간</span>
                    <div className='input_box'>
                      <div className="input_wrap date">
                        <article className='date_select type_input'>
                          <input type="date" className="com_datepicker" placeholder="2022. 01. 01"/>
                          <span className="icon">~</span>
                          <input type="date" className="com_datepicker" placeholder="2022. 01. 01"/>
                        </article>
                        <div className="chk_wrap">
                          <input type="checkbox" name="period" id="period" className="com_chk"/><label className='label' htmlFor='period'>상시채용</label>
                          <input type="checkbox" name="period1" id="period1" className="com_chk"/><label className='label' htmlFor='period1'>채용 시 마감</label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='field_box'>
                    <span className="tit">직무</span>
                    <div className='input_box'>
                      <div className="input_wrap">
                        <select className="select s">
                          <option value="전기">전기</option>
                        </select>
                        <select className="select s">
                          <option value="OrCAD">OrCAD</option>
                        </select>
                      </div>
                      <span className="txt">직무는 최대 3개까지 선택 가능합니다.</span>
                      <ul className="com_tag_list select_list">
                        <li className="com_btn lightblue">OrCAD</li> 
                        <li className="com_btn lightblue">어셈블리</li>  
                        <li className="com_btn lightblue">펌웨어</li>  
                      </ul>
                    </div>
                  </li>
                  <li className='field_box'>
                    <span className="tit">경력</span>
                    <div className='input_box'>
                      <div className="input_wrap ">
                        <input type='text' className='input input_carrer' />
                        <span className="icon">~</span>
                        <input type='text' className='input input_carrer' />
                        <span className="icon">년</span> 
                        <div className="chk_wrap">
                          <input type="radio" name="career" id="career" className="com_chk"/><label className='label' htmlFor='career'>신입</label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="field_box">
                    <span className="tit">근무지역</span>
                    <div className="input_box">
                      <div className="input_wrap">
                        <input type="text" placeholder="서울특별시 강남구 봉은사로 211" className="input" />
                        <button className="com_btn line s">주소찾기</button>
                      </div>
                    </div>
                  </li>
                  <li className='field_box'>
                    <span className="tit">주요업무</span>
                    <div className='input_box'>
                      <textarea className='textarea' placeholder='내용입력'>
                      </textarea>
                    </div>
                  </li>
                  <li className='field_box'>
                    <span className="tit">자격요건</span>
                    <div className='input_box'>
                      <textarea className='textarea' placeholder='내용입력'>
                      </textarea>
                    </div>
                  </li>
                  <li className='field_box'>
                    <span className="tit">우대사항</span>
                    <div className='input_box'>
                      <textarea className='textarea' placeholder='내용입력'>
                      </textarea>
                    </div>
                  </li>
                  <li className='field_box'>
                    <span className="tit">혜택 및 복지</span>
                    <div className='input_box'>
                      <textarea className='textarea' placeholder='내용입력'>
                      </textarea>
                    </div>
                  </li>
                </ul>
                <div className="com_btn_wrap center">
                  <button className="com_btn blue s" onClick={() => {setModalWriteOpen(true)}}>공고 등록</button>
                  <button className="com_btn line blue s">취소</button>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* top button */}
        <BtnTop />
        <Modal open={modalOpen} close={handleCloseModal} type="type_alert" >
          <div className="content_container scroll">
            <strong>공고를 마감 하시겠습니까?</strong>
          </div>
          <section className='btn_container'>
            <button className="com_btn blue s" onClick={() => {setStatusState(true); handleCloseModal();}}>확인</button>
            <button className="com_btn line blue s" onClick={() => handleCloseModal()}>취소</button>
          </section>
        </Modal>
        <Modal open={modalWriteOpen} close={handleCloseWriteModal} type="type_alert" >
          <div className="content_container scroll">
            <strong>공고를 등록 하시겠습니까?</strong>
          </div>
          <section className='btn_container'>
            <button className="com_btn blue s" onClick={() => {}}>확인</button>
            <button className="com_btn line blue s" onClick={() => handleCloseWriteModal()}>취소</button>
          </section>
        </Modal>
      </main>
    </>
  );
}

export default Job;

import React, { useState } from 'react'
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
import PopResume from './_PopResume';
import PopDesiredWork from './_PopDesiredWork';
import PopDesiredJob from './_PopDesiredJob';
import PopAddUrl1 from './_PopAddUrl1';
import PopAddFile from './_PopAddFile';
import PopAddUrl2 from './_PopAddUrl2';
//image
import MyCompanyLogo from '../../assets/img/logo.png';
import IconCamera from '../../assets/img/icon_camera.png';
import IconClose from '../../assets/img/icon_close.png';

function ResumeWriting() {
  const [resumeModal, setResumeModal] = useState(false);
  const [desireWorkModal, setDesireWorkModal] = useState(false);
  const [desireJobModal, setDesireJobModal] = useState(false);
  const [addUrlModal, setAddUrlModal] = useState(false);
  const [addUrl2Modal, setAddUrl2Modal] = useState(false);
  const [addFileModal, setAddFileModal] = useState(false);

  return (
    <main className='com_mypage p_resumewriting'>
      <div className='com_center_wrap'>
        <Lnb PageTitle="고객센터" MenuCs="active"/>
        <div className='container'>
          <h2 className='com_pg_tit'>이력서 작성</h2>
          <div className='com_input_description'>
            <div className="com_progress_wrapper">
              <p className="tit">이력서 완성도 <span className="exclaim">!</span></p>
              <div className="progress_bar tit text_blue"><span className='progress'><span className="filled"></span></span>70%</div>
              <div className="btn_wrapper">
                <button className="com_btn line">이력서 임시 저장</button>
                <button className="com_btn blue">이력서 작성완료</button>
              </div>
            </div>
            <ul className="form_wrapper">
              <li className="title_field">근무희망조건 <span className="required">*</span></li>
              <li className="decision_field com_bt">
                <select className='input' name="" id="">
                  <option value="-1">고용형태</option>
                </select>
                <input className='input' type="text" placeholder='희망연봉' />
                <input type="checkbox" name="decision" className='com_chk circle' id="decision" /><label htmlFor="decision" className="decision">면접 후 결정</label>
              </li>
              <li className="decision_field column com_bt">
                <div className="input_wrapper">
                  <button className="com_btn blue rounded">희망근무지 추가</button>
                  <p className="description">최대 3개의 근무지를 추가할 수 있습니다.</p>
                </div>
                <div className="hashtags">
                  <span className="com_hash">서울</span>
                  <span className="com_hash">경기</span>
                </div>
              </li>
              <li className="decision_field column b-none com_bt">
                <div className="input_wrapper">
                  <button className="com_btn blue rounded">희망 직무 추가</button>
                  <p className="description">최대 3개의 근무지를 추가할 수 있습니다.</p>
                </div>
                <div className="hashtags">
                  <span className="com_hash">IT &gt; 웹프로그래머</span>
                  <span className="com_hash">건축 &gt; 시공/현장/감리/공무</span>
                  <span className="com_hash">교육 &gt; 자격증 기술,전문교육</span>
                </div>
              </li>
              <li className="title_field mb-0">인적사항 <span className="required">*</span></li>
              <li className="personal_field">
                <div className="photo">
                  <p className="title">이력서 사진 <span className="icon_pencil"></span></p>
                  <div className="icon_camera">
                    <img src={IconCamera} alt="camera icon" className="img_camera" />
                  </div>
                </div>
                <div className="input_field">
                  <div className="com_input_sec">
                    <label htmlFor="name" className="tit">이름</label>
                    <input type="text" id='name' className='input' placeholder='이름을 입력해주세요.' />
                  </div>
                  <div className="com_input_sec">
                    <label htmlFor="name" className="tit">연락처</label>
                    <div className="contact_wrapper">
                      <input type="text" className='input' /> -
                      <input type="text" className='input' /> -
                      <input type="text" className='input' />
                    </div>
                  </div>
                  <div className="com_input_sec">
                    <label htmlFor="birth" className="tit">생년월일</label>
                    <input type="text" className='input' placeholder='ex : 1990.01.25' />
                  </div>
                  <div className="com_input_sec">
                    <label htmlFor="birth" className="tit">생년월일</label>
                    <div className="radio_wrapper">
                    <input type="radio" name="gender" className='com_chk circle' id="male" /><label htmlFor="male" className="gender">남성</label>
                    <input type="radio" name="gender" className='com_chk circle' id="female" /><label htmlFor="female" className="gender">여성</label>
                    </div>
                  </div>
                  <div className="com_input_sec">
                    <label htmlFor="email" className="tit">이메일</label>
                    <input type="text" placeholder='@ 포함 입력' className='input' />
                  </div>
                  <div className="com_input_sec input_box icon_search">
                    <label htmlFor="address" className="tit">주소</label>
                    <input type="text" className='input' />
                  </div>
                </div>
              </li>
              <li className="title_field">학력 <span className="required">*</span></li>
              <li className="education_wrapper">
                <div className="education_field com_bt">
                  <div className="university">
                    <select name="" id="" className='input' value='대학교'>
                      <option value="-1">대학교</option>
                    </select>
                    <input type="text" placeholder='연세대학교' value='연세대학교' className="input" />
                  </div>
                  <input type="text" className="input department" value='건축과' placeholder='건축과' />
                  <div className="date">
                    <input type="date" placeholder='입학년월' name="" id="" className='input icon_calender' />
                    <input type="date" placeholder='졸업년월' name="" id="" className='input icon_calender' />
                    <select name="" id="" className='input status'>
                      <option value="-1">졸업..</option>
                    </select>
                    <button><img className="com_icon_close" src={IconClose} alt='close_icon' /></button>
                  </div>
                </div>
                <div className="education_field com_bt">
                  <div className="university">
                    <select name="" id="" className='input' value='대학교'>
                      <option value="-1">대학교</option>
                    </select>
                    <input type="text" placeholder='연세대학교' className="input" />
                  </div>
                  <input type="text" className="input department" placeholder='건축과' />
                  <div className="date">
                    <input type="date" placeholder='입학년월' name="" id="" className='input icon_calender' />
                    <input type="date" placeholder='졸업년월' name="" id="" className='input icon_calender' />
                    <select name="" id="" className='input status'>
                      <option value="-1">졸업..</option>
                    </select>
                    <button><img className="com_icon_close" src={IconClose} alt='close_icon' /></button>
                  </div>
                </div>
                <button className="com_btn blue"><span className='addition'>+</span> 추가</button>
              </li>
              <li className="title_field">인증경력 <span className='desc'> 경력 정보를 불러오면 경력 인증마크가 채워져요!</span> <span className="right">경력 불러오기</span></li>
              <li className="certification_wrapper">
                <div className="certification_field com_bt">
                  <div className="input_wrapper">
                    <input type="text" className="input label" value='Awesome' disabled />
                    <div className="department">
                      <input type="text" className="input" placeholder='부서명' />
                      <input type="text" className="input" placeholder='직책' />
                    </div>
                    <div className="time">
                      <input type="text" className="input label" value='2006.03' disabled />
                      <input type="text" className="input label" value='2009.02' disabled />
                      <input type="text" className="input label" value='재직' disabled />
                    </div>
                    <img src={MyCompanyLogo} alt="" className="logo" />
                  </div>
                  <textarea placeholder='상세설명을 200자 이내로 입력해주세요.' name="" id="" cols="30" rows="10" className="textarea"></textarea>
                </div>
                <div className="certification_field com_bt">
                  <p className="desc">수행 프로젝트: 상기 재직 중 수행했던 프로젝트별로 기재해주세요.</p>
                  <div className="input_wrapper">
                    <input type="text" className="input label" placeholder='프로젝트명' />
                    <div className="department">
                      <input type="date" className="input" placeholder='부서명' />
                      <input type="date" className="input" placeholder='직책' />
                    </div>
                    <div className="time">
                      <input type="text" className="input label" placeholder='프로젝트 사용 툴' />
                      <input type="text" className="input label" placeholder='발주처' />
                    </div>
                    <button><img className="com_icon_close" src={IconClose} alt='close_icon' /></button>
                  </div>
                  <textarea placeholder='프로젝트 상세 설명 영역' name="" id="" cols="30" rows="10" className="textarea"></textarea>
                </div>
                <button className="com_btn blue"><span className='addition'>+</span> 추가</button>
              </li>
              <li className="title_field">추가경력</li>
              <li className="certification_wrapper">
                <div className="certification_field com_bt">
                  <div className="input_wrapper">
                    <input type="text" className="input label" value='Awesome' />
                    <div className="department">
                      <input type="text" className="input" placeholder='부서명' value='연세대학교' />
                      <input type="text" className="input" placeholder='직책' value='건축과' />
                    </div>
                    <div className="time">
                      <input type="text" className="input label" value='2006.03' />
                      <input type="text" className="input label" value='2009.02' />
                      <input type="text" className="input label" value='재직' />
                    </div>
                    <button><img className="com_icon_close" src={IconClose} alt='close_icon' /></button>
                  </div>
                  <textarea placeholder='상세설명을 200자 이내로 입력해주세요.' name="" id="" cols="30" rows="10" className="textarea">Awesome에서 기획팀으로 50개 ai 매칭을 진행했으며, 다양한 클라이언트와 내부 개발팀들과 소중한 경험을 체험했습니다.</textarea>
                </div>
                <div className="certification_field com_bt">
                  <p className="desc">수행 프로젝트: 상기 재직 중 수행했던 프로젝트별로 기재해주세요.</p>
                  <div className="input_wrapper">
                    <input type="text" className="input label" placeholder='프로젝트명' />
                    <div className="department">
                      <input type="date" className="input" placeholder='부서명' />
                      <input type="date" className="input" placeholder='직책' />
                    </div>
                    <div className="time">
                      <input type="text" className="input label" placeholder='프로젝트 사용 툴' />
                      <input type="text" className="input label" placeholder='발주처' />
                    </div>
                    <button><img className="com_icon_close" src={IconClose} alt='close_icon' /></button>
                  </div>
                  <textarea placeholder='프로젝트 상세 설명 영역' name="" id="" cols="30" rows="10" className="textarea"></textarea>
                </div>
                <button className="com_btn blue"><span className='addition'>+</span>경력추가</button>
                <button className="com_btn blue"><span className='addition'>+</span>프로젝트 추가</button>
              </li>
              <li className="title_field">자격증</li>
              <li className="certificate_wrapper">
                <div className="certificate_field com_bt">
                  <div className="wrapper">
                    <input type="text" className="input" value='자동차 차체 수리 기능사' />
                  </div>
                  <div className='s'>
                    <input type="text" className="input" value='한국산업인력공단' />
                    <input type="text" className="input" value='2017.12' />
                    <button className='btn'><img className="com_icon_close" src={IconClose} alt='close_icon' /></button>
                  </div>
                </div>
                <div className="certificate_field com_bt">
                  <div className="wrapper icon_search">
                    <input type="text" className="input" placeholder='자격증명을 입력해주세요.' />
                  </div>
                  <div className='s'>
                    <input type="text" className="input" placeholder='발행처를 입력해주세요.' />
                    <input type="text" className="input" placeholder='취득월을 입력해주세요.' />
                    <button className='btn'><img className="com_icon_close" src={IconClose} alt='close_icon' /></button>
                  </div>
                </div>
                <button className="com_btn blue"><span className='addition'>+</span>추가</button>
              </li>
              <li className="title_field">교육</li>
              <li className="education_detail_field com_bt">
                <div className="input_wrapper">
                  <div className="input_box">
                    <input type="text" className='input' placeholder='교육명' />
                    <input type="text" className='input' placeholder='교육기관' />
                  </div>
                  <div className="date">
                    <input type="date" className='input' name="" id="" />
                    <input type="date" className='input' name="" id="" />
                  </div>
                  <button><img className="com_icon_close md" src={IconClose} alt='close_icon' /></button>
                </div>
                <input type="text" className="input description" placeholder='상세설명 입력' />
                <button><img className="com_icon_close sm" src={IconClose} alt='close_icon' /></button>
              </li>
              <li className="title_field">보유 스킬</li>
              <li className="textarea_field com_bt">
                <textarea name="" id="" cols="30" rows="10" className="input" placeholder='보유 스킬 상세'></textarea>
              </li>
              <li className="title_field">TOOL</li>
              <li className="textarea_field com_bt">
                <textarea name="" id="" cols="30" rows="10" className="input" placeholder='Tool 상세'></textarea>
              </li>
              <li className="title_field">링크 <span className="right">내 첨부파일</span></li>
              <li className="link_wrapper">
                <div className="link_field">
                  <input type="text" className="input" />
                  <button><img className="com_icon_close" src={IconClose} alt='close_icon' /></button>
                </div>
                <div className="link_field">
                  <input type="text" className="input" />
                  <button><img className="com_icon_close" src={IconClose} alt='close_icon' /></button>
                </div>
                <button className="com_btn blue"><span className='addition'>+</span>URL 추가</button>
                <button className="com_btn blue"><span className='addition'>+</span>파일추가</button>
              </li>
              <li className="title_field">자기소개</li>
              <li className="textarea_field">
                <textarea name="" id="" cols="30" rows="10" className="textarea_input">저는 목표를 달성하기 위해 항상 최선을 다합니다. 체크 리스트를 이용하여 하루 목표를 세우고 매일 달성량을 확인하며 계획한 목표를 최대한 이루기 위해 노력하고 있습니다. 롯데케미칼은 연간 450만 톤에 이르는 국내 화학사 1위의 에틸렌 생산량을 통해 독보적인</textarea>
                <p className="count">( 0 / 500)</p>
              </li>
              <li className="button_wrapper">
                <button className="com_btn line">이력서 임시 저장</button>
                <button className="com_btn blue">이력서 작성완료</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* top button */}
      <BtnTop />
      <PopResume open={resumeModal} close={() => setResumeModal(false)} />
      <PopDesiredWork open={desireWorkModal} close={() => setDesireWorkModal(false)} />
      <PopDesiredJob open={desireJobModal} close={() => setDesireJobModal(false)} />
      <PopAddUrl1 open={addUrlModal} close={() => setAddUrlModal(false)} />
      <PopAddUrl2 open={addUrl2Modal} close={() => setAddUrl2Modal(false)} />
      <PopAddFile open={addFileModal} close={() => setAddFileModal(false)} />
    </main>
  )
}

export default ResumeWriting
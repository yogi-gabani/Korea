
import React , { useState} from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//image
import Logo from '../../assets/img/logo.png';
//component
import Modal from '../../component/Inc/Modal';

function Join() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCompanyOpen, setModalCompanyOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleCloseCompanyModal = () => {
    setModalCompanyOpen(false);
  };
  return (
    <>
      <main className='p_join com_member'>
        <h1 className='logo'><Link to="/front/"><img src={Logo} alt="logo" /></Link></h1>
        <div className='box'>
          <section className='com_tab'>
            <button className='tab active'>일반회원</button>
            <button className='tab'>기업회원</button>
          </section>
          {/*기업회원 start*/}
          <h2 className='com_input_sec__tit'>기업정보</h2>
          <ul className='com_input_sec'>
            <li className='tit_field'>사업자등록번호<i className='icon_must'>*</i></li>
            <li className='input_field'>
              <div className='input_wrap'>
                <input type='text' placeholder='사업자등록번호를 입력해주세요.(-제외)' className='input'/>
                <button className='com_btn line blue s' onClick={() => setModalCompanyOpen(true)}>중복확인</button>
              </div>
            </li>
            <li className='tit_field'>회사명<i className='icon_must'>*</i></li>
            <li className='input_field'><input type='text' placeholder='회사명을 입력해주세요.' className='input'/></li>
            <li className='tit_field'>대표자명<i className='icon_must'>*</i></li>
            <li className='input_field'><input type='text' placeholder='대표자명을 입력해주세요.' className='input'/></li>
            <li className='tit_field'>회사주소<i className='icon_must'>*</i></li>
            <li className='input_field'>
              <div className='input_wrap'>
                <input type='text' className='input'/>
                <button className='com_btn line blue s'>주소 찾기</button>
              </div>
              <input type='text' className='input' placeholder='상세주소를 입력해주세요.'/>
            </li>
            <li className='tit_field'>사업자등록증 첨부<i className='v'>*</i></li>
            <li className='input_field'>
              <div className='input_wrap'>
                <input type='text' className='input' placeholder='사업자등록증을 첨부해주세요.'/>
                <button className='com_btn line blue s'>파일 찾기</button>
              </div>
            </li>
          </ul>
          <h2 className='com_input_sec__tit'>담당자 정보</h2>
          {/*기업회원 end*/}
          <ul className='com_input_sec'>
            <li className='tit_field'>아이디<i className='icon_must'>*</i></li>
            <li className='input_field'>
              <div className='input_wrap'>
                <input type='text' placeholder='아이디를 입력해주세요' className='input'/>
                <button className='com_btn line blue s'>중복확인</button>
              </div>
            </li>
            <li className='tit_field'>비밀번호<i className='icon_must'>*</i></li>
            <li className='input_field'>
              <input type='password' placeholder='비밀번호를 입력해주세요'/>
              <p className='tip_txt'>영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자 이하로 입력해주세요.</p>
            </li>
            <li className='input_field'>
              <input type='password' placeholder='비밀번호를 한번 더 입력해주세요'/>
            </li>
            <li className='tit_field'>이름<i className='icon_must'>*</i></li>
            <li className='input_field'><input type='text' placeholder='이름을 입력해주세요'/></li>
            <li className='tit_field'>닉네임<i className='icon_must'>*</i></li>
            <li className='input_field'>
              <div className='input_wrap'>
                <input type='text' placeholder='닉네임을 입력해주세요' className='input'/>
                <button className='com_btn line blue s'>중복확인</button>
              </div>
            </li>
            <li className='tit_field'>이메일<i className='icon_must'>*</i></li>
            <li className='input_field'>
              <div className='input_wrap'>
                <input type='text' placeholder='이메일을 입력해주세요.(@ 포함)' className='input'/>
                <button className='com_btn line blue s'>중복확인</button>
              </div>
            </li>
            {/*일반회원*/}
            <li className='tit_field'>추천인</li>
            <li className='input_field'><input type='text' placeholder='추천인 코드를 입력해주세요'/></li>
            {/*기업회원*/}
            <li className='tit_field'>부서<i className='icon_must'>*</i></li>
            <li className='input_field'><input type='text' placeholder='담당자분의 부서명을 입력해주세요.'/></li>
            <li className='bottom_btn_field'>
              <button className='com_btn m blue line'>휴대폰 본인 인증</button>
            </li>
          </ul>
          <section className='com_agree_section'>
            <article className='all'>
              <input type="checkbox" className="com_chk" id='all'/><label htmlFor='all'>모두 동의합니다.</label>
            </article>
            <ul className='list'>
              <li className='item'>
                <div>
                  <input type="checkbox" className="com_chk" id='agree01'/><label htmlFor='agree01'>이용약관에 동의합니다. <span className='txt_required'>(필수)</span></label>
                </div>
                <button className='com_btn txt' onClick={() => setModalOpen(true)}>자세히</button>
              </li>
              <li className='item'>
                <div>
                  <input type="checkbox" className="com_chk" id='agree02'/><label htmlFor='agree02'>개인정보처리방침에 동의합니다. <span className='txt_required'>(필수)</span></label>
                </div>
                <button className='com_btn txt' onClick={() => setModalOpen(true)}>자세히</button>
              </li>
              <li className='item'>
                <div>
                  <input type="checkbox" className="com_chk" id='agree03'/><label htmlFor='agree03'>마케팅 활용(앱 push) 동의 및 광고 수신 동의 (선택)</label>
                </div>
                <button className='com_btn txt' onClick={() => setModalOpen(true)}>자세히</button>
              </li>
            </ul>
          </section>
          <section className='com_btn_wrap'>
            <button className='com_btn blue l'>가입 완료</button>
          </section>
        </div>
      </main>
      {/*약관내용 팝업*/}
      <Modal open={modalOpen} close={handleCloseModal}>
        <h2 className='pop_tit'>약관</h2>
        <div className="content_container scroll">
          약관내용
        </div>
      </Modal>
      {/*등록확인 팝업*/}
      <Modal open={modalCompanyOpen} close={handleCloseCompanyModal}>
        <h2 className='pop_tit'>등록 확인</h2>
        <div className="content_container scroll pop_company_chk">
          <h3 className='tit'>[회사명]으로 등록된 정보</h3>
          <section className='id_sec'>
            <article className='item'>[***d123]</article>
            <article className='item'>[***d123]</article>
            <article className='item'>[***d123]</article>
          </section>
          <section className='detail'>
          현재 총 3개의 아이디가 가입되어 있습니다.<br/>(중복가입은 한 사업체 당 5개까지 가능합니다.)
          </section>
          <section className='detail'>아이디를 추가 하시겠습니까?</section>
        </div>
        <div className='btn_container'>
          <button className='com_btn gray m'>취소</button>
          <button className='com_btn blue m'>확인</button>
        </div>
      </Modal>
    </>
  );
}

export default Join;

import BtnTop from '../../component/Inc/BtnTop';

function Write() {
  const tags = ['자동차 설비', '유용한', '설계'];
  return (
    <main className="com_write p_insight_write">
      <section className="sec_form">
        <h2 className="title">인사이트 등록</h2>
        <form method='post' className="form">
          <ul className="com_input_sec">
            <li className="tit_field">상품명</li>
            <li className='input_field'><input type='text' placeholder='상품명을 입력해주세요.' className='input'/></li>
            <li className="tit_field">카테고리</li>
            <li className='input_field'>
              <select className='category' name="category" id="category">
                <option value="-1">자동차 설비</option>
              </select>  
            </li>
            <li className="tit_field label_tag">
              <span>태그</span>
              <span className='text_blue'>복수 선택 가능</span>
            </li>
            <li className='input_field'>
              <div className="select">
                {tags.length > 0 && tags.map((tag, index) => <span key={index} className="item">{tag} <button type="button" className="btn_close" ></button></span>)}
                <select className='tag' name="tag" id="tag">
                  <option value="-1">자동차 설비</option>
                </select>
              </div>
            </li>
            <li className="tit_field">가격 설정</li>
            <li className='input_field'>
              <div className="input_box">
                <input type="text" id='price' placeholder='판매할 가격을 입력해주세요.' />
                <span className="price">P</span>
              </div>
            </li>
            <li className="tit_field">동영상 파일</li>
            <li className='input_field'>
              <div className="input_file">
                <label className='com_btn line' htmlFor="video">파일선택</label>
                <input type="file" id='video' className='video' />
                <span className='message'>파일의 용량은 500MB까지 가능합니다.</span>
              </div>
            </li>
            <li className="tit_field">동영상 썸네일</li>
            <li className="input_field">
              <div className="input_file">
                <label className='com_btn line' htmlFor="video">파일선택</label>
                <input type="file" id='video' className='video' />
                <span className='message'>Abcd123.jpg</span>
              </div>
            </li>
            <li className="tit_field">동영상 소개</li>
            <li className="input_field">
              <textarea placeholder='동영상 소개' name="intro" id="intro"></textarea>
              <span className="counter">0 / 3,000</span>
            </li>
          </ul>
          <div className="agree">
            <ul className="list">
              <li className="item">
                <input type="checkbox" name="personal" id="personal" className="com_chk"/><label className='label' htmlFor='personal'>개인정보 제3자 제공에 동의합니다. <span className='required'>(필수)</span></label>
                <span className='details'>자세히</span>
              </li>
              <li className="item">
                <input type="checkbox" name="terms" id="terms" className="com_chk"/><label className='label' htmlFor='terms'>판매자 이용 약관에 동의합니다. <span className='required'>(필수)</span></label>
                <span className='details'>자세히</span>
              </li>
            </ul>
          </div>
          <div className="com_btn_wrap">
            <button className="com_btn blue btn_registration">상품 등록</button>
          </div>
        </form>
      </section>
      {/* top button */}
      <BtnTop />
    </main>
  )
}

export default Write;
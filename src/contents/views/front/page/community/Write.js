import React, { useState } from 'react'
import BtnTop from '../../component/Inc/BtnTop';
import ImgInsight03 from '../../assets/img/img_insight03 .png';
import PopCategory from './_popCategory';
import PopCategoryMake from './_popCategoryMake';
import '../../assets/scss/page/community.scss';

function Write() {
  const tags = ['노무', '회사생활', '취업/이직', '인간관계', '대기업', '...'];
  const [currentCategory, setCurrentCategory] = useState(tags[0]);
  const [modalCategory, setModalCategory] = useState(false);
  const [modalCategoryMake, setModalCategoryMake] = useState(false);

  return (
    <main className="com_write p_community_write">
      <section className="sec_form">
        <h2 className="title">게시글 작성</h2>
        <form method='post' className="form">
          <ul className="com_input_sec">
            <li className="tit_field">카테고리 선택</li>
            <li className='input_field'>
              <div className="select">
                {tags.length > 0 && tags.map((tag, index) => <span key={index} onClick={() => setCurrentCategory(tag)} className={tag === currentCategory ? "item active" : "item"}>{tag}</span>)}
              </div>
            </li>
            <li className="tit_field">제목</li>
            <li className='input_field'><input type="text" id='title' placeholder='제목을 입력해주세요.' /></li>
            <li className="tit_field">내용</li>
            <li className="input_field">
              <textarea placeholder='내용 입력' className='detail' name="detail" id="detail"></textarea>
            </li>
            <li className="input_field">
              <div className="thumbnail_wrap">
                <img className='thumbnail' src={ImgInsight03} alt="" />
                <img className='thumbnail' src={ImgInsight03} alt="" />
                <img className='thumbnail' src={ImgInsight03} alt="" />
                <div className="thumbnail addNew">
                  <span className="plus">+</span>
                </div>
              </div>
            </li>
          </ul>
          <div className="com_btn_wrap">
            <button className="com_btn line btn_registration">작성취소</button>
            <button className="com_btn blue btn_registration">게시글 작성</button>
          </div>
        </form>
      </section>
      {/* top button */}
      <BtnTop />
      {/* Modal */}
      <PopCategory open={modalCategory} close={() => setModalCategory(false)} />
      <PopCategoryMake open={modalCategoryMake} close={() => setModalCategoryMake(false)} />
    </main>
  )
}

export default Write
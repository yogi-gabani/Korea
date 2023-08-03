import React from 'react';
import "../../assets/scss/page/mypage.scss";
import Modal from '../../component/Inc/Modal';

function ReviewWrite(props) {
  const { open, close } = props;
  return (
    <>
      <Modal open={open} close={close} popSize="s" type="pop_review">
        <section className='pop_tit'>후기 작성</section>
        <div className="content_container scroll">
          <div class="com_star_box">
            <input type="radio" name="star_radio" id="grade1" value="5" /><label for="grade1"></label>
            <input type="radio" name="star_radio" id="grade2" value="4"  /><label for="grade2"></label>
            <input type="radio" name="star_radio" id="grade3" value="3"  /><label for="grade3"></label>
            <input type="radio" name="star_radio" id="grade4" value="2"  /><label for="grade4"></label>
            <input type="radio" name="star_radio" id="grade5" value="1"  /><label for="grade5"></label>
          </div>
          <textarea placeholder='후기를 200자 이내로 작성해주세요.' />
        </div>
        <section className='btn_container'>
          <button className="com_btn blue s" >후기 작성</button>
          <button className="com_btn line blue s"  onClick={close}>취소</button>
        </section>
      </Modal>
    </>
  );
}

export default ReviewWrite;

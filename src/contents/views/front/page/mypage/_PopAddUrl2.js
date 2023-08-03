import React from 'react';
import Modal from '../../component/Inc/Modal';

function PopAddUrl2(props) {
  const { open, close } = props;
  return (
    <Modal open={open} close={close} type="pop_add_url lg">
      <h2 className="pop_tit type_center">URL 추가</h2>
      <div className="content_container">
        <table className='com_board_list'>
        <colgroup><col width="10%"/><col width="25%"/><col width="45%"/><col width="25%"/></colgroup>
          <thead>
            <tr>
              <th className='chk_field'><input type="checkbox" className="com_chk" /><label></label></th>
              <th>종류</th>
              <th>파일명</th>
              <th>지원일</th>
            </tr>
          </thead>
          <tbody>
            <tr className='q'>
              <td className='chk_field'><input type="checkbox" className="com_chk" id='agree01'/><label htmlFor='agree01'></label></td>
              <td className="state_field">포트폴리오</td>
              <td className='state_field'>포트폴리오.pptx</td>
              <td className='state_field'>22.11.14</td>
            </tr>
            <tr className='q'>
              <td className='chk_field'><input type="checkbox" className="com_chk" id=''/><label htmlFor=''></label></td>
              <td className="state_field">자격증</td>
              <td className='state_field'>자격증.jpg</td>
              <td className='state_field'>22.11.14</td>
            </tr>
            <tr className='q'>
              <td className='chk_field'><input type="checkbox" className="com_chk" id=''/><label htmlFor=''></label></td>
              <td className="state_field">SK</td>
              <td className='state_field'>Https://bit.ly12</td>
              <td className='state_field'>22.11.14</td>
            </tr>
            <tr className='q'>
              <td className='chk_field'><input type="checkbox" className="com_chk" id=''/><label htmlFor=''></label></td>
              <td className="state_field">삼성</td>
              <td className='state_field'>삼성 엔지니어 모십니다</td>
              <td className='state_field'>22.11.14</td>
            </tr>
          </tbody>
        </table>
        <section className='com_btn_wrap'>
          <button className="com_btn blue s">첨부하기</button>
        </section>
      </div>
    </Modal>
  )
}

export default PopAddUrl2;
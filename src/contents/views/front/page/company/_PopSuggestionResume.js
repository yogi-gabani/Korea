import React from 'react';
import Modal from '../../component/Inc/Modal';

function PopSuggestionResume(props) {
  const { open, close } = props;
  return (
    <Modal open={open} close={close} type="pop_recruit">
      <h2 className="pop_tit type_center">면접제안</h2>
      <div className="content_container scroll ">
        <p className="notice com_point_txt">엔지니어스 매니저 홍길동님이 보냅니다.<br />㈜ 삼성에서 OOO님과 면접을 희망요청이 왔습니다.</p>
        <div className="detail_txt">
          OOO님의 역량이 ㈜삼성 전기 엔지니어 포지션에 적합하다고 판단되어, 면접 요청을 제안합니다. <br /><br />
          이 제안은 22.11.17까지 유효합니다.<br /><br />
          (주) 삼성은 국내 최고의 대기업이며, 꾸준한 연구개발 투자와 고객만족 경영, 마케팅을 바탕으로 세계적인 기업으로 성장해왔습니다.<br /><br />

          일정: 2022.11.13 (수)<br />
          장소: 서울특별시 서초구 서초대로74길 11  2층<br /><br />

          세계적인 기업으로의 성장을 함께할 당신을
          기다리겠습니다!<br /><br />

          문의 이메일: abcd123@awesome8.kr<br />
          면접 날짜 수정이 필요할 경우 위 이메일로 회신 주세요.
        </div>
      </div>
      {props.children}
    </Modal>
  )
}

export default PopSuggestionResume;
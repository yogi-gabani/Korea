import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="com_center_wrap">
        <section className="link">
          <Link to="/front/Etc/Privacy" className="btn com_txt_point">개인정보 처리방침</Link>
          <span className="bar"></span>
          <Link to="/front/Etc/Terms" className="btn">서비스 이용약관</Link>
        </section>
        <section className="info">
          <address className="address">
            <div>
              상호명 : 엔지니어스 <span className="bar"></span>
              대표명 : 홍길동<span className="bar"></span>
              사업자번호 : 110-10-11111
            </div>
            <div>
              주소 : 서울특별시 강남구 봉은사로 211 그림바우빌딩 10층 
              <span className="bar"></span>
              개인정보책임자 : 엔지니어스
            </div>
          </address>
          <p className="copy">COPYRIGHT©  엔지니어스 INC. ALL RIGHTS RESERVED.</p>
        </section>
      </div>
    </footer>
  )
}
export default Footer;

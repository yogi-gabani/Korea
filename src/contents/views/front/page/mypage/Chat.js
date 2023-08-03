import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
import "../../assets/scss/page/chat.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
//image
import ProfileImg from "../../assets/img/img_mentor03.png";
import AddFileImg from "../../assets/img/icon_add_file.png";

function Chat() {
  return (
    <>
      <main className='com_mypage p_chat'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="결제 콘텐츠 목록" MenuPayContents="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>채팅방</h2>
            <div className='chat_wrap'>
              <section className="list_sec">
                <div className="list scroll">
                  <Link to="" className="link">
                    <article className="item selected">
                      <i className="com_icon_new"></i>
                      <p className="profile_img">{/*프로필 이미지 없음*/}</p>
                      <div className="info">
                        <p className="name">홍길동멘토</p>
                        <p className="preview">반도체 기술이 무엇인지 알려드립니다.</p>
                      </div>
                    </article>
                  </Link>
                  <Link to="" className="link">
                    <article className="item">
                      <i className="com_icon_new"></i>
                      <p className="profile_img">
                        <img src={ProfileImg} alt="" />
                      </p>
                      <div className="info">
                        <p className="name">홍길동멘토</p>
                        <p className="preview">반도체 기술이 무엇인지 알려드립니다.</p>
                      </div>
                    </article>
                  </Link>
                  <Link to="" className="link">
                    <article className="item">
                      <i className="com_icon_new"></i>
                      <p className="profile_img">
                        <img src={ProfileImg} alt="" />
                      </p>
                      <div className="info">
                        <p className="name">홍길동멘토</p>
                        <p className="preview">반도체 기술이 무엇인지 알려드립니다.</p>
                      </div>
                    </article>
                  </Link>
                  <Link to="" className="link">
                    <article className="item">
                      <i className="com_icon_new"></i>
                      <p className="profile_img">
                        <img src={ProfileImg} alt="" />
                      </p>
                      <div className="info">
                        <p className="name">홍길동멘토</p>
                        <p className="preview">반도체 기술이 무엇인지 알려드립니다.</p>
                      </div>
                    </article>
                  </Link>
                  <Link to="" className="link">
                    <article className="item">
                      <i className="com_icon_new"></i>
                      <p className="profile_img">
                        <img src={ProfileImg} alt="" />
                      </p>
                      <div className="info">
                        <p className="name">홍길동멘토</p>
                        <p className="preview">반도체 기술이 무엇인지 알려드립니다.</p>
                      </div>
                    </article>
                  </Link>
                  <Link to="" className="link">
                    <article className="item">
                      <i className="com_icon_new"></i>
                      <p className="profile_img">
                        <img src={ProfileImg} alt="" />
                      </p>
                      <div className="info">
                        <p className="name">홍길동멘토</p>
                        <p className="preview">반도체 기술이 무엇인지 알려드립니다.</p>
                      </div>
                    </article>
                  </Link>
                  <Link to="" className="link">
                    <article className="item">
                      <i className="com_icon_new"></i>
                      <p className="profile_img">
                        <img src={ProfileImg} alt="" />
                      </p>
                      <div className="info">
                        <p className="name">홍길동멘토</p>
                        <p className="preview">반도체 기술이 무엇인지 알려드립니다.</p>
                      </div>
                    </article>
                  </Link>
                  <Link to="" className="link">
                    <article className="item">
                      <i className="com_icon_new"></i>
                      <p className="profile_img">
                        <img src={ProfileImg} alt="" />
                      </p>
                      <div className="info">
                        <p className="name">홍길동멘토</p>
                        <p className="preview">반도체 기술이 무엇인지 알려드립니다.</p>
                      </div>
                    </article>
                  </Link>
                  <article className="no_data">
                    채팅내역이 없습니다.
                  </article>
                </div>
                <button className='com_btn blue s'>채팅방나가기</button>
              </section>
              <section className="chat_sec">
                <div className="chat_mid">
                  {/*채팅내용 스크롤*/}
                  <div className="scroll_body scroll">
                    <article className='notice'>멘티님께서 입장하셨습니다.</article>
                    <p class='date_area'><span>2023.5.30</span></p>
                    <article className="get">
                      <div className="wrap">
                        <div className="box">
                          안녕하세요 멘티님 <br />
                        </div>
                        <div className='date_field'>오전 10:00</div>
                      </div>
                    </article>
                    <article className="get">
                      <div className="wrap">
                        <div className="img">
                          <img src={ProfileImg} alt="" />
                        </div>
                        <div className='date_field'>오전 10:00</div>
                      </div>
                    </article>
                    <article className="send">
                      <div className="wrap">
                        <div className="box">
                          안녕하세요. 멘토님<br/>
                          지금은 수업중이라서 일 끝나고 7시쯤 뵙고 싶은데 괜찮을까요?
                        </div>
                        <div className='date_field'>오전 10:00</div>
                      </div>
                    </article>
                    <article className="send">
                      <div className="wrap">
                        <div className="img">
                          <img src={ProfileImg} alt="" />
                        </div>
                        <div className='date_field'>오전 10:00</div>
                      </div>
                    </article>
                    <article className="send">
                      <div className="wrap">
                        <div className="img">
                          <img src={ProfileImg} alt="" />
                        </div>
                        <div className='date_field'>오전 10:00</div>
                      </div>
                    </article>
                    <article className="send">
                      <div className="wrap">
                        <div className="img">
                          <img src={ProfileImg} alt="" />
                        </div>
                        <div className='date_field'>오전 10:00</div>
                      </div>
                    </article>
                    <article className="send">
                      <div className="wrap">
                        <div className="img">
                          <img src={ProfileImg} alt="" />
                        </div>
                        <div className='date_field'>오전 10:00</div>
                      </div>
                    </article>
                    <article className="send">
                      <div className="wrap">
                        <div className="img">
                          <img src={ProfileImg} alt="" />
                        </div>
                        <div className='date_field'>오전 10:00</div>
                      </div>
                    </article>
                  </div>
                  {/*메시지 입력*/}
                  <article className="chat_bottom">
                    <button className="btn_file"><img src={AddFileImg} alt=""/></button>
                    <textarea name="input_msg" id="input_msg" placeholder="내용 입력" className="textarea"></textarea>
                    <button id="submit" className="com_btn white s btn_send">전송</button>
                  </article>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* top button */}
        <BtnTop />
      </main>
    </>
  );
}

export default Chat;

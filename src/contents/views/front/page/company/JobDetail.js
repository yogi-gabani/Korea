/* eslint-disable */
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
//image
import imgJobDesc from "../../assets/img/img_job_desc.png"
//component
import Lnb from './_Lnb';
import JobItem from '../match/_JobItem';
import BtnTop from '../../component/Inc/BtnTop';
import CompanyInfo from './_CompanyInfo';

function Job() {  
  const [tabState, setTabState] = useState(0);
  const tab = [
    { text: "주요 업무", value: 0 },
    { text: "회사 소개", value: 1 },
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
    <main className='com_mypage com_company p_company_job'>
      <div className='com_center_wrap'>
        <Lnb PageTitle="공고관리" MenuExchange="active"/>
        <div className='container'>
          {/* company info */}
          <div className="com_top_box">
            <CompanyInfo />
          </div>
          <hr className='divider' />
          <div className="com_pg_tab type_detail">
            {renderTab()}
          </div>
          {tabState === 0 && (
            <div className="tab_content">
              <ul className="com_tag_list">
                <li className="com_btn lightblue">#이직</li>
                <li className="com_btn lightblue">#재택근무</li>
                <li className="com_btn lightblue">#고연봉</li>
                <li className="com_btn lightblue">#엔지니어</li>
                <li className="com_btn lightblue">#삼성</li>
              </ul>
              <div className="detail_wrap">
                <img src={imgJobDesc} alt="" />
                <p className="tit">주요업무</p>
                <p className="txt">
                  구성원 경험 관리의 핵심인 성과 / 몰입 / 성장 / 보상에서 겪는 문제를 발견하고 쉬운 해결책을 제시합니다. 
                  • 문제 정의: 레몬베이스 프로덕트 디자이너는 PO와 함께 고객의 pain point를 발견하고 쉬운 해결책을 제시합니다.
                  • 사용자 경험: 담당하는 제품의 사용자 경험에 오너십을 갖고 사용자의 문제를 해결하는 디자인을 합니다.
                  • 지속적인 가설 검증: 동료 PO, 소프트웨어 엔지니어와 함께 가설 수립  빠른 실행을 통한 데이터 도출  가설 검증의 지속적인 iteration을 통해 세상에 필요한 서비스로 안착시킵니다.
                </p>
                <p className="tit">자격요건</p>
                <p className="txt">
                  • 사용자의 문제를 정성적, 정량적 데이터를 기반으로 파악하여 이를 근거로 제품을 설계하고 출시해 본 경험이 있는 분 (2년 이상)
                  • 회사의 규모나 산업군에 따라 다른 사용자의 복잡한 요구 사항들을 이해하고 구조화된 UIUX를 설계할 수 있는 분
                  • Web UI에 대한 이해도가 있는 분
                </p>
                <p className="tit">우대사항</p>
                <p className="txt">
                  • B2B 프로덕트 또는 어드민 화면을 구축/개선해본 분
                  • 디자인 시스템을 설계하거나 관련하여 엔지니어와 협업한 경험이 있는 분
                  • UT, 인뎁스 인터뷰, 설문조사 등 UX 리서치 경험이 있거나 UX 리서처와 협업한 경험이 있는 분

                  [지원 시, 아래 질문에 대한 답변을 함께 제출해 주세요.] 
                  1. 레몬베이스를 어떻게 알게 되셨나요? 지원 이유는 무엇인가요?
                  2. 역할과 필수 요건을 봤을 때, 스스로 적합하다고 생각하는 이유를 알려주세요.
                  3. 이 포지션으로 일하게 될 경우 가장 기대하는 바는 무엇인가요?
                </p>
                <p className="tit">혜택 및 복지</p>
                <p className="txt">
                  • 나의 퍼포먼스, 팀의 협업에 가장 도움이 되는 방식을 스스로 정하는, 자율적인 리모트 워킹으로 일하고 있어요.
                  • 출근과 퇴근, 모든 휴식 시간을 크루 개개인의 자율에 맡기고 있으며, 최소한의 규칙(08:00~11:00 사이에 출근)만 운영합니다.
                  • 다양한 업무용 도구(SaaS)를 적극적으로 발굴하여 사용합니다. Slack, Notion, Jira, Figma, Tellspin 등을 사용하고 있어요.
                  • MacBook Pro/Air, iMac, LG 노트북 중 원하는 장비를 선택하여 사용합니다.
                  • 크루의 건강을 챙깁니다. 월 20만 원 운동비를 지급하고, 낮에도 1시간 자유롭게 운동할 수 있어요.
                  • 개인의 성과와 성장에 도움이 된다면 어떤 교육이든 한도 없이 지원합니다.
                  • 회사와 구성원의 성장을 위해 필요한 책은 무엇이든 한도 없이 구매하고, 개인 소장도 가능해요.
                  • 장기적인 목돈 마련을 지원하고자 내일채움공제를 운영합니다. 
                  • 더 나은 업무 환경을 끝없이 고민하는 피플 매니저가 있습니다. 무엇이든 제안하고, 논의합니다.
                </p>
              </div>
              <hr className='divider' />
              <div className="com_btn_wrap center full">
                <Link to="/front/Company/Job" className="com_btn blue s">채용 공고 목록으로</Link>
                <button className="com_btn line blue s">공고 수정</button>
              </div>
            </div>
          ) || tabState === 1 && (
            <div className="tab_content">
              <div className="detail_wrap">
                <img src={imgJobDesc} alt="" />
                <p className='txt'>
                  신영은 약 50만㎡에 달하는 청주 대농공장 부지를 매입하여 '청주 지웰시티'를 완성하였습니다. 상업과 문화, 오락 비즈니스 등 다양한 시설을 이용할 수 있는
                  주거생활공간과 공공청사, 호텔, 주민공동시설, 쇼핑몰 등의 기능을 추가하여 '다기능 자족복합도시' 건설을 표방하였습니다.
                  그 결과 청주 지웰시티는 중부권 대표 랜드마크로 자리하였고, 청주시 전체의 개발 속도를 한 단계 앞당긴 결정적인 계기가 되었습니다.다양한 시설을 이용할 수 있는
                  주거생활공간과 공공청사, 호텔, 주민공동시설, 쇼핑몰 등의 기능을 추가하여 '다기능 자족복합도시' 건설을 표방하였습니다.
                  그 결과 청주 지웰시티는 중부권 대표 랜드마크로 자리하였고, 청주시 전체의 개발 속도를 한 단계 앞당긴 결정적인 계기가 되었습니다.
                </p>
                <img src={imgJobDesc} alt="" />
                <p className='txt'>
                  신영은 약 50만㎡에 달하는 청주 대농공장 부지를 매입하여 '청주 지웰시티'를 완성하였습니다. 상업과 문화, 오락 비즈니스 등 다양한 시설을 이용할 수 있는
                  주거생활공간과 공공청사, 호텔, 주민공동시설, 쇼핑몰 등의 기능을 추가하여 '다기능 자족복합도시' 건설을 표방하였습니다.
                  그 결과 청주 지웰시티는 중부권 대표 랜드마크로 자리하였고, 청주시 전체의 개발 속도를 한 단계 앞당긴 결정적인 계기가 되었습니다.다양한 시설을 이용할 수 있는
                  주거생활공간과 공공청사, 호텔, 주민공동시설, 쇼핑몰 등의 기능을 추가하여 '다기능 자족복합도시' 건설을 표방하였습니다.
                  그 결과 청주 지웰시티는 중부권 대표 랜드마크로 자리하였고, 청주시 전체의 개발 속도를 한 단계 앞당긴 결정적인 계기가 되었습니다.
                </p>
              </div>
              <hr className='divider' />
              {/* job list */}
              <div className="job_wrap">
                <div className="pg_tit_wrap">
                  <h2 className="com_pg_tit">채용공고</h2>
                </div>
                <div className="list_wrap">
                  <ul className="list">
                    {[1,2,3].map((item,index) => (
                      <JobItem key={index}/>
                    ))}
                  </ul>
                  <button className="btn_more_job arrow_right">더보기</button>
                </div>
              </div>
              <div className="com_btn_wrap center">
                <Link to="/front/Company/Job" className="com_btn blue s">채용 공고 목록으로</Link>
                <button className="com_btn line blue s">공고 수정</button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* top button */}
      <BtnTop />
    </main>
  );
}

export default Job;

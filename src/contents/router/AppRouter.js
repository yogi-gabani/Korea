import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../views/front/assets/scss/styles.scss";

//loyout
import Header from '../views/front/component/Inc/Header'
import Footer from '../views/front/component/Inc/Footer';
//main
import Main from '../views/front/page/main/Index';
import JobList from '../views/front/page/main/JobList';
//member
import Login from '../views/front/page/member/Login';
import Approving from '../views/front/page/member/Approving.js';
import NoApprove from '../views/front/page/member/NoApprove.js';
import Approve from '../views/front/page/member/Approve.js';
import Join from '../views/front/page/member/Join.js';
import JoinOk from '../views/front/page/member/JoinOk.js';
import SearchId from '../views/front/page/member/SearchId.js';
import SearchIdOk from '../views/front/page/member/SearchIdOk.js';
import SearchPw from '../views/front/page/member/SearchPw.js';
import NewPw from '../views/front/page/member/NewPw.js';
//match
import MatchList from '../views/front/page/match/MatchList';
//mentoring
import MentoringList from '../views/front/page/mentoring/List';
import MentoringIntro from '../views/front/page/mentoring/Intro';
import MentoringListMember from '../views/front/page/mentoring/ListMember';
import MentoringProduct from '../views/front/page/mentoring/MentoringProduct';
import MentoringPay from '../views/front/page/mentoring/MentoringPay';
//community
import CommunityList from '../views/front/page/community/List';
import CommunityWrite from '../views/front/page/community/Write';
import CommunityDetail from '../views/front/page/community/Detail';
//magazine
import MagazineList from '../views/front/page/magazine/List';
import MagazineRecommendList from '../views/front/page/magazine/RecommendList';
import MagazineDetail from '../views/front/page/magazine/Detail';
//insight
import InsightList from '../views/front/page/insight/List';
import InsightWrite from '../views/front/page/insight/Write';
import InsightDetail from '../views/front/page/insight/Detail';
import Pay from '../views/front/page/insight/Pay';
//seminar
import SeminarList from '../views/front/page/seminar/List';
import SeminarDetail from '../views/front/page/seminar/Detail';
import SeminarApply from '../views/front/page/seminar/Apply';
//mypage
import Exchange from '../views/front/page/mypage/Exchange.js';
import Account from '../views/front/page/mypage/Account.js';
import ExchangeApplication from '../views/front/page/mypage/ExchangeApplication.js';
import Push from '../views/front/page/mypage/Push.js';
import Faq from '../views/front/page/mypage/Faq.js';
import Inquiry from '../views/front/page/mypage/Inquiry.js';
import ProductInsight from '../views/front/page/mypage/ProductInsight.js';
import ProductMentoring from '../views/front/page/mypage/ProductMentoring';
import MyCommunity from '../views/front/page/mypage/Community';
import MySeminar from '../views/front/page/mypage/Seminar';
import PayList from '../views/front/page/mypage/PayList';
import PayInsight from '../views/front/page/mypage/PayInsight';
import PayMentoring from '../views/front/page/mypage/PayMentoring';
import Webcam from '../views/front/page/mypage/Webcam';
import Chat from '../views/front/page/mypage/Chat';
import QnaList from '../views/front/page/mypage/QnaList';
import QnaWrite from '../views/front/page/mypage/QnaWrite';
import QnaView from '../views/front/page/mypage/QnaView';
import MatchRead from '../views/front/page/mypage/MatchRead';
import MatchUnread from '../views/front/page/mypage/MatchUnread';
import MatchInterview from '../views/front/page/mypage/MatchInterview';
import MatchRecruit from '../views/front/page/mypage/MatchRecruit';
import MatchWishCompany from '../views/front/page/mypage/MatchWishCompany';
import MyFit from '../views/front/page/mypage/MyFit';
import JobSearchApply from '../views/front/page/mypage/JobSearchApply';
import ExchangeAccount from '../views/front/page/mypage/ExchangeAccount';
import PointCharge from '../views/front/page/mypage/PointCharge';
import Profile from '../views/front/page/mypage/Profile';
import Leave from '../views/front/page/mypage/Leave';
import Attachment from '../views/front/page/mypage/Attachment';
import MyResume from '../views/front/page/mypage/MyResume';
import ResumeWriting from '../views/front/page/mypage/ResumeWriting';
//compay mypage
import CompanyInfo from '../views/front/page/company/Info.js';
import CompanyJob from '../views/front/page/company/Job.js';
import CompanyJobDetail from '../views/front/page/company/JobDetail.js';
import CompanyRecruit from '../views/front/page/company/Recruit.js';
import CompanyRecruitDetail from '../views/front/page/company/RecruitDetail.js';
import CompanyResume from '../views/front/page/company/Resume.js';
import CompanyRecruitStatus from '../views/front/page/company/RecruitStatus.js';
import CompanyVision from '../views/front/page/company/Vision.js';
import CompanyCs from '../views/front/page/company/Cs.js';
import CompanyNotice from '../views/front/page/company/Notice.js';
//etc
import Terms from '../views/front/page/etc/Terms.js';
import Privacy from '../views/front/page/etc/Privacy.js';

function AppRouter() {

  const PathMember = window.location.pathname.startsWith("/Member");
  const renderHeader = () => {
    if (PathMember) {
      return <></>;
    } else {
      return <Header />;
    }
  };
  const renderFooter = () => {
    if (PathMember) {
      return <></>;
    } else {
      return <Footer />;
    }
  };
  return (
    <>
      <BrowserRouter>
        {renderHeader()}
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="/JobList" element={<JobList />} />

          <Route path="/Member/Login" element={<Login />} />
          <Route path="/Member/Approving" element={<Approving />} />
          <Route path="/Member/NoApprove" element={<NoApprove />} />
          <Route path="/Member/Approve" element={<Approve />} />
          <Route path="/Member/Join" element={<Join />} />
          <Route path="/Member/JoinOk" element={<JoinOk />} />
          <Route path="/Member/SearchId" element={<SearchId />} />
          <Route path="/Member/SearchIdOk" element={<SearchIdOk />} />
          <Route path="/Member/SearchPw" element={<SearchPw />} />
          <Route path="/Member/NewPw" element={<NewPw />} />
          
          <Route path="/Community" element={<CommunityList />} />
          <Route path="/Community/Write" element={<CommunityWrite />} />
          <Route path="/Community/Detail" element={<CommunityDetail />} />

          <Route path="/Insight" element={<InsightList />} />
          <Route path="/Insight/Write" element={<InsightWrite />} />
          <Route path="/Insight/Detail" element={<InsightDetail />} />
          <Route path="/Insight/Pay" element={<Pay />} />
          
          <Route path="/Magazine" element={<MagazineList />} />
          <Route path="/Magazine/RecommendList" element={<MagazineRecommendList />} />
          <Route path="/Magazine/Detail" element={<MagazineDetail />} />

          <Route path="/Seminar" element={<SeminarList />} />
          <Route path="/Seminar/Detail" element={<SeminarDetail />} />
          <Route path="/Seminar/Apply" element={<SeminarApply />} />

          <Route path="/Match" element={<MatchList />} />
          <Route path="/Mentoring" element={<MentoringList />} />
          <Route path="/Mentoring/Intro" element={<MentoringIntro />} />
          <Route path="/Mentoring/ListMember" element={<MentoringListMember />} />
          <Route path="/Mentoring/MentoringProduct" element={<MentoringProduct />} />
          <Route path="/Mentoring/MentoringPay" element={<MentoringPay />} />

          <Route path="/Mypage/Exchange" element={<Exchange />} />
          <Route path="/Mypage/Account" element={<Account />} />
          <Route path="/Mypage/ExchangeApplication" element={<ExchangeApplication />} />
          <Route path="/Mypage/Push" element={<Push />} />
          <Route path="/Mypage/Faq" element={<Faq />} />
          <Route path="/Mypage/Inquiry" element={<Inquiry />} />
          <Route path="/Mypage/ProductInsight" element={<ProductInsight />} />
          <Route path="/Mypage/ProductMentoring" element={<ProductMentoring />} />
          <Route path="/Mypage/Community" element={<MyCommunity />} />
          <Route path="/Mypage/Seminar" element={<MySeminar />} />
          <Route path="/Mypage/PayList" element={<PayList />} />
          <Route path="/Mypage/PayInsight" element={<PayInsight />} />
          <Route path="/Mypage/PayMentoring" element={<PayMentoring />} />
          <Route path="/Mypage/Webcam" element={<Webcam />} />
          <Route path="/Mypage/Chat" element={<Chat />} />
          <Route path="/Mypage/QnaList" element={<QnaList />} />
          <Route path="/Mypage/QnaWrite" element={<QnaWrite />} />
          <Route path="/Mypage/QnaView" element={<QnaView />} />
          <Route path="/Mypage/MatchRead" element={<MatchRead />} />
          <Route path="/Mypage/MatchUnread" element={<MatchUnread />} />
          <Route path="/Mypage/MatchInterview" element={<MatchInterview />} />
          <Route path="/Mypage/MatchRecruit" element={<MatchRecruit />} />
          <Route path="/Mypage/MatchWishCompany" element={<MatchWishCompany />} />
          <Route path="/Mypage/Attachment" element={<Attachment />} />
          <Route path="/Mypage/MyResume" element={<MyResume />} />
          <Route path="/Mypage/ResumeWriting" element={<ResumeWriting />} />

          <Route path="/Mypage/MyFit" element={<MyFit />} />
          <Route path="/Mypage/JobSearchApply" element={<JobSearchApply />} />
          <Route path="/Mypage/ExchangeAccount" element={<ExchangeAccount />} />
          <Route path="/Mypage/PointCharge" element={<PointCharge />} />
          <Route path="/Mypage/Profile" element={<Profile />} />
          <Route path="/Mypage/Leave" element={<Leave />} />

          <Route path="/Company/Info" element={<CompanyInfo />} />
          <Route path="/Company/Job" element={<CompanyJob />} />
          <Route path="/Company/JobDetail" element={<CompanyJobDetail />} />
          <Route path="/Company/Recruit" element={<CompanyRecruit />} />
          <Route path="/Company/Vision" element={<CompanyVision />} />
          <Route path="/Company/Cs" element={<CompanyCs />} />
          <Route path="/Company/Notice" element={<CompanyNotice />} />
          <Route path="/Company/RecruitDetail" element={<CompanyRecruitDetail />} />
          <Route path="/Company/Resume" element={<CompanyResume />} />
          <Route path="/Company/RecruitStatus" element={<CompanyRecruitStatus />} />

          <Route path="/etc/Terms" element={<Terms/>}/>
          <Route path="/etc/Privacy" element={<Privacy/>}/>
          
        </Routes>
        {renderFooter()}
      </BrowserRouter>
    </>
  );
}

export default AppRouter;

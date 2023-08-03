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

  const PathMember = window.location.pathname.startsWith("/front/Member");
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
          <Route path="/front" element={<Main />} />
          <Route path="/front/JobList" element={<JobList />} />

          <Route path="/front/Member/Login" element={<Login />} />
          <Route path="/front/Member/Approving" element={<Approving />} />
          <Route path="/front/Member/NoApprove" element={<NoApprove />} />
          <Route path="/front/Member/Approve" element={<Approve />} />
          <Route path="/front/Member/Join" element={<Join />} />
          <Route path="/front/Member/JoinOk" element={<JoinOk />} />
          <Route path="/front/Member/SearchId" element={<SearchId />} />
          <Route path="/front/Member/SearchIdOk" element={<SearchIdOk />} />
          <Route path="/front/Member/SearchPw" element={<SearchPw />} />
          <Route path="/front/Member/NewPw" element={<NewPw />} />
          
          <Route path="/front/Community" element={<CommunityList />} />
          <Route path="/front/Community/Write" element={<CommunityWrite />} />
          <Route path="/front/Community/Detail" element={<CommunityDetail />} />

          <Route path="/front/Insight" element={<InsightList />} />
          <Route path="/front/Insight/Write" element={<InsightWrite />} />
          <Route path="/front/Insight/Detail" element={<InsightDetail />} />
          <Route path="/front/Insight/Pay" element={<Pay />} />
          
          <Route path="/front/Magazine" element={<MagazineList />} />
          <Route path="/front/Magazine/RecommendList" element={<MagazineRecommendList />} />
          <Route path="/front/Magazine/Detail" element={<MagazineDetail />} />

          <Route path="/front/Seminar" element={<SeminarList />} />
          <Route path="/front/Seminar/Detail" element={<SeminarDetail />} />
          <Route path="/front/Seminar/Apply" element={<SeminarApply />} />

          <Route path="/front/Match" element={<MatchList />} />
          <Route path="/front/Mentoring" element={<MentoringList />} />
          <Route path="/front/Mentoring/Intro" element={<MentoringIntro />} />
          <Route path="/front/Mentoring/ListMember" element={<MentoringListMember />} />
          <Route path="/front/Mentoring/MentoringProduct" element={<MentoringProduct />} />
          <Route path="/front/Mentoring/MentoringPay" element={<MentoringPay />} />

          <Route path="/front/Mypage/Exchange" element={<Exchange />} />
          <Route path="/front/Mypage/Account" element={<Account />} />
          <Route path="/front/Mypage/ExchangeApplication" element={<ExchangeApplication />} />
          <Route path="/front/Mypage/Push" element={<Push />} />
          <Route path="/front/Mypage/Faq" element={<Faq />} />
          <Route path="/front/Mypage/Inquiry" element={<Inquiry />} />
          <Route path="/front/Mypage/ProductInsight" element={<ProductInsight />} />
          <Route path="/front/Mypage/ProductMentoring" element={<ProductMentoring />} />
          <Route path="/front/Mypage/Community" element={<MyCommunity />} />
          <Route path="/front/Mypage/Seminar" element={<MySeminar />} />
          <Route path="/front/Mypage/PayList" element={<PayList />} />
          <Route path="/front/Mypage/PayInsight" element={<PayInsight />} />
          <Route path="/front/Mypage/PayMentoring" element={<PayMentoring />} />
          <Route path="/front/Mypage/Webcam" element={<Webcam />} />
          <Route path="/front/Mypage/Chat" element={<Chat />} />
          <Route path="/front/Mypage/QnaList" element={<QnaList />} />
          <Route path="/front/Mypage/QnaWrite" element={<QnaWrite />} />
          <Route path="/front/Mypage/QnaView" element={<QnaView />} />
          <Route path="/front/Mypage/MatchRead" element={<MatchRead />} />
          <Route path="/front/Mypage/MatchUnread" element={<MatchUnread />} />
          <Route path="/front/Mypage/MatchInterview" element={<MatchInterview />} />
          <Route path="/front/Mypage/MatchRecruit" element={<MatchRecruit />} />
          <Route path="/front/Mypage/MatchWishCompany" element={<MatchWishCompany />} />
          <Route path="/front/Mypage/Attachment" element={<Attachment />} />
          <Route path="/front/Mypage/MyResume" element={<MyResume />} />
          <Route path="/front/Mypage/ResumeWriting" element={<ResumeWriting />} />

          <Route path="/front/Mypage/MyFit" element={<MyFit />} />
          <Route path="/front/Mypage/JobSearchApply" element={<JobSearchApply />} />
          <Route path="/front/Mypage/ExchangeAccount" element={<ExchangeAccount />} />
          <Route path="/front/Mypage/PointCharge" element={<PointCharge />} />
          <Route path="/front/Mypage/Profile" element={<Profile />} />
          <Route path="/front/Mypage/Leave" element={<Leave />} />

          <Route path="/front/Company/Info" element={<CompanyInfo />} />
          <Route path="/front/Company/Job" element={<CompanyJob />} />
          <Route path="/front/Company/JobDetail" element={<CompanyJobDetail />} />
          <Route path="/front/Company/Recruit" element={<CompanyRecruit />} />
          <Route path="/front/Company/Vision" element={<CompanyVision />} />
          <Route path="/front/Company/Cs" element={<CompanyCs />} />
          <Route path="/front/Company/Notice" element={<CompanyNotice />} />
          <Route path="/front/Company/RecruitDetail" element={<CompanyRecruitDetail />} />
          <Route path="/front/Company/Resume" element={<CompanyResume />} />
          <Route path="/front/Company/RecruitStatus" element={<CompanyRecruitStatus />} />

          <Route path="/front/etc/Terms" element={<Terms/>}/>
          <Route path="/front/etc/Privacy" element={<Privacy/>}/>
          
        </Routes>
        {renderFooter()}
      </BrowserRouter>
    </>
  );
}

export default AppRouter;

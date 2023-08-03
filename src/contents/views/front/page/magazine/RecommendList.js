import React from 'react';
import Item from './_Item';
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';

function RecommendList() {
  return (
    <main className="p_recommend">
      <section className="sec_recommend">
        <div className="com_center_wrap">
          <div className="title_wrap">
            <h2 className='title'>COMPRESS</h2>
            <div className="btn_wrap">
              <select name="" id="" className="dropdown">
                <option value="전체">전체</option>
              </select>
              <button className="com_btn blue">매거진 홈으로</button>
            </div>
          </div>
          <div className="list_wrap">
            <ul className="list">
              {[1,2,3,4,5,6].map((item,index) => (
                <Item key={index}
                  title='미래 디자인 트렌드를 보여 주는 ‘디자인코리아 2023’개막'
                  description='산업통상자원부(이하 산업부)가 주최하고 한국디자인진흥원'
                />
              ))}
            </ul>
            <Paging />
          </div>
        </div>
      </section>
      {/* top button */}
      <BtnTop />
    </main>
  )
}

export default RecommendList
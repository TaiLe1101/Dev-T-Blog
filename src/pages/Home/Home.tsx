import { Row } from 'antd';
import { Col } from 'antd/es/grid';
import classNames from 'classnames/bind';
import CardCategory from '~/components/CardCategory';
import PostCard from '~/components/PostCard';
import SideBar from '~/components/SideBar';

import styles from './Home.module.scss';
import { postCardList } from './store';

const cx = classNames.bind(styles);

function Home() {
  document.title = 'Home Page';

  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <div className="home-inner">
          <div className={cx('wrapper-status')}>
            <Row gutter={[32, 32]}>
              <Col span={24} lg={{ span: 16 }}>
                <Row gutter={[32, 32]}>
                  {postCardList.map((card, index) => {
                    return (
                      <Col key={index} span={24} lg={{ span: 24 }}>
                        <PostCard
                          dateTime={card.dateTime}
                          desc={card.desc}
                          title={card.title}
                          titleImg={card.titleImg}
                          userName={card.userName}
                          image={card.image}
                          swap={card.swap}
                        ></PostCard>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
              <Col span={24} lg={{ span: 8 }}>
                <div className={cx('sidebar')}>
                  <SideBar></SideBar>
                </div>
              </Col>
            </Row>
          </div>
          <Row gutter={[24, 24]}>
            <Col span={24} lg={{ span: 6 }}>
              <CardCategory />
            </Col>
            <Col span={24} lg={{ span: 6 }}>
              <CardCategory />
            </Col>
            <Col span={24} lg={{ span: 6 }}>
              <CardCategory />
            </Col>
            <Col span={24} lg={{ span: 6 }}>
              <CardCategory />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Home;

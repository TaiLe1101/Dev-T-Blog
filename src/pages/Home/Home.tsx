import { Row } from 'antd';
import { Col } from 'antd/es/grid';
import classNames from 'classnames/bind';
import PostCard from '../../components/PostCard';

import styles from './Home.module.scss';
import { postCardList } from './store';

const cx = classNames.bind(styles);

function Home() {
  document.title = 'Home Page';

  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <div className="home-inner">
          <Row gutter={[32, 32]}>
            {postCardList.map((card, index) => {
              return (
                <Col key={index} span={24} lg={{ span: 24 }}>
                  <PostCard
                    title={card.title}
                    dateTime={card.dateTime}
                    desc={card.desc}
                    image={card.image}
                    titleImg={card.titleImg}
                    userName={card.userName}
                    swap={card.swap}
                  ></PostCard>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Home;

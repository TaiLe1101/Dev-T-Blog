import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

interface PropsType {
  children: React.ReactNode;
}

function DefaultLayout(props: PropsType) {
  const { children } = props;

  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('content')}>
        <div className="container">
          <Row gutter={[32, 32]}>
            <Col span={24} lg={{ span: 16 }}>
              <div className={cx('content-inner')}>{children}</div>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <SideBar />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;

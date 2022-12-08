import { Row } from 'antd';
import { Col } from 'antd/es/grid';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import CardCategory from '~/components/CardCategory';
import { PropsTypePostCard } from '~/components/PostCard/interfaces';
import SideBar from '~/components/SideBar';
import styles from './Home.module.scss';
import SpacePost from './SpacePost';
import { postCardList } from './store';
import Pagination from '~/components/Pagination';

const cx = classNames.bind(styles);

function Home() {
  document.title = 'Home Page';

  const [post] = useState<PropsTypePostCard[]>(postCardList);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage] = useState<number>(3);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFistPost = indexOfLastPost - postPerPage;
  const currentPost = post.slice(indexOfFistPost, indexOfLastPost);

  const handlePaginate = (pageNumber: number) => {
    window.scrollTo({ top: 210, behavior: 'smooth' });
    setCurrentPage(pageNumber);
  };

  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <div className="home-inner">
          <div className={cx('wrapper-status')}>
            <Row gutter={[32, 32]}>
              <Col span={24} lg={{ span: 16 }}>
                <div className={cx('wrapper-post')}>
                  <SpacePost listPost={currentPost} loading={loading}></SpacePost>
                  <Pagination postPerPage={postPerPage} totalPost={post.length} paginate={handlePaginate}></Pagination>
                </div>
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

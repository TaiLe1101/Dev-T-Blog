import { Row } from 'antd';
import { Col } from 'antd/es/grid';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';

import CardCategory from '~/components/CardCategory';
import { PropsTypePostCard } from '~/components/PostCard/interfaces';
import SideBar from '~/components/SideBar';
import Pagination from '~/components/Pagination';
import Loading from '~/components/Loading';

import { postCardList } from './store';
import SpacePost from './SpacePost';
import styles from './Home.module.scss';
import TitleBar from '~/components/TitleBar';
import PostCardCircle from '~/components/PostCardCircle';
import TagCloud from '~/components/TagCloud';

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

  const settingsSliderCardCategory: Settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    speed: 800,
    arrows: false,
    adaptiveHeight: true,
    centerPadding: '10px',
    customPaging: () => <div className={cx('dots')}></div>,
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
          <div className={cx('wrapper-slider')}>
            <Slider {...settingsSliderCardCategory}>
              {[1, 2, 3, 4, 5].map((item) => {
                return <CardCategory key={item} className={cx('card-category')} />;
              })}
            </Slider>
          </div>
          <div className={cx('wrapper-about')}>
            <Row gutter={[32, 32]}>
              <Col span={24} lg={{ span: 8 }}>
                <TitleBar>Latest Articles</TitleBar>
                <PostCardCircle
                  date="Thứ 3, 12 năm 2022"
                  title="The spectacle before us was indeed sublime"
                  image="http://ghost.estudiopatagon.com/rein/content/images/size/w160h160/2019/07/photo-1530021232320-687d8e3dba54.jpg"
                  swap
                ></PostCardCircle>
                <PostCardCircle
                  date="Thứ 3, 12 năm 2022"
                  title="The spectacle before us was indeed sublime"
                  image="http://ghost.estudiopatagon.com/rein/content/images/size/w160h160/2019/07/photo-1530021232320-687d8e3dba54.jpg"
                  swap
                ></PostCardCircle>
                <PostCardCircle
                  date="Thứ 3, 12 năm 2022"
                  title="The spectacle before us was indeed sublime"
                  image="http://ghost.estudiopatagon.com/rein/content/images/size/w160h160/2019/07/photo-1530021232320-687d8e3dba54.jpg"
                  swap
                ></PostCardCircle>
              </Col>
              <Col span={24} lg={{ span: 8 }}>
                <TitleBar>Tag cloud</TitleBar>
                <div className={cx('wrapper-tag-cloud')}>
                  <TagCloud className={cx('tag-cloud')} tag="Getting Started"></TagCloud>
                  <TagCloud className={cx('tag-cloud')} tag="Health"></TagCloud>
                  <TagCloud className={cx('tag-cloud')} tag="Lifestyle"></TagCloud>
                  <TagCloud className={cx('tag-cloud')} tag="Places"></TagCloud>
                  <TagCloud className={cx('tag-cloud')} tag="Technology"></TagCloud>
                </div>
              </Col>
              <Col span={24} lg={{ span: 8 }}>
                <TitleBar>About me</TitleBar>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

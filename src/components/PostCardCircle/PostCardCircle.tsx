import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { PropsTypeCardCircle } from './interfaces';

import styles from './PostCardCircle.module.scss';

const cx = classNames.bind(styles);

function PostCardCircle({ title, image, date }: PropsTypeCardCircle) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-img')}>
        <img className={cx('img')} src={image} alt="" />
      </div>
      <div className={cx('wrapper-content')}>
        <h2 className="gradient-effect">
          <Link className={cx('title')} to="/">
            {title}
          </Link>
        </h2>
        <span className={cx('date')}>{date}</span>
      </div>
    </div>
  );
}

export default PostCardCircle;

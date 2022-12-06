import classNames from 'classnames/bind';

import styles from './ClassicPost.module.scss';

const cx = classNames.bind(styles);

interface PropsType {}

function ClassicPost({}: PropsType) {
  return <div className={cx('wrapper')}>ClassicPost component</div>;
}

export default ClassicPost;

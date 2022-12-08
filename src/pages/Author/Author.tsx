import classNames from 'classnames/bind';

import styles from './Author.module.scss';

const cx = classNames.bind(styles);

interface PropsType {}

function Author({}: PropsType) {
  return <div className={cx('wrapper')}>Author component</div>;
}

export default Author;

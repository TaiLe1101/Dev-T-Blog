import classNames from 'classnames/bind';

import styles from './Author.module.scss';

const cx = classNames.bind(styles);

function Author() {
  document.title = 'Author page';

  return <div className={cx('wrapper')}>Author component</div>;
}

export default Author;

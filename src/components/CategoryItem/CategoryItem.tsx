import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CategoryItem.module.scss';
import { PropsTypeTagItem } from './interfaces';

const cx = classNames.bind(styles);

function CategoryItem({
  tag,
  amount,
  gettingStarted = false,
  technology = false,
  lifeStyle = false,
  places = false,
  health = false,
}: PropsTypeTagItem) {
  const classes = cx('number', {
    'getting-started': gettingStarted,
    technology: technology,
    'life-style': lifeStyle,
    places: places,
    health: health,
  });
  return (
    <div className={cx('wrapper')}>
      <Link to="/" className={cx('tag')}>
        {tag}
      </Link>
      <span className={classes}>{amount}</span>
    </div>
  );
}

export default CategoryItem;

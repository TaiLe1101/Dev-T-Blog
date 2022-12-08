import classNames from 'classnames/bind';
import { ModifierAmountCircle } from '../../interfaces';
import AmountCircle from '../AmountCircle';

import styles from './CardCategory.module.scss';

const cx = classNames.bind(styles);

interface PropsType extends ModifierAmountCircle {}

function CardCategory({ gettingStarted, technology, lifeStyle, places, health }: PropsType) {
  return (
    <div className={cx('wrapper')}>
      <img
        src="http://ghost.estudiopatagon.com/rein/content/images/size/w160h160/2019/07/austin-distel-M1aegHe2j6g-unsplash-1.jpg"
        alt=""
        className={cx('img')}
      />
      <span className={cx('tag')}>Korean</span>
      <AmountCircle gettingStarted className={cx('tag-amount')}>
        3
      </AmountCircle>
    </div>
  );
}

export default CardCategory;

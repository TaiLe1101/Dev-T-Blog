import classNames from 'classnames/bind';
import { ModifierAmountCircle } from '../../interfaces';

import styles from './AmountCircle.module.scss';

const cx = classNames.bind(styles);

interface PropsType extends ModifierAmountCircle {
  children: string | number;
  className?: string;
}

function AmountCircle({ className = '', children, gettingStarted, technology, lifeStyle, places, health }: PropsType) {
  const classes = cx('number', {
    'getting-started': gettingStarted,
    technology: technology,
    'life-style': lifeStyle,
    places: places,
    health: health,
    [className]: className,
  });
  return <div className={classes}>{children}</div>;
}

export default AmountCircle;

import { FC } from 'react'
import CopyText from '@ui/form-elements/copy-text/copy-text'
import { Coupon } from '@types-app/coupon'
import { CouponTypes } from '@enums/coupon'
import { formatDate } from '@utils/index'

import styles from './coupon-item.module.scss'

type ICouponItemProps = Coupon

const CouponItem: FC<ICouponItemProps> = ({
  amount,
  isPercent,
  code,
  type,
  shop,
  dateStart,
  dateEnd
}) => {
  const value = isPercent
    ? `${amount}%`
    : `$${amount}`;

  return (
    <div className={styles.coupon}>
      <div className={styles.coupon__percent}>{value} CHEAPER</div>
      <div className={styles.coupon__code}>Kod: <span>{code}</span></div>
      <div className={styles.coupon__info}>
        <li>{formatDate(dateStart)} ~ {formatDate(dateEnd)}</li>
        <li>
          {type === CouponTypes.ALL
            ? "For all products"
            : `Only for products from ${shop?.name}`
          }
        </li>
      </div>
      <div className={styles.coupon__icon}>
        <CopyText text={code} />
      </div>
    </div>
  )
}

export default CouponItem;
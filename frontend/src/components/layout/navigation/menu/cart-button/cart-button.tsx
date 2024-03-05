import { Icon } from '@ui/icon/Icon'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { AppRoute } from '@enums/route'

import styles from './cart-button.module.scss'
import { useTypedSelector } from '@hooks/useTypedSelector'

const CartButton: FC = () => {
  const { countProducts } = useTypedSelector(({ cart }) => cart);

	return (
    <NavLink
      to={AppRoute.CART}
      className={styles.cart__button}
    >
      <Icon iconName="cart" />
      {
        countProducts > 0 && (
          <span className={styles.cart__button__items}>{countProducts}</span>
        )
      }
    </NavLink>
	)
}

export default CartButton
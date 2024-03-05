import { AppRoute } from '@enums/route'
import { FC } from 'react'
import MenuItem from './menu-item'

import styles from './menu.module.scss'
import CartButton from './cart-button/cart-button'

const Menu: FC = () => {
	return (
		<div className={styles.menu}>
			<MenuItem
				name="Orders"
				path={AppRoute.ORDERS}
				iconName='orders'
			/>
			<MenuItem
				name="Coupons"
				path={AppRoute.COUPONS}
				iconName='coupons'
			/>
			<CartButton />
		</div>
	)
}

export default Menu
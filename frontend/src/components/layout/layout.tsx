import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Navigation from './navigation/navigation'

import styles from './layout.module.scss'

const Layout: FC = () => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.content}>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout

import { FC } from 'react'
import cn from 'clsx'

import styles from './heading.module.scss'

interface IHeadingProps {
	title: string
	className?: string
}

const Heading: FC<IHeadingProps> = ({ title, className = '' }) => {
	return (
		<h2
			className={cn(styles.heading, className)}
		>
			{title}
		</h2>
	)
}

export default Heading

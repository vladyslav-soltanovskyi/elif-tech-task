import { ButtonHTMLAttributes, FC } from 'react'
import cn from 'clsx'

import styles from './button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	isFull?: boolean;
}

const Button: FC<IButton> = ({
	children,
	className,
	isFull = false,
	...rest
}) => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.button_full]: isFull
			})}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button

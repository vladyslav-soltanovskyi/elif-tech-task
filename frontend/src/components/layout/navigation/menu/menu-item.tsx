import { Icon } from '@ui/icon/Icon'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import type { TypeIconName } from '@types-app/icon'

import styles from './menu.module.scss'

interface IMenuItemProps {
  path: string;
  iconName: TypeIconName;
  name: string;
}

const MenuItem: FC<IMenuItemProps> = ({
  path,
  iconName,
  name
}) => {
	return (
    <NavLink
      to={path}
      className={styles.menu__item}
    >
      <span className={styles.menu__item__icon}>
        <Icon iconName={iconName} />
      </span>
      <span className={styles.menu__item__name}>{name}</span>
    </NavLink>
	)
}

export default MenuItem
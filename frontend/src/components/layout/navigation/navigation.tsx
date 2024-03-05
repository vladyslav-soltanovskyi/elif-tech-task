import { FC } from "react";
import MenuContainer from "./menu/menu-container";
import { AppRoute } from "@enums/route";
import { NavLink } from "react-router-dom";

import styles from "./navigation.module.scss";

const Navigation: FC = () => {
  return (
    <div className={styles.navigation}>
      <NavLink to={AppRoute.HOME}>
        Logo
      </NavLink>
      <MenuContainer />
    </div>
  );
};

export default Navigation;

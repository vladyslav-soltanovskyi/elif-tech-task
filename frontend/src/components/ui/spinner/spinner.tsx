import { FC } from "react";
import styles from './spinner.module.scss';
import { Icon } from "@ui/icon/Icon";

const Spinner: FC = () => {
  return (
    <div role="status">
      <Icon iconName="spinner" className={styles.spinner} />
    </div>
  );
};

export default Spinner;

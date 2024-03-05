import { FC } from "react";
import { Icon } from "@ui/icon/Icon";

import styles from "./copy-text.module.scss";
import useCopy from "./useCopy";

interface ICopyTextProps {
  text: string;
}

const CopyText: FC<ICopyTextProps> = ({ text }) => {
  const { copied, copy } = useCopy(text);
  return (
    <div className={styles.copy} onClick={copy}>
      <Icon iconName={
        copied
          ? "checked"
          : "copy"
      } />
    </div>
  );
};

export default CopyText;
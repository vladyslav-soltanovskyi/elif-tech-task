import { FC, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { Icon } from "@ui/icon/Icon";
import { TOrderBy, TSortType } from "@types-app/sort";
import { sortIems } from "@pages/home/data";
import clsx from "clsx";

import styles from "./sort-select.module.scss";

interface ISortSelectProps {
  activeSortType: TSortType;
  activeOrderBy: TOrderBy;
  onClickSortType: (index: number) => void;
}

const SortSelect: FC<ISortSelectProps> = ({
  activeSortType,
  activeOrderBy,
  onClickSortType,
}) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const activeLabel = sortIems.find(
    (obj) => activeSortType === obj.type && activeOrderBy === obj.order
  )?.name;

  const sortRef = useOnclickOutside(() => {
    setVisiblePopup(false);
  });

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const onSelectItem = (index: number) => {
    if (onClickSortType) {
      onClickSortType(index);
    }
    setVisiblePopup(false);
  };

  return (
    <div ref={sortRef} className={styles.sort}>
      <div className={styles.sort__label}>
        <Icon iconName="arrow" className={visiblePopup ? styles.rotated : ""} />
        <b>Sort by:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className={styles.sort__popup}>
          <ul>
            {sortIems.map((obj, index) => (
              <li
                onClick={() => onSelectItem(index)}
                className={clsx({
                  [styles.active]:
                    activeSortType === obj.type && activeOrderBy === obj.order,
                })}
                key={`${obj.type}_${index}`}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortSelect;

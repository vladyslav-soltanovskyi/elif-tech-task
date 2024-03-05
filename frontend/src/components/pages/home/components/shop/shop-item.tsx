import { FC } from "react";
import cn from "clsx";
import { Shop } from "@types-app/shop";

import styles from "./shop.module.scss";

interface IShopItemProps extends Shop {
  selectedShopId: string;
  handleChangeShopId: (id: string) => void;
}

const ShopItem: FC<IShopItemProps> = ({
  id,
  name,
  imageUrl,
  selectedShopId,
  handleChangeShopId,
}) => {
  const onClick = () => handleChangeShopId(id);

  return (
    <div
      className={cn(styles.shop, {
        [styles.active]: selectedShopId === id,
      })}
      onClick={onClick}
    >
      <div className={styles.shop__name}>{name}</div>
      <div className={styles.shop__icon}>
        <img src={imageUrl} alt={name} />
      </div>
    </div>
  );
};

export default ShopItem;

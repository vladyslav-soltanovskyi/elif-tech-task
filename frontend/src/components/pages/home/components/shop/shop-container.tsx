import { FC } from "react";
import ShopItem from "./shop-item";
import Spinner from "@ui/spinner/spinner";
import { Shop } from "@types-app/shop";

import styles from "./shop.module.scss";

interface ShopContainerProps {
  shops?: Shop[];
  isLoading?: boolean;
  selectedShopId: string;
  handleChangeShopId: (id: string) => void;
}

const ShopContainer: FC<ShopContainerProps> = ({
  shops,
  isLoading,
  selectedShopId,
  handleChangeShopId,
}) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (!shops?.length) {
    return <p>Shops Not Found</p>;
  }

  return (
    <div className={styles.shop__container}>
      {shops.map((shop) => (
        <ShopItem
          key={shop.id}
          selectedShopId={selectedShopId}
          handleChangeShopId={handleChangeShopId}
          {...shop}
        />
        ))}
    </div>
  );
};

export default ShopContainer;
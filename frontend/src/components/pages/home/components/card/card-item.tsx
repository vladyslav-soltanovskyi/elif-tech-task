import { FC } from "react";
import { Button } from "@ui/form-elements";
import { Icon } from "@ui/icon/Icon";
import { FavoriteProducts, ProductDto } from "@types-app/product";
import { useTypedSelector } from "@hooks/useTypedSelector";
import { useActions } from "@hooks/useActions";
import clsx from "clsx";

import styles from "./card.module.scss";

interface ICardItemProps extends ProductDto {
  handleToggleStatus: (id: string) => () => void;
  favoriteProducts: FavoriteProducts;
}

const CardItem: FC<ICardItemProps> = (props) => {
  const {
    id,
    title,
    poster,
    description,
    price,
    shopId,
    shop,
    handleToggleStatus,
    favoriteProducts,
  } = props;
  const { products, shopId: selectedShopIdInCart } = useTypedSelector(
    ({ cart }) => cart.cart
  );
  const { addProduct } = useActions();

  const isAdded = !!products?.some((product) => product.product.id === id);
  const isNotSelctedShopIdInCart = !!selectedShopIdInCart;
  const isSelectedShopIdInCart = shopId === selectedShopIdInCart;
  const onClick = () => addProduct(props);
  return (
    <div className={styles.card}>
      <div className={styles.card__media}>
        <img src={poster} alt={title} />
        <div className={styles.card__heart} onClick={handleToggleStatus(id)}>
          <Icon
            iconName="heart"
            className={clsx(styles.card__heart__icon, {
              [styles.active]: favoriteProducts.includes(id),
            })}
          />
        </div>
      </div>
      <div className={styles.card__content}>
        <h2 className={styles["card__content-title"]}>{title}</h2>
        <p className={styles["card__content-description"]} title={description}>
          {description}
        </p>
        <p className={styles["card__content-company"]}>
          Company: <span>{shop.name}</span>
        </p>
        <div className={styles["card__content-footer"]}>
          <div className={styles["card__content-footer-price"]}>${price}</div>
          <Button
            className={styles["card__content-footer-btn"]}
            onClick={onClick}
            disabled={
              isAdded ||
              (!isAdded && !isSelectedShopIdInCart && isNotSelctedShopIdInCart)
            }
          >
            {isAdded && isSelectedShopIdInCart && <Icon iconName="checked" />}
            {!isAdded &&
              (!isNotSelctedShopIdInCart || isSelectedShopIdInCart) && (
                <Icon iconName="cart" />
              )}
            {isNotSelctedShopIdInCart &&
              !isAdded &&
              !isSelectedShopIdInCart && <Icon iconName="close" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;

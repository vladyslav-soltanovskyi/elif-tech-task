import { FC } from "react";
import CardItem from "./card-item";
import { FavoriteProducts, ProductDto } from "@types-app/product";
import Spinner from "@ui/spinner/spinner";
import { TOrderBy, TSortType } from "@types-app/sort";
import { getSortedProducts } from "@utils/sort";

import styles from "./card.module.scss";

interface ICardContainerProps {
  products?: ProductDto[];
  isLoading?: boolean;
  activeSortType: TSortType;
  activeOrderBy: TOrderBy;
  favoriteProducts: FavoriteProducts;
  handleToggleStatus: (id: string) => () => void;
}

const CardContainer: FC<ICardContainerProps> = ({
  products,
  isLoading,
  favoriteProducts,
  activeOrderBy,
  activeSortType,
  handleToggleStatus
}) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (!products?.length) {
    return <p>Products Not Found</p>;
  }

  const sortedProducts = getSortedProducts(
    products,
    favoriteProducts,
    activeOrderBy,
    activeSortType
  );

  return (
    <div className={styles.card__container}>
      {sortedProducts.map((product) => (
        <CardItem key={product.id} favoriteProducts={favoriteProducts}  handleToggleStatus={handleToggleStatus} {...product} />
      ))}
    </div>
  );
};

export default CardContainer;

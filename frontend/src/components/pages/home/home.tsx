import { FC, useState } from "react";
import CardContainer from "./components/card/card-container";
import ShopContainer from "./components/shop/shop-container";
import Heading from "@ui/heading/heading";
import { useProducts } from "./hooks/useProducts";
import { useShops } from "./hooks/useShops";
import Meta from "@ui/meta/meta";
import SortSelect from "./components/sort-select/sort-select";
import { TOrderBy, TSortType } from "@types-app/sort";
import { sortIems } from "./data";
import { useFavoriteProducts } from "./hooks/useFavoriteProducts";

import styles from "./home.module.scss";

const Home: FC = () => {
  const { isShopsLoading, shops, selectedShopId, handleChangeShopId } =
    useShops();
  const { isProductsLoading, products, countProducts } =
    useProducts(selectedShopId);
  const { favoriteProducts, handleToggleStatus } = useFavoriteProducts();
  const [activeSortType, setActiveSortType] = useState<TSortType>('date');
  const [activeOrderBy, setActiveOrderBy] = useState<TOrderBy>('asc');
  
  const onClickSortType = (index: number) => {
    setActiveSortType(sortIems[index].type);
    setActiveOrderBy(sortIems[index].order);
  }

  return (
    <Meta
      title="Home"
      description="On this page you can select products for your shopping cart"
    >
      <div className={styles.home}>
        <div className={styles.section}>
          <Heading title="Pharmacies" />
          <ShopContainer
            shops={shops}
            isLoading={isShopsLoading}
            selectedShopId={selectedShopId ?? ""}
            handleChangeShopId={handleChangeShopId}
          />
        </div>
        <div className={styles.section}>
          <div className={styles.header}>
            <Heading title={`medicines (${countProducts ?? 0})`} />
            <SortSelect activeSortType={activeSortType} onClickSortType={onClickSortType} activeOrderBy={activeOrderBy} />
          </div>
          <CardContainer
            isLoading={isProductsLoading}
            products={products}
            favoriteProducts={favoriteProducts}
            activeOrderBy={activeOrderBy}
            activeSortType={activeSortType}
            handleToggleStatus={handleToggleStatus}
          />
        </div>
      </div>
    </Meta>
  );
};

export default Home;

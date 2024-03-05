import { ProductDto } from "@types-app/product";
import { FC } from "react";

import styles from "./product-item.module.scss";

interface IProductItemProps {
  product: ProductDto;
  qty: number;
}

const ProductItem: FC<IProductItemProps> = ({ product, qty }) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__img}>
        <img
          src={product.poster}
          alt={product.title}
        />
      </div>
      <div className={styles.item__content}>
        {product.title} - ${product.price} - {qty}
      </div>
    </div>
  );
};

export default ProductItem;

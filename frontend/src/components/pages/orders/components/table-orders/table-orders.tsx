import { FC } from "react";
import cn from "clsx";
import ProductItem from "./components/product-item";
import { Order } from "@types-app/order";
import Spinner from "@ui/spinner/spinner";
import { formatDate } from "@utils/index";

import styles from "./table-orders.module.scss";

interface ITableOrdersProps {
  isLoading: boolean;
  orders?: Order[];
}

type TTableStyles = keyof typeof styles;

const TableOrders: FC<ITableOrdersProps> = ({ orders, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (!orders?.length) {
    return <p className="text-center">Orders Not Found</p>;
  }

  return (
    <table className={styles.table}>
      <thead className={styles.table__head}>
        <tr>
          <th className={styles.table__header}>Products</th>
          <th className={styles.table__header}>Address</th>
          <th className={styles.table__header}>Shop Name</th>
          <th className={styles.table__header}>Spent</th>
          <th className={styles.table__header}>Date</th>
          <th className={styles.table__header}>Status</th>
        </tr>
      </thead>
      <tbody className={styles.table__body}>
        {orders.map((order) => (
          <tr key={order.id}>
            <td className={styles.table__ceil}>
              {order.products.map((p) => (
                <ProductItem key={p.id} product={p.product} qty={p.qty} />
              ))}
            </td>
            <td className={styles.table__ceil}>{order.address}</td>
            <td className={styles.table__ceil}>{order.shop.name}</td>
            <td className={styles.table__ceil}>
              <div className={styles.table__ceil__amount}>
                ${order.spent}
              </div>
            </td>
            <td className={styles.table__ceil}>
              {formatDate(order.createdAt)}
            </td>

            <td className={styles.table__ceil}>
              <span
                className={cn(
                  styles.status,
                  styles[order.status.toLocaleLowerCase() as TTableStyles]
                )}
              >
                {order.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableOrders;

import { FC } from "react";
import TableOrders from "./components/table-orders/table-orders";
import OrderForm from "./components/order-form/order-form";
import useOrders from "./useOrders";

import styles from "./orders.module.scss";
import Meta from "@ui/meta/meta";

const Orders: FC = () => {
  const {
    phone,
    email,
    orders,
    isLoading,
    onChangeEmail,
    onChangePhone,
    searchOrders,
  } = useOrders();

  return (
    <Meta
      title="Orders history"
      description="On this page you can see your orders history"
    >
      <div className={styles.orders}>
        <OrderForm
          phone={phone}
          email={email}
          isLoading={isLoading}
          onChangeEmail={onChangeEmail}
          onChangePhone={onChangePhone}
          searchOrders={searchOrders}
        />
        <TableOrders isLoading={isLoading} orders={orders} />
      </div>
    </Meta>
  );
};

export default Orders;

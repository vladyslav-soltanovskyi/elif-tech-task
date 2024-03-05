import { FC } from "react";
import CouponItem from "./components/coupon-item/coupon-item";

import styles from "./coupons.module.scss";
import { useCoupons } from "./hooks/useCoupons";
import Spinner from "@ui/spinner/spinner";
import Meta from "@ui/meta/meta";

const Coupons: FC = () => {
  const { coupons, isLoading } = useCoupons();

  if (isLoading) {
    return <Spinner />;
  }

  if (!coupons?.length) {
    return <p>Coupons Not Found</p>;
  }

  return (
    <Meta
      title="Coupons"
      description="On this page you can select any coupon for your order"
    >
      <div className={styles.coupons}>
        {coupons.map((coupon) => (
          <CouponItem key={coupon.id} {...coupon} />
        ))}
      </div>
    </Meta>
  );
};

export default Coupons;

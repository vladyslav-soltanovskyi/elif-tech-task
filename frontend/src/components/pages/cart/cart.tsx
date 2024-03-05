import { FC, useState } from "react";
import Heading from "@ui/heading/heading";
import DeliveryForm from "./components//delivery-form/delivery-form";
import CartList from "./components/cart-list/cart-list";
import { useTypedSelector } from "@hooks/useTypedSelector";
import { useForm } from "@hooks/useForm";
import { orderRules, TOrderRules } from "@validation/index";
import { useActions } from "@hooks/useActions";
import Meta from "@ui/meta/meta";

import styles from "./cart.module.scss";

const Cart: FC = () => {
  const { clearInCart } = useActions();
  const { products, shopId } = useTypedSelector(({ cart }) => cart.cart);
  const [position, setPosition] = useState<google.maps.LatLngLiteral>();
  const { handleChange, setValue, handleSubmit, errors, values } =
    useForm<TOrderRules>({
      rules: orderRules,
    });
  const changeAddress = (address: string) => setValue("address", address);

  return (
    <Meta
      title="Shopping Cart"
      description="On this page you can order your selected items"
    >
      <div className={styles.cart}>
        <Heading title="Shopping Cart" />
        <div className={styles.content}>
          <DeliveryForm
            addressValue={values.address}
            handleChange={handleChange}
            setPosition={setPosition}
            errors={errors}
            onChangeAddress={changeAddress}
            />
          <CartList
            products={products}
            createOrder={handleSubmit}
            position={position}
            shopId={shopId}
            clearInCart={clearInCart}
          />
        </div>
      </div>
    </Meta>
  );
};

export default Cart;

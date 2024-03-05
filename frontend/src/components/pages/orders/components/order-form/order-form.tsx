import { ChangeEvent, FC, FormEvent } from "react";
import { Button, Field } from "@ui/form-elements";
import Heading from "@ui/heading/heading";

import styles from "./order-form.module.scss";

interface IOrderFormProps {
  phone: string;
  email: string;
  isLoading: boolean;
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePhone: (e: ChangeEvent<HTMLInputElement>) => void;
  searchOrders: () => void;
}

const OrderForm: FC<IOrderFormProps> = ({
  phone,
  email,
  isLoading,
  onChangeEmail,
  onChangePhone,
  searchOrders,
}) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchOrders();
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Heading title="Search Orders" />
      <Field
        placeholder="Email"
        className="mt-6"
        value={email}
        onChange={onChangeEmail}
      />
      <Field
        placeholder="Phone"
        className="mt-6"
        value={phone}
        onChange={onChangePhone}
      />
      <div className={styles.form__footer}>
        <Button disabled={isLoading}>Search</Button>
      </div>
    </form>
  );
};

export default OrderForm;

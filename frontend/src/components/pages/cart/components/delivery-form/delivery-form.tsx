import { ChangeEvent, FC } from "react";
import { Field } from "@ui/form-elements";
import Heading from "@ui/heading/heading";
import MapContainer from "@ui/map/map-container";
import { IErrorsMessages } from "@hooks/useValidator/types";
import { TOrderRules } from "@validation/index";

import styles from "./delivery-form.module.scss";

interface DeliveryFormProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddress: (address: string) => void;
  setPosition: (position: google.maps.LatLngLiteral) => void;
  position?: google.maps.LatLngLiteral;
  addressValue: string;
  errors: IErrorsMessages<TOrderRules>;
}

const DeliveryForm: FC<DeliveryFormProps> = ({
  onChangeAddress,
  handleChange,
  setPosition,
  position,
  addressValue,
  errors,
}) => {
  return (
    <div className={styles.form}>
      <Heading title="Delivery form" className={styles.form__title} />
      <div className={styles.form__fields}>
        <MapContainer
          addressValue={addressValue}
          coordinates={position}
          setCoordinates={setPosition}
          onChangeAddress={onChangeAddress}
          error={errors.address}
        />
        <Field
          placeholder={"Email"}
          name="email"
          onChange={handleChange}
          error={errors.email}
        />
        <Field
          placeholder={"Phone"}
          name="phone"
          onChange={handleChange}
          error={errors.phone}
        />
        <Field
          placeholder={"Name"}
          name="name"
          onChange={handleChange}
          error={errors.name}
        />
      </div>
    </div>
  );
};

export default DeliveryForm;

// import { FC } from 'react'
// import * as MaterialIcons from 'react-icons/md'

// import { TypeMaterialIconName } from '@/common/types/icon'

// export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
// 	const IconComponent = MaterialIcons[name];

// 	return <IconComponent />
// }
import { FC } from "react";
import CopyIcon from "@assets/copy.svg?react";
import CartIcon from "@assets/cart.svg?react";
import CouponsIcon from "@assets/coupons.svg?react";
import OrdersIcon from "@assets/orders.svg?react";
import CheckedIcon from "@assets/checked.svg?react";
import AddIcon from "@assets/add.svg?react";
import RemoveIcon from "@assets/remove.svg?react";
import CloseIcon from "@assets/close.svg?react";
import ArrowIcon from "@assets/arrow.svg?react";
import HeartIcon from "@assets/heart.svg?react";
import SpinnerIcon from "@assets/spinner.svg?react";

import { TypeIconName } from "@/common/types/icon";

export const Icon: FC<{ className?: string; iconName: TypeIconName }> = ({
  className,
  iconName,
}) => {
  switch (iconName) {
    case "copy":
      return <CopyIcon className={className} />;
    case "cart":
      return <CartIcon className={className} />;
    case "arrow":
      return <ArrowIcon className={className} />;
    case "spinner":
      return <SpinnerIcon className={className} />;
    case "heart":
      return <HeartIcon className={className} />;
    case "coupons":
      return <CouponsIcon className={className} />;
    case "orders":
      return <OrdersIcon className={className} />;
    case "checked":
      return <CheckedIcon className={className} />;
    case "add":
      return <AddIcon className={className} />;
    case "remove":
      return <RemoveIcon className={className} />;
    case "close":
      return <CloseIcon className={className} />;
    default:
      return <svg></svg>;
  }
};

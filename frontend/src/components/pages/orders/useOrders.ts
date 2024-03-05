import { OrdersService } from "@services/orders/orders";
import { Order } from "@types-app/order";
import { ChangeEvent, useState } from "react";

const useOrders = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [orders, setOrders] = useState<Order[]>();
  const [isLoading, setIsLoading] = useState(false);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);
  
  const searchOrders = async () => {
    try {
      setIsLoading(true);
      const res = await OrdersService.getOrdersByPhoneAndEmail(phone, email);
      setOrders(res.data);

    } catch(e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    email,
    phone,
    orders,
    isLoading,
    searchOrders,
    onChangeEmail,
    onChangePhone
  };
}

export default useOrders;
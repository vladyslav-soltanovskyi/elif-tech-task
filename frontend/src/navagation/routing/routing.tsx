import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoute } from '@enums/route';
import Home from '@pages/home/home';
import Cart from '@pages/cart/cart';
import Orders from '@pages/orders/orders';
import Coupons from '@pages/coupons/coupons';
import Layout from '@/components/layout/layout';

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Layout />}
        >
          <Route path={AppRoute.HOME} element={<Home />} />
          <Route path={AppRoute.ORDERS} element={<Orders />} />
          <Route path={AppRoute.COUPONS} element={<Coupons />} />
          <Route path={AppRoute.CART} element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

import { FC } from 'react'
import { Counter } from '@ui/form-elements';
import { useActions } from '@hooks/useActions';

import styles from './cart-list.module.scss'
import { ProductCart } from '@types-app/cart';

type ICartItemProps = ProductCart

const CartItem: FC<ICartItemProps> = ({
  product,  
  qty
}) => {
  const {
    id,
    title,
    price,
    poster,
  } = product;
  const { changeQtyProduct, removeProduct } = useActions();

  const onChange = (qty: number) => {
    changeQtyProduct({ productId: id, qty })
  }

  const handleDelete = () => removeProduct(id);

  return (
    <div className={styles.cart}>
      <div className={styles.cart__img}>
        <img src={poster} alt={title} />
      </div>
      <div className={styles.cart__content}>
        <div className={styles.cart__title}>{title}</div>
        <div className={styles.cart__body}>
          <div className={styles.cart__price}>${price}</div>
            <Counter
              current={qty}
              min={1}
              max={30}
              onChange={onChange}
            />
          <div className={styles.cart__total}>${price * qty}</div>
        </div>
        <div className={styles.cart__actions}>
          <button
            className={styles.action}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem;
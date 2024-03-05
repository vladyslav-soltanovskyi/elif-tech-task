import { ChangeEvent, FC, FocusEvent, KeyboardEvent, useState } from 'react'
import { Icon } from '@ui/icon/Icon';
import cn from 'clsx';

import styles from './counter.module.scss'

interface ICounterProps {
  current: number;
  max?: number;
  min?: number;
  onChange: (n: number) => void;
}

const Counter: FC<ICounterProps> = ({
  current,
  max = 30,
  min = 1,
  onChange
}) => {
  const [value, setValue] = useState(`${current}`);
  const isLast = current >= max;
  const isFirst = current <= min; 

  const applyCurrent = (num: number) => {
    const validNum = Math.max(min, Math.min(max, num));
    onChange(validNum);
    setValue(`${validNum}`);
  }

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    const num = +e.target.value.replace(/\D/g, '');
    applyCurrent(num);
  }

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowUp": {
        applyCurrent(current + 1);
        break;
      }
      case "ArrowDown": {
        applyCurrent(current - 1);
        break;
      }
    }
  }

  const increment = () => applyCurrent(current + 1);
  const decrement = () => applyCurrent(current - 1);

  return (
    <div className={styles.counter}>
      <button
        type="button"
        disabled={isFirst}
        onClick={decrement}
        className={cn(styles.counter__btn, styles.left)}
      >
        <Icon iconName="remove" />
      </button>
      <input
        className={styles.counter__input}
        type="text"
        value={value}
        onChange={onChangeValue}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
      <button
        type="button"
        disabled={isLast}
        onClick={increment}
        className={cn(styles.counter__btn, styles.right)}
      >
        <Icon iconName="add" />
      </button>
    </div>
  )
}


export default Counter
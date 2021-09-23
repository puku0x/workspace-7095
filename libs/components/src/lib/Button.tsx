import { ReactNode } from 'react';
import styles from './Button.module.css';

interface Props {
  children: ReactNode;
}

export const Button = (props: Props) => {
  const { children } = props;

  return (
    <button className={styles.button}>{children}</button>
  );
}

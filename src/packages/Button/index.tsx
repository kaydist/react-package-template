import React from 'react';
import styles from './_button.module.css';
import { ButtonProps } from './button.interface';

export const Button = ({ label, variant = 'primary' }: ButtonProps) => {
  return (
    <button className={`${styles.btn} ${styles[`btn_${variant}`]}`}>
      {label}
    </button>
  );
};

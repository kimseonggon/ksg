import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './style.module.scss'

interface Props {
    label: string
    to: string
}
const LinkComponent = (props: Props) => {
    const {label, to} = props
  return (
    <NavLink className={styles.link} to={to}>{label}</NavLink>
  );
};

export default LinkComponent;
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './style.module.scss'

interface Props {
  label: string
  to: string
}
const LinkComponent = (props: Props) => {
  const { label, to } = props
  const location = useLocation();
  return (
    <NavLink className={`${styles.link} ${location.pathname === to ? styles.disabled : ''}`} to={to} >{label}</NavLink>
  );
};

export default LinkComponent;
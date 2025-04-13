import React, { useState, useRef, useEffect, MouseEventHandler } from 'react';
import styles from './style.module.scss'
import TextField from '@mui/material/TextField';
interface Props {
  label: string
  type?: string
  password?: boolean
  onClick?: MouseEventHandler
}
const InputComponent = (props: Props) => {
  const { label, type, password = false, onClick } = props

  return (
    <TextField
      label={label}
      variant="outlined"
      type={password ? 'password' : 'text'}
      onClick={onClick}
    />
  )
}

export default InputComponent;
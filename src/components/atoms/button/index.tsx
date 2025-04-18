import React, { useState, useRef, useEffect } from 'react';
import styles from './style.module.scss';
import Button from '@mui/material/Button';
interface Props {
  label: string
  variant?: 'text' | 'outlined' | 'contained'
  type?: string
  disabled?: boolean
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void

}
const ButtonComponent = (props: Props) => {
  const { label, type, variant = 'contained', disabled = false, onClick } = props
  const [disabledToUse, setDisabledToUse] = useState(disabled)
  const lastReceivedDisabled = useRef(disabled)

  useEffect(() => {
    setDisabledToUse(disabled)
    lastReceivedDisabled.current = disabled
  }, [disabled])

  /**
   * 연속 클릭 방지
   */
  const wrappedOnClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
    setDisabledToUse(true)
    onClick(e)
    setTimeout(() => {
      setDisabledToUse(false)
    }, 500)
  }

  const classNameFn = () => {
    let name = ``
    if (type) {
      name = type.split(' ').map(t => {
        return styles[t]
      }).join(' ')
    }
    return name
  }

  return (
    <Button
      className={classNameFn()}
      variant={variant}
      disabled={disabledToUse}
      onClick={wrappedOnClick}
    >{label}</Button>
  );
};

export default ButtonComponent;
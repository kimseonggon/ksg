import { MouseEventHandler, KeyboardEventHandler, ChangeEventHandler } from 'react';
import TextField from '@mui/material/TextField';
interface Props {
  label: string
  type?: string
  password?: boolean
  onClick?: MouseEventHandler
  onChange?: ChangeEventHandler<HTMLInputElement>
  onKeyDown?: KeyboardEventHandler
}
const InputComponent = (props: Props) => {
  const { label, type, password = false, onChange, onKeyDown, onClick } = props

  return (
    <TextField
      label={label}
      variant="outlined"
      type={password ? 'password' : 'text'}
      onChange={onChange}
      onClick={onClick}
      onKeyDown={onKeyDown}
    />
  )
}

export default InputComponent;
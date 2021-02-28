import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
}

export const Button: React.FC<ButtonProps> = ({ color, children, ...rest }) => {
  return <button {...rest}>{children}</button>
}

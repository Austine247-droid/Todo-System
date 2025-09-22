// interface ButtonProps {
//   children: React.ReactNode
//   buttonBackgroundColor?: string
//   buttonStyles: string
// }

// const Button = ({ children, buttonBackgroundColor, buttonStyles }: ButtonProps) => {
//   return (
//     <button className={`${buttonBackgroundColor} ${buttonStyles} text-sm rounded-full`}>
//       {children}
//     </button>
//   )
// }

// export default Button

import { Button, ButtonProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface CustomButtonProps extends ButtonProps {
  label: string // Text inside the button
  leftIcon?: ReactNode // Optional icon on the left
  rightIcon?: ReactNode // Optional icon on the right
}

const CustomButton = ({ label, leftIcon, rightIcon, ...props }: CustomButtonProps) => {
  return (
    <Button
      bg=""
      color="white"
      {...props} // Allow overriding styles or adding events like onClick
    >
      {rightIcon && rightIcon}
      {leftIcon && leftIcon}
      {label}
    </Button>
  )
}

export default CustomButton

import React from 'react'
import { Text } from '../text'
import { TwoToneTypes } from '@/constants/core/var'

const Label: (React.FC<{
  children: any,
  icon?: any,
  type?: "default" | "green" | "red" | "yellow",
  className?: string,
  classNameText?: string,
  iconPosition?: "start" | "end",
  onMouseDown?: any,
}>) = ({ children, classNameText, icon, type = "default", iconPosition = "end", onMouseDown, ...props }) => {
  return (
    <div className={`m-1 flex items-center justify-center rounded-full px-2 h-[24px] gap-x-[6px] ${TwoToneTypes[type].bg} ${props.className}`} onMouseDown={onMouseDown}>
      {icon && iconPosition === "start" ? icon : null}
      <Text variant='Medium' color="text-Text-Light-Primary"
        className={`${TwoToneTypes[type].text} ${classNameText}`}>{children}</Text>
      {icon && iconPosition === "end" ? icon : null}
    </div>
  )
}

export default Label

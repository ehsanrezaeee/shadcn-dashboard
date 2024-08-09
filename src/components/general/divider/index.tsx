import React from 'react'
import { Text } from '../text'

const Divider: React.FC<{ width?: string, children?: any, borderColor?: string, bgColor?: string, borderType?: "solid" | "dashed" | "dotted" }> = ({ width, borderColor, children, bgColor, borderType = "solid" }) => {
  return (
    <div className={`w-${width || "full"} overflow-hidden relative flex items-center justify-center h-[1px]`}>
      <div className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-t-[0.5px] border-${borderType} border-${borderColor || "Action-Light-Disabled"} w-full`}>
      </div>
      {children ? <Text variant='Regular' color='text-Action-Light-Disabled' className={`z-10 bg-${bgColor || "WHITE-Main"} px-2`}>{children}</Text> : null}
    </div>
  )
}

export default Divider

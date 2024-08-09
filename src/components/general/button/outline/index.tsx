import { Button } from '@/components/ui/button'
import React from 'react'

const OutlineButton: React.FC<any> = (props) => {
  let haveBorder = props?.haveBorder;

  return (
    <Button className={`
      ${haveBorder ? "border border-solid border-GREY-Glass-20" : "border-none"} 
      bg-transparent rounded-[10px] px-[14px] py-[8px] flex items-center gap-x-2 
      ${props?.className}
      hover:text-Text-Light-Primary hover:!bg-GREY-Glass-12
    `} {...props} />
  )
}

export default OutlineButton

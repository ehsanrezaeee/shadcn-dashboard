import { Button } from '@/components/ui/button'
import React from 'react'

const PrimaryButton: React.FC<any> = (props) => {
  return (
    <Button className={`
      bg-PRIMARY-Main rounded-[10px] px-[30px] py-[10px] flex items-center gap-x-2 
      hover:text-WHITE-Main hover:!bg-PRIMARY-Dark
      ${props?.className ? props?.className : null}
    `} {...props} />
  )
}

export default PrimaryButton

import React from 'react'

// icons
import { DismissFilled } from '@fluentui/react-icons'

const Drawer: React.FC<{ isOpenDrawer: boolean, children: any, setIsOpenDrawer: any }> = ({ isOpenDrawer, children, setIsOpenDrawer }) => {
  return isOpenDrawer ? (
    <div className='w-screen h-screen bg-BLACK-Glass-24 z-[999] fixed top-0 left-0' onClick={() => setIsOpenDrawer(false)}>
      <div className='h-screen w-[320px] bg-WHITE-Main flex flex-col px-6 py-4 fixed right-0 top-0 items-center' onClick={(e) => {
        e.stopPropagation();
      }}>
        <DismissFilled fontSize={20} className='text-Text-Light-Secondary font-bold absolute left-4 top-4' onClick={() => setIsOpenDrawer(false)} />
        {children}
      </div>
    </div>
  ) : null
}

export default Drawer

import React from 'react'

// icons
// import { DismissFilled } from '@fluentui/react-icons'

const Modal: React.FC<{ isModalOpen: boolean, children: any, setIsModalOpen: any, className?: string }> = ({ isModalOpen, children, setIsModalOpen, className }) => {
  return isModalOpen ? (
    <div
      className='w-screen h-screen bg-BLACK-Glass-24 z-[999] fixed top-0 left-0'
      onClick={(e) => {
        e.stopPropagation();
        setIsModalOpen(false);
      }}
    >
      <div
        className={`h-[500px] w-[700px] bg-WHITE-Main flex flex-col px-6 py-4 fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] items-center rounded-[10px] ${className}`}
        onClick={(e) => e.stopPropagation()}  // Prevent click inside the modal from propagating
      >
        {/* <DismissFilled fontSize={20} className='text-Text-Light-Secondary font-bold absolute left-4 top-4' onClick={() => setIsModalOpen(false)} /> */}
        {children}
      </div>
    </div>
  ) : null;
}

export default Modal;

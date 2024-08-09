import React from 'react';

// general components
import { Text } from '../text';

const UploadButton: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="upload-container w-fit">
      <label htmlFor="file-upload" className='w-fit px-2 py-1 flex items-center justify-center rounded-[8px] border border-solid border-GREY-Glass-32'>
        <Text variant='Medium' color='text-Text-Light-Primary'>{title}</Text>
      </label>
      <input id="file-upload" type="file" className="hidden" />
    </div>
  );
};

export default UploadButton;

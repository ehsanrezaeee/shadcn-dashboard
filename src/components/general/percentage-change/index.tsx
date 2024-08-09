import React from 'react';
import { Text } from '../text';

interface PercentageChangeProps {
  value: number;
}

const PercentageChange: React.FC<PercentageChangeProps> = ({ value }) => {
  const isPositive = value >= 0;
  const arrow = isPositive ? '↑' : '↓';
  const percentage = Math.abs(value);
  const arrowClass = isPositive ? 'text-green-600' : 'text-red-600';

  return (
    <div className={`inline-flex items-center gap-x-1 px-2 h-6 rounded-full border border-solid ${isPositive ? 'bg-green-100 text-green-600 border-green-600' : 'bg-red-100 text-red-600 border-red-600'}`}>
       <Text size='Text sm' variant='Medium' className={`${isPositive ? 'text-green-600' : 'text-red-600'}`}>{arrow}</Text>
      <Text size='Text sm' variant='Medium' className={`${isPositive ? 'text-green-600' : 'text-red-600'}`}>{percentage}%</Text>
    </div>
  );
};

export default PercentageChange;

import * as React from 'react';

interface SliderProps {
  title?: string;
  initialValue?: number;
  value?: number;
  min?: number;
  max?: number;
}

export const Slider = ({ title = '', initialValue = 50, min = 0, max = 100 }: SliderProps) => {
  const [value, setValue] = React.useState<number>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div>
      <h1 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h1>
      <input className='w-full' type='range' min={min} max={max} value={value} onChange={handleChange} />
      <p className='mb-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{value} point</p>
    </div>
  );
};

export default Slider;

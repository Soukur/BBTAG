import * as React from 'react';
import { Button } from './button';

interface SliderProps {
  title?: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  min?: number;
  max?: number;
}

export const Slider = ({ title = '', value, setValue, min = 0, max = 100 }: SliderProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div>
      <h1 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {title}
        <Button
          onClick={() => {
            if (value < 100) {
              setValue((num) => num + 1);
            } else {
              setValue((num) => num + 0);
            }
          }}
        >
          +
        </Button>
        <Button
          onClick={() => {
            if (value > 0) {
              setValue((num) => num - 1);
            } else {
              setValue((num) => num - 0);
            }
          }}
        >
          -
        </Button>
      </h1>
      <input
        className='w-full  cursor-pointer rounded-lg appearance-non'
        type='range'
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      <p className='mb-1 text-xl text-right font-bold tracking-tight text-gray-900 dark:text-white'>{value} point</p>
    </div>
  );
};

export default Slider;

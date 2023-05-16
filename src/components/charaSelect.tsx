import React from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { images } from '../data';

interface CharaSelectProps {
  value: keyof typeof images;
  setValue: React.Dispatch<React.SetStateAction<keyof typeof images>>;
}

export const CharaSelect = ({ value, setValue }: CharaSelectProps) => {
  return (
    <Select.Root
      value={value}
      onValueChange={(v) => {
        setValue(v as keyof typeof images);
      }}
    >
      <Select.Trigger className='inline-flex items-center justify-center rounded p-3 text-base leading-none gap-4 bg-white'>
        <Select.Value />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className='overflow-hidden bg-white rounded-md'>
          <Select.ScrollUpButton>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport>
            <SelectItem value='adachi'>Adachi</SelectItem>
            <SelectItem value='seth'>Seth</SelectItem>
            <SelectItem value='yu'>Yu</SelectItem>
            <SelectItem value='hilda'>Hilda</SelectItem>
          </Select.Viewport>
          <Select.ScrollDownButton>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = React.forwardRef(
  ({ children, ...props }: Select.SelectItemProps, forwardedRef: React.Ref<HTMLDivElement>) => {
    return (
      <Select.Item
        {...props}
        ref={forwardedRef}
        className='text-base leading-none flex items-center relative select-none h-[25px] pr-[35px] pl-[25px]'
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className='absolute left-0 w-[25px] inline-flex items-center justify-center'>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

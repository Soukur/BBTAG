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
        <Select.Content className='overflow-hidden bg-white rounded-md py-3'>
          <Select.ScrollUpButton>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport>
            <SelectItem value='adachi'>Adachi</SelectItem>
            <SelectItem value='aegis'>Aegis</SelectItem>
            <SelectItem value='akihiko'>Akihiko</SelectItem>
            <SelectItem value='azrael'>Azrael</SelectItem>
            <SelectItem value='blake'>Blake</SelectItem>
            <SelectItem value='blitztank'>Blitztank</SelectItem>
            <SelectItem value='carmine'>Carmine</SelectItem>
            <SelectItem value='celica'>Celica</SelectItem>
            <SelectItem value='chie'>Chie</SelectItem>
            <SelectItem value='elizabeth'>Elizabeth</SelectItem>
            <SelectItem value='es'>Es</SelectItem>
            <SelectItem value='gordeau'>Gordeau</SelectItem>
            <SelectItem value='hakumen'>Hakumen</SelectItem>
            <SelectItem value='hazama'>Hazama</SelectItem>
            <SelectItem value='heart'>Heart</SelectItem>
            <SelectItem value='hilda'>Hilda</SelectItem>
            <SelectItem value='hyde'>Hyde</SelectItem>
            <SelectItem value='izayoi'>Izayoi</SelectItem>
            <SelectItem value='jin'>Jin</SelectItem>
            <SelectItem value='jubei'>Jubei</SelectItem>
            <SelectItem value='kanji'>Kanji</SelectItem>
            <SelectItem value='labrys'>Labrys</SelectItem>
            <SelectItem value='linne'>Linne</SelectItem>
            <SelectItem value='mai'>Mai</SelectItem>
            <SelectItem value='makoto'>Makoto</SelectItem>
            <SelectItem value='merkava'>Merkava</SelectItem>
            <SelectItem value='mika'>Mika</SelectItem>
            <SelectItem value='naotoShirogane'>NaotoShirogane</SelectItem>
            <SelectItem value='naotoKurogane'>NaotoKurogane</SelectItem>
            <SelectItem value='neo'>Neo</SelectItem>
            <SelectItem value='nine'>Nine</SelectItem>
            <SelectItem value='noel'>Noel</SelectItem>
            <SelectItem value='nu'>Nu</SelectItem>
            <SelectItem value='orie'>Orie</SelectItem>
            <SelectItem value='platinum'>Platinum</SelectItem>
            <SelectItem value='rachel'>Rachel</SelectItem>
            <SelectItem value='ragna'>Ragna</SelectItem>
            <SelectItem value='ruby'>Ruby</SelectItem>
            <SelectItem value='seth'>Seth</SelectItem>
            <SelectItem value='susanoo'>Susanoo</SelectItem>
            <SelectItem value='tager'>Tager</SelectItem>
            <SelectItem value='teddie'>Teddie</SelectItem>
            <SelectItem value='vatista'>Vatista</SelectItem>
            <SelectItem value='waldstein'>Waldstein</SelectItem>
            <SelectItem value='weiss'>Weiss</SelectItem>
            <SelectItem value='yang'>Yang</SelectItem>
            <SelectItem value='yosuke'>Yosuke</SelectItem>
            <SelectItem value='yu'>Yu</SelectItem>
            <SelectItem value='yukiko'>Yukiko</SelectItem>
            <SelectItem value='yumi'>Yumi</SelectItem>
            <SelectItem value='yuzuriha'>Yuzuriha</SelectItem>
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

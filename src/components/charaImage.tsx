import { images } from '../data';

interface CharaImageProps {
  charaName: keyof typeof images;
}

export const CharaImage = ({ charaName }: CharaImageProps) => {
  return <img src={images[charaName]} />;
};

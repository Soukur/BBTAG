import { images } from '../data';

interface CharaImageProps {
  charaName: keyof typeof images;
}

export const CharaImage = ({ charaName }: CharaImageProps) => {
  return <img style={{ width: '50%', height: '50%' }} src={images[charaName]} />;
};

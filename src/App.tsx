import * as React from 'react';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { Slider } from './components/slider';
import { CharaImage } from './components/charaImage';
import { CharaSelect } from './components/charaSelect';
import { images } from './data';

const App = () => {
  const [teamPowerValue, setTeamPowerValue] = React.useState<number>(50);
  const [aveDamageValue, setAveDmageValue] = React.useState<number>(50);
  const [maxDamageValue, setMaxDamageValue] = React.useState<number>(50);
  const [defenceValue, setDefenceValue] = React.useState<number>(50);
  const [tacticsValue, setTacticsValue] = React.useState<number>(50);
  const [mixupOkiValue, setMixupOkiValue] = React.useState<number>(50);
  const [chara1, setChara1] = React.useState<keyof typeof images>('seth');
  const [chara2, setChara2] = React.useState<keyof typeof images>('hilda');

  return (
    <div className='App '>
      <div className='bg-[url("./images/bg/bg.jpg")] bg-opacity-30 bg-cover bg-center  min-w-screen min-h-screen p-2 md:p-6'>
        <h1 className='p-9 gap-2 border-b-2 text-3xl flex justify-center items-center font-bold text-black '>
          BBTAG TEAM RATING
        </h1>

        <div className='flex flex-col md:flex-row h-auto'>
          <div className='p-2 py-2  flex-1 '>
            <div className='flex justify-between md:pt-32'>
              <CharaImage charaName={chara1} />
              <CharaImage charaName={chara2} />
            </div>
            <div className='flex justify-center '>
              <CharaSelect value={chara1} setValue={setChara1} />
              <CharaSelect value={chara2} setValue={setChara2} />
            </div>
          </div>

          <div className='bg-gray-400 bg-opacity-70  rounded-xl p-6  flex-1  border-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
            <div className='flex flex-col '>
              <Slider title='TEAMPOWER' value={teamPowerValue} setValue={setTeamPowerValue} />
              <Slider title='AVE DAMAGE' value={aveDamageValue} setValue={setAveDmageValue} />
              <Slider title='MAX DAMAGE' value={maxDamageValue} setValue={setMaxDamageValue} />
              <Slider title='DEFENCE' value={defenceValue} setValue={setDefenceValue} />
              <Slider title='TACTICS' value={tacticsValue} setValue={setTacticsValue} />
              <Slider title='MIXUP&OKI' value={mixupOkiValue} setValue={setMixupOkiValue} />
            </div>
          </div>
        </div>
        <div className='flex justify-center p-5'>
          <TwitterShareButton
            url='https://soukur.github.io/BBTAG/'
            title={`${chara1}+${chara2}
TeamPower:${teamPowerValue}
AveDamage:${aveDamageValue}
MaxDamage:${maxDamageValue}
Defence:${defenceValue}
Tactics:${tacticsValue}
Mixup&Oki:${mixupOkiValue}`}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
};

export default App;

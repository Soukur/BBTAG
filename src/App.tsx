import * as React from 'react';
import { Slider } from './components/slider';
import { CharaImage } from './components/charaImage';
import { CharaSelect } from './components/charaSelect';
import { images } from './data';

const App = () => {
  const [teamPowerValue, setTeamPowerValue] = React.useState<number>(50);
  const [aveDmageValue, setAveDmageValue] = React.useState<number>(50);
  const [maxDamageValue, setMaxDamageValue] = React.useState<number>(50);
  const [defenceValue, setDefenceValue] = React.useState<number>(50);
  const [tacticsValue, setTacticsValue] = React.useState<number>(50);
  const [mixupOkiValue, setMixupOkiValue] = React.useState<number>(50);
  const [chara1, setChara1] = React.useState<keyof typeof images>('seth');
  const [chara2, setChara2] = React.useState<keyof typeof images>('hilda');

  // const backgroundImageStyle = {
  //   backgroundImage: `url("${bgImage}")`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  // };

  return (
    <div className='App '>
      <div className='bg-[url("./images/bg/bg.jpg")] bg-opacity-30 bg-cover bg-center  min-w-screen min-h-screen bg-slate-500 border-2 border-blue-700'>
        <h1 className='p-9 border-2 border-red-700 text-3xl flex justify-center items-center font-bold text-black '>
          BBTAG TEAM RATING
        </h1>

        <div className='flex flex-row h-auto'>
          <div className='p-2 flex-1  border-2 border-green-500'>
            <CharaSelect value={chara1} setValue={setChara1} />
            <CharaSelect value={chara2} setValue={setChara2} />
            <CharaImage charaName={chara1} />
            <CharaImage charaName={chara2} />
          </div>

          <div className='bg-gray-400 bg-opacity-70  rounded-xl p-2 flex-1  border-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
            <div className='flex flex-col '>
              <Slider title='TEAMPOWER' value={teamPowerValue} setValue={setTeamPowerValue} />
              <Slider title='AVE DAMAGE' value={aveDmageValue} setValue={setAveDmageValue} />
              <Slider title='MAX DAMAGE' value={maxDamageValue} setValue={setMaxDamageValue} />
              <Slider title='DEFENCE' value={defenceValue} setValue={setDefenceValue} />
              <Slider title='TACTICS' value={tacticsValue} setValue={setTacticsValue} />
              <Slider title='MIXUP&OKI' value={mixupOkiValue} setValue={setMixupOkiValue} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import * as React from 'react';
import { Slider } from './components/slider';
import bgImage from './images/bg/bg.jpg';

const App = () => {
  const [teamPowerValue, setTeamPowerValue] = React.useState<number>(50);
  const [aveDmageValue, setAveDmageValue] = React.useState<number>(50);
  const [maxDamageValue, setMaxDamageValue] = React.useState<number>(50);
  const [defenceValue, setDefenceValue] = React.useState<number>(50);
  const [tacticsValue, setTacticsValue] = React.useState<number>(50);
  const [mixupOkiValue, setMixupOkiValue] = React.useState<number>(50);

  const backgroundImageStyle = {
    backgroundImage: `url("${bgImage}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='App '>
      <div className='min-w-screen min-h-screen bg-slate-500 border-2 border-blue-700 ' style={backgroundImageStyle}>
        <h1 className='p-3 border-2 border-red-700 text-3xl flex justify-center items-center font-bold text-black '>
          BBTAG TEAM RATING
        </h1>

        <div className='flex flex-row h-auto'>
          <div className='p-2 flex-1  border-2 border-green-500'>LEFT</div>

          <div className='p-2 flex-1  border-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
            <div className='flex flex-col  '>
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

import * as React from 'react';
import { Slider } from './components/slider';
import bgImage from './images/bg/bg.jpg';

const App = () => {
  const [teamPowerValue] = React.useState<number>(50);
  const [aveDmageValue] = React.useState<number>(50);
  const [maxDamageValue] = React.useState<number>(50);
  const [defenceValue] = React.useState<number>(50);
  const [tacticsValue] = React.useState<number>(50);
  const [mixupOkiValue] = React.useState<number>(50);

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
              <Slider title='TEAMPOWER' min={0} max={100} initialValue={teamPowerValue} value={teamPowerValue} />
              <Slider title='AVE DAMAGE' min={0} max={100} initialValue={aveDmageValue} value={aveDmageValue} />
              <Slider title='MAX DAMAGE' min={0} max={100} initialValue={maxDamageValue} value={maxDamageValue} />
              <Slider title='DEFENCE' min={0} max={100} initialValue={defenceValue} value={defenceValue} />
              <Slider title='TACTICS' min={0} max={100} initialValue={tacticsValue} value={tacticsValue} />
              <Slider title='MIXUP&OKI' min={0} max={100} initialValue={mixupOkiValue} value={mixupOkiValue} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

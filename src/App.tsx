import * as React from 'react';
import { Button } from './components/button';
import { Slider } from './components/slider';
import bgImage from './images/bg.jpg';

const App = () => {
  const [value, setValue] = React.useState<number>(50);

  const backgroundImageStyle = {
    backgroundImage: `url("${bgImage}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='App'>
      <div className='w-screen h-screen bg-slate-500 border-2 border-blue-700 ' style={backgroundImageStyle}>
        <h1 className=' border-2 border-red-700 text-3xl flex justify-center items-center font-bold text-black h-32 '>
          BBTAG TEAM RATING
        </h1>

        <div className='flex'>
          <div className='p-2 w-1/2  border-2 border-green-500'>LEFT</div>

          <div className='p-2 w-1/2  border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <div className='grid grid-rows-6 gap-2'>
              <Slider title='aaaaaaa' min={0} max={100} value={value} />

              <h3 className='mb-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                TEAMPOWER
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
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

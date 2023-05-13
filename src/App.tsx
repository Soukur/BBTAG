import * as React from 'react';
import { Button } from './components/button';

const App = () => {
  const [teamPower, setTeamPower] = React.useState(0);
  return (
    <body className='bg-slate-500 text-2xl'>
      <h1 className='text-3xl flex justify-center items-center bg-white h-32  text-emerald-400    '>
        BBTAG TEAM RATING
      </h1>

      <section className='flex'>
        <div className='p-2 w-1/2 bg-green-500'>LEFT</div>

        <div className='p-2 w-1/2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <h5 className='mb-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>セトヒルダ</h5>

          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>214PA</p>

          <Button
            onClick={() => {
              setTeamPower((num) => num + 2);
            }}
          >
            +
          </Button>
          <Button
            onClick={() => {
              setTeamPower((num) => num - 2);
            }}
          >
            -
          </Button>
        </div>
      </section>

      <div>{teamPower}</div>
    </body>
  );
};

export default App;

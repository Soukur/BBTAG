import { Button } from './components/button';

const App = () => {
  return (
    <>
      <h1 className='text-emerald-400 text-3xl'>BBTAG最高のゲーム</h1>

      <div className='max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <h5 className='mb-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>セトヒルダ</h5>

        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>214PA</p>
        <Button>おわっとるが</Button>
        <Button
          onClick={() => {
            alert('じゃない');
          }}
        >
          可愛いだけ
        </Button>
        <Button>punpun</Button>
        <Button>バイバイ！</Button>
      </div>
    </>
  );
};

export default App;

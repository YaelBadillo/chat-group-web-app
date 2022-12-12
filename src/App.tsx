import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <button className="padding rounded bg-blue-500 py-2 px-2 font-bold text-white">
      My button
    </button>
  );
};

export default App;
